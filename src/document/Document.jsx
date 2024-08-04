import { Document as DocumentPdf, PDFViewer } from '@react-pdf/renderer';
import { FrontPage } from './sections/FrontPage';
import { DayPage } from './sections/DayPage';
import { DocumentContext } from './DocumentContext';
import { useContext } from 'react';
import { CalendarNavigate } from './sections/CalendarNavigate';


export const Document = () => {
  const { initDate, endDate, getHashConfig } = useContext(DocumentContext);
  const numberOfDays = Math.round((endDate.getTime() - initDate.getTime() + 1) / (24 * 60 * 60 * 1000));

  return <PDFViewer
    className="h-screen w-screen"
    key={getHashConfig()}
  >
    <DocumentPdf
      author='Francisco Javier Ponce Rosales'
    >
      {/* <FrontPage /> */}

      <CalendarNavigate
        initDate={initDate}
        endDate={endDate}
        availableDays={[0, 1, 2, 3, 4, 5, 6]}
        startWeekDay={1}
      />

      {
        Array.from({ length: numberOfDays + 1 }, (_, i) => {
          const date = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000);
          return <DayPage key={date.toLocaleDateString()} date={date} />
        })
      }
    </DocumentPdf>
  </PDFViewer>
};
