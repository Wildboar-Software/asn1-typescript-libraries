/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cw
 * @description
 *
 * Call waiting. Specific service. Bit pattern `'01000001'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cw    SS-Code ::= '01000001'B
 * ```
 * 
 * @constant
 */
export
const cw: SS_Code = new Uint8Array([ 0x41 ]);

/* eslint-enable */
