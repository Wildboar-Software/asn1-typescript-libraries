/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxLongSignalInfoLength
 * @description
 *
 * Maximum octets for one `LongSignalInfo` using White Book SCCP with the
 * maximum number of segments. Accounts for lower-layer octets and other
 * information elements in the same component. (3GPP TS 29.002 V19.1.0 clause
 * 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxLongSignalInfoLength  INTEGER ::= 2560
 * ```
 * 
 * @constant
 */
export
const maxLongSignalInfoLength: INTEGER = 2560;

/* eslint-enable */
