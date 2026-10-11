/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxCommunicationTariffNum
 * @description
 *
 * Most subtariffs in one communication-charge sequence. Clause 3.1
 * defines a tariff sequence as a list of up to four consecutive
 * subtariffs.
 *
 * [ES 201 296 V1.3.1, clauses 3.1 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxCommunicationTariffNum INTEGER ::= 4
 * ```
 * 
 * @constant
 */
export
const maxCommunicationTariffNum: INTEGER = 4;

/* eslint-enable */
