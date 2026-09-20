/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary callSessionRelated
 * @description
 *
 * Allow location by any value added LCS client to which a call/session is
 * established from the target MS. Specific service. Bit pattern `'10110010'B`.
 * Call/session related value added LCS privacy exception class (3GPP TS 29.002
 * V19.1.0 clauses 7.6.4.44 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callSessionRelated    SS-Code ::= '10110010'B
 * ```
 * 
 * @constant
 */
export
const callSessionRelated: SS_Code = new Uint8Array([ 0xB2 ]);

/* eslint-enable */
