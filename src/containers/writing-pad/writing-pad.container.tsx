import React, { useState, useReducer } from "react";
import styles from "./writing-pad.module.scss";
import { TextArea } from "./components/text-area/text-area.component";
import { ReactComponent as LoadingIcon } from "../../assets/svgs/loading.icon.svg";
import { ReactComponent as EmptyState } from "../../assets/svgs/empty-state.svg";
import {
  generateDocument,
  optionsReducer,
  initialOptions,
} from "./writing-pad.service";
import { WORDING } from "../../shared/i18n/en.wording";
import { Button } from "../../components/button/button.component";
import { OptionsController } from "./components/options-controller/options-controller.component";

const t = WORDING.WRITING_PAD;

export const WritingPad = () => {
  const [text, setText] = useState(t.TEXT_AREA.INITIAL_TEXT);
  const [documentOptions, optionsDispatcher] = useReducer(
    optionsReducer,
    initialOptions
  );

  const [documentURL, setDocumentURL] = useState("");
  const [loading, setLoading] = useState(false);

  const getDocument = () => {
    if (text) {
      setLoading(true);
      generateDocument(text, documentOptions)
        .then((documentURL) => {
          if (documentURL) {
            setDocumentURL(documentURL);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className={styles["writing-pad"]}>
      <div className={styles["writing-pad__textarea"]}>
        <OptionsController dispatcher={optionsDispatcher} />
        <TextArea
          text={text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(event.target.value)
          }
        />
        <div className={styles["writing-pad__actions"]}>
          <Button onClick={getDocument} isLoading={loading}>
            {t.TEXT_AREA.ACTIONS.GENERATE_BTN}
          </Button>
        </div>
      </div>
      {loading ? (
        <LoadingIcon />
      ) : (
        <div className={styles["writing-pad__document"]}>
          {documentURL ? (
            <iframe
              src={documentURL}
              frameBorder="0"
              title="generated document"
            />
          ) : (
            <>
              <EmptyState className={styles["writing-pad__empty-state"]} />
              <p>{t.DOCUMENT.EMPTY_STATE_TEXT}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
