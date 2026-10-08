/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary ub_password_length
 * @description
 *
 * Upper bound on `Password`: 20 printable characters
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2). The `Password` type in this module does not
 * enforce the bound.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ub-password-length INTEGER ::= 20
 * ```
 * 
 * @constant
 */
export
const ub_password_length: INTEGER = 20;

/* eslint-enable */
