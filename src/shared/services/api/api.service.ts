import axios from "axios";
import { Result, isSuccess } from "../error/error.service";

const baseURL = "https://vigilant-jang-264104.netlify.app/.netlify/functions";

export interface DocumentGenerationOptions {
  fontId?: string;
  fontSize?: string;
  fontColor?: string;
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
   * @returns {Promise<Result<Blob>>}
   */
  getPdfDocument: (
    text: string,
    documentOptions: DocumentGenerationOptions
  ): Promise<Result<Blob>> => {
    return api
      .post<Result<Blob>>("pdf", {
        text,
        ...documentOptions,
      })
      .then((response) => {
        if (isSuccess(response)) {
          return response.data;
        }
      })
      .catch((err) => {
        return err;
      });
  },
};
