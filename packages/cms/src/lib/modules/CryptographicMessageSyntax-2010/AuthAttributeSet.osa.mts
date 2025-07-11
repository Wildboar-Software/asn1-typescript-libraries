/* eslint-disable */
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa.mjs";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa.mjs";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

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

/* eslint-enable */
