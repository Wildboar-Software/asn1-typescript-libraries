/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary serviceType
 * @description
 *
 * Allow location by LCS clients of a designated LCS service type. Specific
 * service. Bit pattern `'10110101'B`. Service type LCS privacy exception class
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.4.44 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceType    SS-Code ::= '10110101'B
 * ```
 * 
 * @constant
 */
export
const serviceType: SS_Code = new Uint8Array([ 0xB5 ]);

/* eslint-enable */
