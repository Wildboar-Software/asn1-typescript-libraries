/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxNrOfPoints
 * @description
 * 
 * Upper bound of 15 points in a UMTS location polygon (annex B.9). The handover
 * prose does not discuss the bound.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxNrOfPoints                        INTEGER ::= 15
 * ```
 * 
 * @constant
 */
export
const maxNrOfPoints: INTEGER = 15;

/* eslint-enable */
