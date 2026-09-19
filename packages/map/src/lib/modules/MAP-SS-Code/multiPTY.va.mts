/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary multiPTY
 * @description
 *
 * Multiparty. Specific service. Bit pattern `'01010001'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * multiPTY    SS-Code ::= '01010001'B
 * ```
 * 
 * @constant
 */
export
const multiPTY: SS_Code = new Uint8Array([ 0x51 ]);

/* eslint-enable */
