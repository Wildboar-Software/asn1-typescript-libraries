/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";


/**
 * @summary ub_privacy_mark_length
 * @description
 *
 * Maximum length of a `PrivacyMark` string. Taken from ITU-T
 * Rec. X.411 | ISO/IEC 10021-4. ITU-T Rec. X.841 (10/2000)
 * [§6.1.2](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-privacy-mark-length INTEGER ::= 128
 * ```
 *
 * @constant
 */
export const ub_privacy_mark_length: INTEGER = 128;

/* eslint-enable */
