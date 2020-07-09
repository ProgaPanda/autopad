import api, {
  DocumentGenerationOptions,
} from "../../shared/services/api/api.service";
import { isSuccess } from "../../shared/services/error/error.service";

/**
 * Returns generated pdf document's URL
 * @param {string} text
 * @param {DocumentGenerationOptions} documentOptions
 * @returns {Promise<string | void> } promise with document URL
 */
export const generateDocument = (
  text: string,
  options: DocumentGenerationOptions
): Promise<string | void> => {
  return api
    .getPdfDocument(text, options)
    .then((file) => {
      if (isSuccess(file)) {
        const document = new Blob([file], {
          type: "application/pdf",
        });

        return URL.createObjectURL(document);
      }
    })
    .catch(() => {
      console.error("error with document generation");
    });
};

/**
 * initial document options object
 */
export const initialOptions: DocumentGenerationOptions = {
  fontId: "8X3WPZ4800AT",
  documentHeight: 842,
  documentWidth: 595,
  fontSize: 14,
  fontColor: "(0, 0, 0, 1)",
  wordSpacingVariance: 0.5,
  lineSpacingVariance: 0.5,
  randomSeed: -1,
  lineSpacing: 1.5,
};

export type OptionsAction =
  | { type: "DOCUMENT_WIDTH"; value: number }
  | { type: "DOCUMENT_HEIGHT"; value: number }
  | { type: "FONT_COLOR"; value: string };

/**
 * document options reducer
 * @param {string} text
 * @param {DocumentGenerationOptions} documentOptions
 * @returns {Promise<string | void> } promise with document URL
 */
export const optionsReducer = (
  state: DocumentGenerationOptions,
  action: OptionsAction
): DocumentGenerationOptions => {
  switch (action.type) {
    case "DOCUMENT_WIDTH":
      return {
        ...state,
        documentWidth: action.value,
      };
    case "DOCUMENT_HEIGHT":
      return {
        ...state,
        documentHeight: action.value,
      };

    case "FONT_COLOR":
      return {
        ...state,
        fontColor: action.value,
      };

    default:
      return state;
  }
};
