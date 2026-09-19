/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary ect
 * @description
 *
 * Explicit call transfer. Specific service. Bit pattern `'00110001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ect    SS-Code ::= '00110001'B
 * ```
 * 
 * @constant
 */
export
const ect: SS_Code = new Uint8Array([ 0x31 ]);

/* eslint-enable */
