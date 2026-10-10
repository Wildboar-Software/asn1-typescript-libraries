/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary minSubTariffControlLen
 * @description
 *
 * Shortest {@link SubTariffControl} bit string. One named bit,
 * `oneTimeCharge`, is defined.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * minSubTariffControlLen INTEGER ::= 1
 * ```
 * 
 * @constant
 */
export
const minSubTariffControlLen: INTEGER = 1;

/* eslint-enable */
