/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary mc
 * @description
 *
 * Multicall. Specific service. Bit pattern `'01000101'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mc    SS-Code ::= '01000101'B
 * ```
 * 
 * @constant
 */
export
const mc: SS_Code = new Uint8Array([ 0x45 ]);

/* eslint-enable */
