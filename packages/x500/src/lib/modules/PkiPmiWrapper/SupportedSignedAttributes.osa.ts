/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { contentType } from "../PkiPmiWrapper/contentType.oa.js";
import { messageDigest } from "../PkiPmiWrapper/messageDigest.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { contentType } from "../PkiPmiWrapper/contentType.oa.js";
export { messageDigest } from "../PkiPmiWrapper/messageDigest.oa.js";

/* START_OF_SYMBOL_DEFINITION SupportedSignedAttributes */
/**
 * @summary SupportedSignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignedAttributes ATTRIBUTE ::= { contentType | messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedSignedAttributes: ATTRIBUTE[] = [
    contentType,
    messageDigest,
];
/* END_OF_SYMBOL_DEFINITION SupportedSignedAttributes */

/* eslint-enable */
