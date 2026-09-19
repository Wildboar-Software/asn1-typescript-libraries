/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cfb
 * @description
 *
 * Call forwarding on mobile subscriber busy. Specific service. Bit pattern
 * `'00101001'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfb    SS-Code ::= '00101001'B
 * ```
 * 
 * @constant
 */
export
const cfb: SS_Code = new Uint8Array([ 0x29 ]);

/* eslint-enable */
