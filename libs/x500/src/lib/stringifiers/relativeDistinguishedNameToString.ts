import { RelativeDistinguishedName } from "../modules/InformationFramework/RelativeDistinguishedName.ta";
import attributeTypeAndValueToString from "./attributeTypeAndValueToString";

/**
 * @deprecated
 */
export default function relativeDistinguishedNameToString(
    rdn: RelativeDistinguishedName
): string {
    return rdn
        .map(attributeTypeAndValueToString)
        .map((str) => str.replace(/\\/g, "\\\\").replace(/\+/g, "\\+"))
        .join("+");
}
