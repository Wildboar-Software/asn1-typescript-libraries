/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxTariffIndicatorsLen
 * @description
 *
 * Longest `tariffControlIndicators` bit string. Only bit 0
 * (`non-cyclicTariff`) is assigned; bits up to this length are
 * spare.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxTariffIndicatorsLen INTEGER ::= 8
 * ```
 * 
 * @constant
 */
export
const maxTariffIndicatorsLen: INTEGER = 8;

/* eslint-enable */
