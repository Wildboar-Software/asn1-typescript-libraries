/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cnap
 * @description
 *
 * Calling name presentation. Specific service. Bit pattern `'00011001'B`.
 * SS-Codes `'00011010'B` to `'00011111'B` are reserved for future
 * NameIdentification Supplementary Service use (3GPP TS 29.002 V19.1.0 clause
 * 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cnap    SS-Code ::= '00011001'B
 * ```
 * 
 * @constant
 */
export
const cnap: SS_Code = new Uint8Array([ 0x19 ]);

/* eslint-enable */
