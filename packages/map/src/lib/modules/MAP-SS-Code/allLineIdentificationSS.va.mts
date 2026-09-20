/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allLineIdentificationSS
 * @description
 *
 * All line identification SS. Group code. Bit pattern `'00010000'B`. Reserved
 * for possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allLineIdentificationSS    SS-Code ::= '00010000'B
 * ```
 * 
 * @constant
 */
export
const allLineIdentificationSS: SS_Code = new Uint8Array([ 0x10 ]);

/* eslint-enable */
