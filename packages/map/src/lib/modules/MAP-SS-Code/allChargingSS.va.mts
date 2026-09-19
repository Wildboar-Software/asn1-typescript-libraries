/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allChargingSS
 * @description
 *
 * All charging SS. Group code. Bit pattern `'01110000'B`. Reserved for possible
 * future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allChargingSS    SS-Code ::= '01110000'B
 * ```
 * 
 * @constant
 */
export
const allChargingSS: SS_Code = new Uint8Array([ 0x70 ]);

/* eslint-enable */
