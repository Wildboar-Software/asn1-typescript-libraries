/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary plmn_specificSS_C
 * @description
 *
 * HPLMN-defined PLMN-specific supplementary service. Specific service. Bit
 * pattern `'11111100'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * plmn-specificSS-C    SS-Code ::= '11111100'B
 * ```
 * 
 * @constant
 */
export
const plmn_specificSS_C: SS_Code = new Uint8Array([ 0xFC ]);

/* eslint-enable */
