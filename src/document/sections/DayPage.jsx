import { Link, Text } from "@react-pdf/renderer";
import { Page } from "./Page";
import { NAVIGATION_LINK_ID } from "./CalendarNavigate";
import { Calendar } from "../icons/Calendar";

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
        top: 2,
        right: 2,
      }}
      src={`#${NAVIGATION_LINK_ID}`}
    >
      <Calendar />
    </Link>
    <Text>Fecha: {getDate()}</Text>
  </Page>
}
