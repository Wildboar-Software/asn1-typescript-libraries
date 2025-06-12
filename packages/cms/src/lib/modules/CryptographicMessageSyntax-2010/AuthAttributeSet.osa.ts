/* eslint-disable */
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa.js";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa.js";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa.js";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
export { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa.js";
export { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa.js";
export { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa.js";

/* START_OF_SYMBOL_DEFINITION AuthAttributeSet */
/**
 * @summary AuthAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttributeSet ATTRIBUTE ::= { aa-contentType | aa-messageDigest | aa-signingTime, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const AuthAttributeSet: ATTRIBUTE[] = [
    aa_contentType,
    aa_messageDigest,
    aa_signingTime,
];
/* END_OF_SYMBOL_DEFINITION AuthAttributeSet */

/* eslint-enable */
