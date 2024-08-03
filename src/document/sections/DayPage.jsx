import { Link, Text } from "@react-pdf/renderer";
import { Page } from "./Page";
import { NAVIGATION_LINK_ID } from "./CalendarNavigate";

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
        left: 0,
      }}
      src={`#${NAVIGATION_LINK_ID}`}
    >Regresar</Link>
    <Text>Fecha: {getDate()}</Text>
  </Page>
}
