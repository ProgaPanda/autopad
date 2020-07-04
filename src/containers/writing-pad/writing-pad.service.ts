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
