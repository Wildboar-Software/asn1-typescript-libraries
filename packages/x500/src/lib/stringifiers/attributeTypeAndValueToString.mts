import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { _decode_DirectoryString } from "../modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
import directoryStringToString from "./directoryStringToString.mjs";
import { oidToAttributeNameMap } from "./oidToAttributeName.mjs";

function attributeValueToString(value: ASN1Element): string {
    try {
        return directoryStringToString(_decode_DirectoryString(value)).trim();
    } catch {
        const rendered = value.toString();
        if (
            rendered.length >= 2
            && rendered.startsWith("\"")
            && rendered.endsWith("\"")
        ) {
            return rendered.slice(1, -1);
        }
        return rendered;
    }
}

/**
 * @deprecated
 */
export default function attributeTypeAndValueToString(
    atav: AttributeTypeAndValue
): string {
    const key: string = oidToAttributeNameMap.get(atav.type_.toString())
        ?? atav.type_.toString();
    const value: string = attributeValueToString(atav.value);
    return `${key}=${value}`;
}
