/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.js";
import { ct_AuthenticatedData } from "../CryptographicMessageSyntax-2010/ct-AuthenticatedData.oa.js";
import { ct_Data } from "../CryptographicMessageSyntax-2010/ct-Data.oa.js";
import { ct_DigestedData } from "../CryptographicMessageSyntax-2010/ct-DigestedData.oa.js";
import { ct_EncryptedData } from "../CryptographicMessageSyntax-2010/ct-EncryptedData.oa.js";
import { ct_EnvelopedData } from "../CryptographicMessageSyntax-2010/ct-EnvelopedData.oa.js";
import { ct_SignedData } from "../CryptographicMessageSyntax-2010/ct-SignedData.oa.js";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.js";
export { ct_AuthenticatedData } from "../CryptographicMessageSyntax-2010/ct-AuthenticatedData.oa.js";
export { ct_Data } from "../CryptographicMessageSyntax-2010/ct-Data.oa.js";
export { ct_DigestedData } from "../CryptographicMessageSyntax-2010/ct-DigestedData.oa.js";
export { ct_EncryptedData } from "../CryptographicMessageSyntax-2010/ct-EncryptedData.oa.js";
export { ct_EnvelopedData } from "../CryptographicMessageSyntax-2010/ct-EnvelopedData.oa.js";
export { ct_SignedData } from "../CryptographicMessageSyntax-2010/ct-SignedData.oa.js";

/* START_OF_SYMBOL_DEFINITION ContentSet */
/**
 * @summary ContentSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentSet CONTENT-TYPE ::= {
 * --  Define the set of content types to be recognized.
 * ct-Data | ct-SignedData | ct-EncryptedData | ct-EnvelopedData |
 * ct-AuthenticatedData | ct-DigestedData, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentSet: CONTENT_TYPE[] = [
    ct_Data,
    ct_SignedData,
    ct_EncryptedData,
    ct_EnvelopedData,
    ct_AuthenticatedData,
    ct_DigestedData,
];
/* END_OF_SYMBOL_DEFINITION ContentSet */

/* eslint-enable */
