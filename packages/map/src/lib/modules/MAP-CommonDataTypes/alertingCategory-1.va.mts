/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingCategory_1
 * @description
 *
 * Alerting category 1 (`00000100`B). Bits 43 = 01 (category). Other category
 * values are reserved. Categories are defined in GSM 02.07. (3GPP TS 29.002
 * V19.1.0 clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingCategory-1   AlertingPattern ::= '00000100'B
 * ```
 * 
 * @constant
 */
export
const alertingCategory_1: AlertingPattern = new Uint8Array([ 0x04 ]);

/* eslint-enable */
