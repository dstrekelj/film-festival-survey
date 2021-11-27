import { useEffect } from "react";
import { GetSurveyResponseDto } from "./dtos/get-survey";

export const Survey = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/v1/survey");
      const json: GetSurveyResponseDto = await response.json();
      console.log(json.data.attributes);
    })();
  }, []);

  return <div className="App">Survey</div>;
};
