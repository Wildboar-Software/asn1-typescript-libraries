/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary aoci
 * @description
 *
 * Advice of charge information. Specific service. Bit pattern `'01110001'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aoci    SS-Code ::= '01110001'B
 * ```
 * 
 * @constant
 */
export
const aoci: SS_Code = new Uint8Array([ 0x71 ]);

/* eslint-enable */
