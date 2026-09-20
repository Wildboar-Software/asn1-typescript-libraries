/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allPLMN_specificSS
 * @description
 *
 * All PLMN-specific supplementary services. Group code. Bit pattern
 * `'11110000'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allPLMN-specificSS    SS-Code ::= '11110000'B
 * ```
 * 
 * @constant
 */
export
const allPLMN_specificSS: SS_Code = new Uint8Array([ 0xF0 ]);

/* eslint-enable */
