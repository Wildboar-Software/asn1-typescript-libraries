/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary hold
 * @description
 *
 * Call hold. Specific service. Bit pattern `'01000010'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hold    SS-Code ::= '01000010'B
 * ```
 * 
 * @constant
 */
export
const hold: SS_Code = new Uint8Array([ 0x42 ]);

/* eslint-enable */
