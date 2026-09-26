import { type ASN1Element } from "@wildboar/asn1";
import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
/**
 * @summary String encode an LDAP value when the syntax is not known.
 * @description
 *
 * This function encodes a default value.
 *
 * @param value The value to encode.
 * @returns The encoded value.
 * @function
 */
export declare function defaultValueEncoder(value: ASN1Element): string;
export declare function distinguishedValueToString(value: ASN1Element): string;
export declare function attributeTypeAndValueToString(atav: AttributeTypeAndValue): string;
export default attributeTypeAndValueToString;
//# sourceMappingURL=tostr.d.mts.map