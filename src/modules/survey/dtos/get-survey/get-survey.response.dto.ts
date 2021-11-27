import { JsonApiResource } from "../../../../common/json-api/json-api-resource";

interface GetSurveyResponse {
  title: string;
  description: string;
  questions: Array<{
    questionId: string;
    questionType: string;
    label: string;
    required: boolean;
    attributes?: {
      min?: number;
      max?: number;
    };
  }>;
}

export type GetSurveyResponseDto = JsonApiResource<GetSurveyResponse>;
