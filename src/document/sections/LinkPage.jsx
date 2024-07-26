import { Text } from "@react-pdf/renderer";
import { Page } from "./Page";

export const LinkPage = ({
  date,
}) => {
  const getDate = () => {
    return date.toLocaleDateString();
  }

  return <Page
    bookmark={date.toLocaleDateString()}
  >
    <Text id={getDate()}>Fecha: {getDate()}</Text>
  </Page>
}
