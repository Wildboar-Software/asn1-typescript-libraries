/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary uus3
 * @description
 *
 * UUS3 user-to-user signalling. Specific service. Bit pattern `'10000011'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uus3    SS-Code ::= '10000011'B
 * ```
 * 
 * @constant
 */
export
const uus3: SS_Code = new Uint8Array([ 0x83 ]);

/* eslint-enable */
