/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allBarringSS
 * @description
 *
 * All barring SS. Group code. Bit pattern `'10010000'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allBarringSS    SS-Code ::= '10010000'B
 * ```
 * 
 * @constant
 */
export
const allBarringSS: SS_Code = new Uint8Array([ 0x90 ]);

/* eslint-enable */
