/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary uus1
 * @description
 *
 * UUS1 user-to-user signalling. Specific service. Bit pattern `'10000001'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uus1    SS-Code ::= '10000001'B
 * ```
 * 
 * @constant
 */
export
const uus1: SS_Code = new Uint8Array([ 0x81 ]);

/* eslint-enable */
