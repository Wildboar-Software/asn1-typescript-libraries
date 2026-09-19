/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary callSessionUnrelated
 * @description
 *
 * Allow location by designated external value added LCS clients. Specific
 * service. Bit pattern `'10110011'B`. Call/session unrelated value added LCS
 * privacy exception class (3GPP TS 29.002 V19.1.0 clauses 7.6.4.44 and
 * 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callSessionUnrelated    SS-Code ::= '10110011'B
 * ```
 * 
 * @constant
 */
export
const callSessionUnrelated: SS_Code = new Uint8Array([ 0xB3 ]);

/* eslint-enable */
