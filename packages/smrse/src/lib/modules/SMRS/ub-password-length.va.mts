/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary ub_password_length
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ub-password-length INTEGER ::= 20
 * ```
 *
 * Upper bound on `Password` in clauses 2.2 and 3.2, which write it as
 * `PrintableString (SIZE (0..ub-password-length))`. This module's
 * `Password` assignment does not apply that size constraint.
 *
 * @constant
 */
export
const ub_password_length: INTEGER = 20;

/* eslint-enable */
