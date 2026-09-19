/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary colp
 * @description
 *
 * Connected line identification presentation. Specific service. Bit pattern
 * `'00010011'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * colp    SS-Code ::= '00010011'B
 * ```
 * 
 * @constant
 */
export
const colp: SS_Code = new Uint8Array([ 0x13 ]);

/* eslint-enable */
