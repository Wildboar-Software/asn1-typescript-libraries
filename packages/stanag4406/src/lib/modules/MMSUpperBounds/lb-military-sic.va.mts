/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";



/**
 * @summary lb_military_sic
 * @description
 * 
 * 3. Minimum length of one subject indicator code. APP-3 assignments are three
 * characters; a SIC may be longer, up to `ub-military-sic`. STANAG 4406 (Ed.
 * 2), Annex A, B.107 and Annex K.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lb-military-sic INTEGER ::= 3
 * ```
 * 
 * @constant
 */
export
const lb_military_sic: INTEGER = 3;

/* eslint-enable */
