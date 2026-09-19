/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cfnry
 * @description
 *
 * Call forwarding on no reply. Specific service. Bit pattern `'00101010'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfnry    SS-Code ::= '00101010'B
 * ```
 * 
 * @constant
 */
export
const cfnry: SS_Code = new Uint8Array([ 0x2A ]);

/* eslint-enable */
