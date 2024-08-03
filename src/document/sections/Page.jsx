import { Page as PageExternal } from "@react-pdf/renderer";
import { DocumentStyles } from "../DocumentStyles";

export const Page = ({
  children,
  linkId,
}) => <PageExternal
  style={DocumentStyles.Page}
  id={linkId}
>
    {children}
  </PageExternal>
