/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";

/**
 * @summary ub_surname_length
 * @description
 *
 * Upper bound 40 for printable `surname` (ITU-T X.411 (1999), Annex B). Universal
 * surname bound is `ub-universal-surname-length` (64).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-surname-length                         INTEGER ::= 40
 * ```
 *
 * @constant
 */
export const ub_surname_length: INTEGER = 40;

/* eslint-enable */
