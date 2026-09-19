/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary clip
 * @description
 *
 * Calling line identification presentation. Specific service. Bit pattern
 * `'00010001'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clip    SS-Code ::= '00010001'B
 * ```
 * 
 * @constant
 */
export
const clip: SS_Code = new Uint8Array([ 0x11 ]);

/* eslint-enable */
