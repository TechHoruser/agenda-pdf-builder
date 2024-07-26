import { Page, Image } from "@react-pdf/renderer";

export const FrontPage = ({ hash }) => {
  return <Page
    key={hash}
  >
    <Image
      src="/front-page.jpg"
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  </Page>
}
