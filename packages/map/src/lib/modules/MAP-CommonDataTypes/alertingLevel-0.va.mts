/* eslint-disable */
import { AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";


/**
 * @summary alertingLevel_0
 * @description
 *
 * Alerting level 0 (`00000000`B). Bits 43 = 00 (level). Other alerting-level
 * values are reserved. Levels are defined in GSM 02.07. (3GPP TS 29.002 V19.1.0
 * clauses 17.7.8 and 7.6.3.44).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alertingLevel-0   AlertingPattern ::= '00000000'B
 * ```
 * 
 * @constant
 */
export
const alertingLevel_0: AlertingPattern = new Uint8Array([ 0x00 ]);

/* eslint-enable */
