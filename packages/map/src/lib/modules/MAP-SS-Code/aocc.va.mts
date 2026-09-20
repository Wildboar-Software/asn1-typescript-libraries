/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary aocc
 * @description
 *
 * Advice of charge charging. Specific service. Bit pattern `'01110010'B` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocc    SS-Code ::= '01110010'B
 * ```
 * 
 * @constant
 */
export
const aocc: SS_Code = new Uint8Array([ 0x72 ]);

/* eslint-enable */
