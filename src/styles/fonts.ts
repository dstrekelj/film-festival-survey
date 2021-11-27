import { fontFace } from "../common/services/styled-components";
import RobotoBlack from "../assets/fonts/Roboto/Roboto-Black.ttf";
import RobotoBlackItalic from "../assets/fonts/Roboto/Roboto-BlackItalic.ttf";
import RobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoBoldItalic from "../assets/fonts/Roboto/Roboto-BoldItalic.ttf";
import RobotoItalic from "../assets/fonts/Roboto/Roboto-Italic.ttf";
import RobotoLight from "../assets/fonts/Roboto/Roboto-Light.ttf";
import RobotoLightItalic from "../assets/fonts/Roboto/Roboto-LightItalic.ttf";
import RobotoMedium from "../assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoMediumItalic from "../assets/fonts/Roboto/Roboto-MediumItalic.ttf";
import RobotoRegular from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoThin from "../assets/fonts/Roboto/Roboto-Thin.ttf";
import RobotoThinItalic from "../assets/fonts/Roboto/Roboto-ThinItalic.ttf";

export const fontFaces = fontFace([
  ["Roboto", "normal", 100, RobotoThin],
  ["Roboto", "italic", 100, RobotoThinItalic],
  ["Roboto", "normal", 300, RobotoLight],
  ["Roboto", "italic", 300, RobotoLightItalic],
  ["Roboto", "normal", 400, RobotoRegular],
  ["Roboto", "italic", 400, RobotoItalic],
  ["Roboto", "normal", 500, RobotoMedium],
  ["Roboto", "italic", 500, RobotoMediumItalic],
  ["Roboto", "normal", 700, RobotoBold],
  ["Roboto", "italic", 700, RobotoBoldItalic],
  ["Roboto", "normal", 900, RobotoBlack],
  ["Roboto", "italic", 900, RobotoBlackItalic],
]);
