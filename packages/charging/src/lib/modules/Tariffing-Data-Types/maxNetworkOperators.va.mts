/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxNetworkOperators
 * @description
 *
 * Most operators that may send charging information for one call,
 * and the upper bound of `networkOperators` on START and STOP.
 * They are identified up to the `network` arc of
 * {@link NetworkIdentification}. Clause 6.1 b notes that the limit
 * of six is operational. Exceeding it is not accepted
 * (clause 6.3.9).
 *
 * [ES 201 296 V1.3.1, clauses 6.1 b and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxNetworkOperators INTEGER ::= 6
 * ```
 * 
 * @constant
 */
export
const maxNetworkOperators: INTEGER = 6;

/* eslint-enable */
