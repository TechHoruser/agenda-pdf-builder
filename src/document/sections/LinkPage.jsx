import { Text } from "@react-pdf/renderer";
import { Page } from "./Page";

export const LinkPage = ({
  date,
}) => <Page>
    <Text>Fecha: {date.toISOString()}</Text>
  </Page>
