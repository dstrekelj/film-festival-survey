import { Question } from "../question";

export interface Survey {
  title: string;
  description: string;
  questions: Question[];
}
