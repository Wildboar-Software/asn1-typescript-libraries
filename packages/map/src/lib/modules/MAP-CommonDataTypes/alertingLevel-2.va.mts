/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingLevel_2
 * @description
 *
 * Alerting level 2 (`00000010`B). Bits 43 = 00 (level). Other alerting-level
 * values are reserved. Levels are defined in GSM 02.07. (3GPP TS 29.002 V19.1.0
 * clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingLevel-2   AlertingPattern ::= '00000010'B
 * ```
 * 
 * @constant
 */
export
const alertingLevel_2: AlertingPattern = new Uint8Array([ 0x02 ]);

/* eslint-enable */
