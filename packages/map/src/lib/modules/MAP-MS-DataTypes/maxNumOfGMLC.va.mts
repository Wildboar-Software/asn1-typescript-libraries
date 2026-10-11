/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxNumOfGMLC
 * @description
 *
 * Upper bound of GMLC-List (5). If segmentation is used, the complete GMLC-List
 * shall be sent in one segment. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxNumOfGMLC  INTEGER ::= 5
 * ```
 * 
 * @constant
 */
export
const maxNumOfGMLC: INTEGER = 5;

/* eslint-enable */
