/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { contentType } from "../PkiPmiWrapper/contentType.oa.mjs";
import { messageDigest } from "../PkiPmiWrapper/messageDigest.oa.mjs";
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

/* eslint-enable */
