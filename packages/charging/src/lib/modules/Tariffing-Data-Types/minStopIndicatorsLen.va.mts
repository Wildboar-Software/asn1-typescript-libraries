/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary minStopIndicatorsLen
 * @description
 *
 * Shortest `stopIndicators` bit string. One named bit,
 * `callAttemptChargesApplicable`, is defined. Longer strings carry
 * spare bits that clause 9 does not assign.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * minStopIndicatorsLen INTEGER ::= 1
 * ```
 * 
 * @constant
 */
export
const minStopIndicatorsLen: INTEGER = 1;

/* eslint-enable */
