/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cfu
 * @description
 *
 * Call forwarding unconditional. Specific service. Bit pattern `'00100001'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfu    SS-Code ::= '00100001'B
 * ```
 * 
 * @constant
 */
export
const cfu: SS_Code = new Uint8Array([ 0x21 ]);

/* eslint-enable */
