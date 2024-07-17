import { Page as PageExternal } from "@react-pdf/renderer";
import { DocumentStyles } from "../DocumentStyles";

export const Page = ({
  children,
}) => <PageExternal
  style={DocumentStyles.Page}
>
    {children}
  </PageExternal>
