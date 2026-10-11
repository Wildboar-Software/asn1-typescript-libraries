/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxChargingControlIndicatorsLen
 * @description
 *
 * Longest {@link ChargingControlIndicators} bit string. Only bits
 * 0 to 2 are assigned; bits up to this length are spare.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxChargingControlIndicatorsLen INTEGER ::= 8
 * ```
 * 
 * @constant
 */
export
const maxChargingControlIndicatorsLen: INTEGER = 8;

/* eslint-enable */
