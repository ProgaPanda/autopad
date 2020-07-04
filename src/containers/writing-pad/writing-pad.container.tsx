import React, { useState } from "react";
import styles from "./writing-pad.module.scss";
import { TextArea } from "../../components/text-area/text-area.component";
import { ReactComponent as LoadingIcon } from "../../assets/svgs/loading.icon.svg";
import { generateDocument } from "./writing-pad.service";
import { WORDING } from "../../shared/i18n/en.wording";
import { Button } from "../../components/button/button.component";

const t = WORDING.WRITING_PAD;

export const WritingPad = () => {
  const [text, setText] = useState(t.TEXT_AREA.INITIAL_TEXT);
  const [documentURL, setDocumentURL] = useState("");
  const [loading, setloading] = useState(false);

  const getDocument = () => {
    if (text) {
      setloading(true);
      generateDocument(text, {
        fontId: "8X3WPZ4800AT",
        documentHeight: "842pt",
        documentWidth: "595pt",
        fontSize: "14pt",
        wordSpacingVariance: 0.5,
        lineSpacingVariance: 0.5,
      }).then((documentURL) => {
        if (documentURL) {
          setDocumentURL(documentURL);
          setloading(false);
        }
      });
    }
  };

  return (
    <div className={styles["writing-pad"]}>
      <div className={styles["writing-pad__textarea"]}>
        <TextArea
          text={text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(event.target.value)
          }
        />
        <div className={styles["writing-pad__actions"]}>
          <Button onClick={getDocument}>
            {t.TEXT_AREA.ACTIONS.GENERATE_BTN}
          </Button>
        </div>
      </div>
      {loading ? (
        <LoadingIcon />
      ) : (
        <iframe src={documentURL} frameBorder="0" title="generated document" />
      )}
    </div>
  );
};
