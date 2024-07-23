import React from "react";
import { useTranslation } from 'react-i18next';
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t('fullstack_developer'),
          t('frontend_developer'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
