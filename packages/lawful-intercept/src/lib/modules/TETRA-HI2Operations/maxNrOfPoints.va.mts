/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxNrOfPoints
 * @description
 * 
 * Upper bound on the number of points in a `GA-Polygon`. The polygon contains
 * from 1 to this many points. The present document states no further meaning
 * for the value 15.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxNrOfPoints INTEGER ::= 15
 * ```
 * 
 * @constant
 */
export
const maxNrOfPoints: INTEGER = 15;

/* eslint-enable */
