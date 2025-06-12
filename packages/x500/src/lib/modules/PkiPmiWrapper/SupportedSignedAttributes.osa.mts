/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { contentType } from "../PkiPmiWrapper/contentType.oa.mjs";
import { messageDigest } from "../PkiPmiWrapper/messageDigest.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { contentType } from "../PkiPmiWrapper/contentType.oa.mjs";
export { messageDigest } from "../PkiPmiWrapper/messageDigest.oa.mjs";

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
