import { Document as DocumentPdf, Link, PDFViewer } from '@react-pdf/renderer';
import { FrontPage } from './sections/FrontPage';
import { LinkPage } from './sections/LinkPage';
import { DocumentContext } from './DocumentContext';
import { useContext } from 'react';
import { Page } from './sections/Page';


export const Document = () => {
  const { initDate, endDate, getHashConfig } = useContext(DocumentContext);
  const numberOfDays = Math.floor((endDate.getTime() - initDate.getTime() + 1) / (24 * 60 * 60 * 1000));

  return <PDFViewer
    className="h-screen w-screen"
    key={getHashConfig()}
  >
    <DocumentPdf
      author='Francisco Javier Ponce Rosales'
    >
      <FrontPage />

      <Page>

        {
          Array.from({ length: numberOfDays + 1 }, (_, i) => {
            const date = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000);
            return <Link src={`#${date.toLocaleDateString()}`}>Fecha: {date.toLocaleDateString()}</Link>
          })
        }
      </Page>

      {
        Array.from({ length: numberOfDays + 1 }, (_, i) => {
          const date = new Date(initDate.getTime() + i * 24 * 60 * 60 * 1000);
          return <LinkPage key={date.toLocaleDateString()} date={date} />
        })
      }
    </DocumentPdf>
  </PDFViewer>
};
