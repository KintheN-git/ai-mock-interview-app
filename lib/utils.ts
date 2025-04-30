import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const techIconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInterviewCover() {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
}

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = await Promise.all(
    techArray.map(async (tech) => {
      const normalized = normalizeTechName(tech);
      const url = `${techIconBaseUrl}/${normalized}/${normalized}-original.svg`;
      const exists = await checkIconExists(url);
      return {
        tech,
        url: exists ? url : "/tech.svg",
      };
    })
  );

  return logoURLs;
};
