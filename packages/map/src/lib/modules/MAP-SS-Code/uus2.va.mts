/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary uus2
 * @description
 *
 * UUS2 user-to-user signalling. Specific service. Bit pattern `'10000010'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uus2    SS-Code ::= '10000010'B
 * ```
 * 
 * @constant
 */
export
const uus2: SS_Code = new Uint8Array([ 0x82 ]);

/* eslint-enable */
