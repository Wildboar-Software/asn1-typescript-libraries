/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allSS
 * @description
 *
 * All supplementary services. Group code. Bit pattern `'00000000'B`. Reserved
 * for possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allSS    SS-Code ::= '00000000'B
 * ```
 * 
 * @constant
 */
export
const allSS: SS_Code = new Uint8Array([ 0x00 ]);

/* eslint-enable */
