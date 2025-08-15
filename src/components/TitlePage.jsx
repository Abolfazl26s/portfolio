import { useTranslation } from "react-i18next";
const TitlePage = (fa, en) => {
  const { i18n } = useTranslation();
  const curLang = i18n.language;
  return (
    <>
      <div className="mb-3">
        <h1 className="mainTitle ">
          {curLang === "fa" ? fa : en}
        </h1>
      </div>
    </>
  );
};

export default TitlePage;
