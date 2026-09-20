/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary clir
 * @description
 *
 * Calling line identification restriction. Specific service. Bit pattern
 * `'00010010'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clir    SS-Code ::= '00010010'B
 * ```
 * 
 * @constant
 */
export
const clir: SS_Code = new Uint8Array([ 0x12 ]);

/* eslint-enable */
