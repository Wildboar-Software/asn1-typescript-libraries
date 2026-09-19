/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary emlpp
 * @description
 *
 * Enhanced Multilevel Precedence Pre-emption (EMLPP) service. Specific service.
 * Bit pattern `'10100001'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emlpp    SS-Code ::= '10100001'B
 * ```
 * 
 * @constant
 */
export
const emlpp: SS_Code = new Uint8Array([ 0xA1 ]);

/* eslint-enable */
