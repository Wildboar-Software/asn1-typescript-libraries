/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary noScale
 * @description
 *
 * Default {@link CurrencyScale}. The scale is `10` to this power,
 * so 0 means a multiplier of 1.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noScale INTEGER ::= 0
 * ```
 * 
 * @constant
 */
export
const noScale: INTEGER = 0;

/* eslint-enable */
