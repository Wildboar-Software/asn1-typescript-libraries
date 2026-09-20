/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary mci
 * @description
 *
 * Malicious call identification. Specific service. Bit pattern `'00010101'B`.
 * Reserved for possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mci    SS-Code ::= '00010101'B
 * ```
 * 
 * @constant
 */
export
const mci: SS_Code = new Uint8Array([ 0x15 ]);

/* eslint-enable */
