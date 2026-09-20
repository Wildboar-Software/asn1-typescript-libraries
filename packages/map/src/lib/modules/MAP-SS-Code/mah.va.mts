/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary mah
 * @description
 *
 * Mobile access hunting. Specific service. Bit pattern `'00110010'B`. Reserved
 * for possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mah    SS-Code ::= '00110010'B
 * ```
 * 
 * @constant
 */
export
const mah: SS_Code = new Uint8Array([ 0x32 ]);

/* eslint-enable */
