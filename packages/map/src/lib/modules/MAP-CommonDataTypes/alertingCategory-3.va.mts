/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingCategory_3
 * @description
 *
 * Alerting category 3 (`00000110`B). Bits 43 = 01 (category). Other category
 * values are reserved. Categories are defined in GSM 02.07. (3GPP TS 29.002
 * V19.1.0 clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingCategory-3   AlertingPattern ::= '00000110'B
 * ```
 * 
 * @constant
 */
export
const alertingCategory_3: AlertingPattern = new Uint8Array([ 0x06 ]);

/* eslint-enable */
