import { rest } from "msw";
import default500Response from "./responses/default-500.json";
import getSurvey200Response from "./responses/get-survey-200.json";
import postSurveyAnswers201 from "./responses/post-survey-answers-422.json";
import postSurveyAnswers422 from "./responses/post-survey-answers-422.json";

export const handlers = [
  rest.get("/api/v1/survey", (req, res, ctx) => {
    if (req.url.searchParams.get("error")) {
      return res(ctx.status(500), ctx.json(default500Response));
    }

    return res(ctx.status(200), ctx.json(getSurvey200Response));
  }),
  rest.post("/api/v1/survey/:id/answers", (req, res, ctx) => {
    if (!req.body) {
      return res(ctx.status(422), ctx.json(postSurveyAnswers422));
    }

    return res(ctx.status(200), ctx.json(postSurveyAnswers201));
  }),
];
