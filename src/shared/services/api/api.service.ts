import axios from "axios";

const baseURL = "https://vigilant-jang-264104.netlify.app/.netlify/functions";

export interface DocumentGenerationOptions {
  fontId?: string;
  fontSize?: number;
  documentWidth?: string;
  documentHeight?: string;
  randomSeed?: number;
  wordSpacingVariance?: number;
  lineSpacingVariance?: number;
  lineSpacing?: number;
}

const api = axios.create({
  baseURL,
});

export default {
  /**
   * Returns generated pdf document with the text provided
   * @param {string} text
   * @param {DocumentGenerationOptions} documentOptions
   * @returns {Promise}
   */
  getPdfDocument: (
    text: string,
    documentOptions: DocumentGenerationOptions = {}
  ) => {
    return api.post("pdf", { text, ...documentOptions });
  },
};
