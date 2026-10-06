import { escapeATAV } from "@wildboar/ldap";
import { RelativeDistinguishedName } from "../modules/InformationFramework/RelativeDistinguishedName.ta.mjs";
import attributeTypeAndValueToString from "./attributeTypeAndValueToString.mjs";

export default function relativeDistinguishedNameToString(
    rdn: RelativeDistinguishedName
): string {
    return rdn
        .map((atav) => {
            const rendered = attributeTypeAndValueToString(atav);
            const separator = rendered.indexOf("=");
            const typeName = rendered.slice(0, separator);
            const value = rendered.slice(separator + 1);
            return `${typeName}=${escapeATAV(value)}`;
        })
        .join("+");
}
