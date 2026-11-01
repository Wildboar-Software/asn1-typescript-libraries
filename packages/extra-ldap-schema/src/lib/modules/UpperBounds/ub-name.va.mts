/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";

/**
 * @summary ub_name
 * @description
 *
 * Upper bound imported by PKCS-9. Defined locally so this package does not
 * depend on another ASN.1 module. Value from X.520 UpperBounds (`ub-name`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-name INTEGER ::= 128
 * ```
 *
 * @constant
 */
export
const ub_name: INTEGER = 128;

/* eslint-enable */
