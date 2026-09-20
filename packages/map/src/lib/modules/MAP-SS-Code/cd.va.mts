/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cd
 * @description
 *
 * Call deflection. Specific service. Bit pattern `'00100100'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cd    SS-Code ::= '00100100'B
 * ```
 * 
 * @constant
 */
export
const cd: SS_Code = new Uint8Array([ 0x24 ]);

/* eslint-enable */
