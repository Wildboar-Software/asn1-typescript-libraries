/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingLevel_1
 * @description
 *
 * Alerting level 1 (`00000001`B). Bits 43 = 00 (level). Other alerting-level
 * values are reserved. Levels are defined in GSM 02.07. (3GPP TS 29.002 V19.1.0
 * clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingLevel-1   AlertingPattern ::= '00000001'B
 * ```
 * 
 * @constant
 */
export
const alertingLevel_1: AlertingPattern = new Uint8Array([ 0x01 ]);

/* eslint-enable */
