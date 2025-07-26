// src/components/data/blogPosts.ts (or wherever your blogPosts array is defined)

import { coreStrengthPost } from "./coreStrengthPost";
import { healthyHabitsPost } from "./healthyHabitsPost";
import { hiitSciencePost } from "./hiitSciencePost";
import { motivationPost } from "./motivationPost";
import { postWorkoutNutritionPost } from "./postWorkoutNutritionPost";
import { recoveryPost } from "./recoveryPost";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: {
    type: "paragraph" | "heading" | "subheading" | "list" | "exercise" | "numbered-list-item";
    text?: string;
    items?: string[];
    level?: 2 | 3 | 4;
    exerciseDetails?: {
      name: string;
      howToPerform: string;
      benefits: string;
    }[];
  }[];
}

export const blogPosts: BlogPost[] = [
  coreStrengthPost,
  postWorkoutNutritionPost,
  motivationPost,
  hiitSciencePost,
  healthyHabitsPost,
  recoveryPost,
];