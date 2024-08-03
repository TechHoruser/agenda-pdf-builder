import { Page as PageExternal } from "@react-pdf/renderer";
import { DocumentStyles } from "../DocumentStyles";

export const Page = ({
  children,
  linkId,
  style = {},
}) => <PageExternal
  style={{
    ...DocumentStyles.Page,
    ...style,
  }}
  id={linkId}
>
    {children}
  </PageExternal>
