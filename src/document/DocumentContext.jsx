import { createContext, useCallback, useState } from "react";

export const DocumentContext = createContext({
  showConfig: false,
  setShowConfig: () => { },
  initDate: new Date(),
  setInitDate: () => { },
  endDate: new Date(),
  setEndDate: () => { },
  showCalendars: [],
  setShowCalendars: () => { },
  showFrontPage: false,
  setShowFrontPage: () => { },
  frontPageColor: "#000000",
  setFrontPageColor: () => { },

  getHashConfig: () => { },
});

export const DocumentProvider = ({ children }) => {
  const [showConfig, setShowConfig] = useState(false);
  const firstDayOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const [initDate, setInitDate] = useState(firstDayOfCurrentMonth);
  const lastDayOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  const [endDate, setEndDate] = useState(lastDayOfCurrentMonth);
  const [showCalendars, setShowCalendars] = useState([]);
  const [showFrontPage, setShowFrontPage] = useState(false);
  const [frontPageColor, setFrontPageColor] = useState("#000000");

  const getHashConfig = useCallback(() => {
    const config = {
      initDate: initDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      showCalendars,
      showFrontPage,
      frontPageColor,
    };

    const hashConfig = btoa(JSON.stringify(config));

    return hashConfig;
  }, [
    initDate,
    endDate,
    showCalendars,
    showFrontPage,
    frontPageColor,
  ]);

  return <DocumentContext.Provider value={{
    showConfig,
    setShowConfig,
    initDate,
    setInitDate,
    endDate,
    setEndDate,
    showCalendars,
    setShowCalendars,
    showFrontPage,
    setShowFrontPage,
    frontPageColor,
    setFrontPageColor,
    getHashConfig,
  }}>
    {children}
  </DocumentContext.Provider>;
};
