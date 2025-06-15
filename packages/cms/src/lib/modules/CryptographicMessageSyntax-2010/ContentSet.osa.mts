/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import { ct_AuthenticatedData } from "../CryptographicMessageSyntax-2010/ct-AuthenticatedData.oa.mjs";
import { ct_Data } from "../CryptographicMessageSyntax-2010/ct-Data.oa.mjs";
import { ct_DigestedData } from "../CryptographicMessageSyntax-2010/ct-DigestedData.oa.mjs";
import { ct_EncryptedData } from "../CryptographicMessageSyntax-2010/ct-EncryptedData.oa.mjs";
import { ct_EnvelopedData } from "../CryptographicMessageSyntax-2010/ct-EnvelopedData.oa.mjs";
import { ct_SignedData } from "../CryptographicMessageSyntax-2010/ct-SignedData.oa.mjs";

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

/* eslint-enable */
