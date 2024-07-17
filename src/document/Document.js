import { Document as DocumentPdf, PDFViewer } from '@react-pdf/renderer';
import { FrontPage } from './sections/FrontPage';
import { LinkPage } from './sections/LinkPage';


export const Document = ({
  initDate,
  endDate,
}) => {
  const numberOfDays = Math.floor((endDate - initDate) / (1000 * 60 * 60 * 24));

  return <DocumentPdf
    author='Francisco Javier Ponce Rosales'
  >
    <FrontPage />
    {
      Array.from({ length: numberOfDays }, (_, i) => {
        const date = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000);
        return <LinkPage key={date.toISOString()} date={date} />
      })
    }
  </DocumentPdf>
};
