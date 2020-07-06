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
  documentHeight: "842pt",
  documentWidth: "595pt",
  fontSize: "14pt",
  wordSpacingVariance: 0.5,
  lineSpacingVariance: 0.5,
  randomSeed: -1,
  lineSpacing: 1.5,
};

type OptionsAction =
  | { type: "DOCUMENT_WIDTH"; value: string }
  | { type: "DOCUMENT_HEIGHT"; value: string };

/**
 * document options reducer
 * @param {string} text
 * @param {DocumentGenerationOptions} documentOptions
 * @returns {Promise<string | void> } promise with document URL
 */
export const optionsReducer = (
  state: DocumentGenerationOptions,
  action: OptionsAction
) => {
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

    default:
      return state;
  }
};
