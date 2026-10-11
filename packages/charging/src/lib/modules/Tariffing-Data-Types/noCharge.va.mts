/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary noCharge
 * @description
 *
 * Default {@link CurrencyFactor}. Clause 9: value 0 means "no
 * charge". A {@link CurrencyFactorScale} of zero is no charge.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noCharge INTEGER ::= 0
 * ```
 * 
 * @constant
 */
export
const noCharge: INTEGER = 0;

/* eslint-enable */
