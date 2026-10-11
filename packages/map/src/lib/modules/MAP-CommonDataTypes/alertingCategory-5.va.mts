/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingCategory_5
 * @description
 *
 * Alerting category 5 (`00001000`B). Bits 43 = 10 (category). Other category
 * values are reserved. Categories are defined in GSM 02.07. (3GPP TS 29.002
 * V19.1.0 clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingCategory-5   AlertingPattern ::= '00001000'B
 * ```
 * 
 * @constant
 */
export
const alertingCategory_5: AlertingPattern = new Uint8Array([ 0x08 ]);

/* eslint-enable */
