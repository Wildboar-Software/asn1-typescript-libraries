/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allCallCompletionSS
 * @description
 *
 * All Call completion SS. Group code. Bit pattern `'01000000'B`. Reserved for
 * possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allCallCompletionSS    SS-Code ::= '01000000'B
 * ```
 * 
 * @constant
 */
export
const allCallCompletionSS: SS_Code = new Uint8Array([ 0x40 ]);

/* eslint-enable */
