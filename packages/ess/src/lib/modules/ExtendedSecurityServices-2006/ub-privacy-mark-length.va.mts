/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";


/**
 * @summary ub_privacy_mark_length
 * @description
 *
 * Upper bound (128) on `ESSPrivacyMark.pString` size ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2)).
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
