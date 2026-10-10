/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary numOfExtensions
 * @description
 *
 * Upper bound on the `extensions` sequence of a charging message.
 * The module sets it to 1 and marks it network specific, so an
 * operator may publish a different limit. The sequence, when
 * present, has length 1 up to this value.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numOfExtensions INTEGER ::= 1
 * ```
 * 
 * @constant
 */
export
const numOfExtensions: INTEGER = 1;

/* eslint-enable */
