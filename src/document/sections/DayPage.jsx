import { Image, Link, Text } from "@react-pdf/renderer";
import { Page } from "./Page";
import { NAVIGATION_LINK_ID } from "./CalendarNavigate";

const navigationHomeIconSvg = `
data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2L2 21h20z"/>
</svg>
`;

export const DayPage = ({
  date,
}) => {
  const getDate = () => {
    return date.toLocaleDateString();
  }

  return <Page
    bookmark={date.toLocaleDateString()}
    linkId={date.toLocaleDateString()}
  >
    <Link
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      src={`#${NAVIGATION_LINK_ID}`}
    >
      <Image
        src={navigationHomeIconSvg}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </Link>
    <Text>Fecha: {getDate()}</Text>
  </Page>
}
