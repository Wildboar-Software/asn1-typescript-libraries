/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allCallPrioritySS
 * @description
 *
 * All call priority SS. Group code. Bit pattern `'10100000'B`. Reserved for
 * possible future use (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allCallPrioritySS    SS-Code ::= '10100000'B
 * ```
 * 
 * @constant
 */
export
const allCallPrioritySS: SS_Code = new Uint8Array([ 0xA0 ]);

/* eslint-enable */
