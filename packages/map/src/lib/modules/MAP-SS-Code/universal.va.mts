/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary universal
 * @description
 *
 * Allow location by any LCS client. Specific service. Bit pattern
 * `'10110001'B`. Universal LCS privacy exception class (3GPP TS 29.002 V19.1.0
 * clauses 7.6.4.44 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * universal    SS-Code ::= '10110001'B
 * ```
 * 
 * @constant
 */
export
const universal: SS_Code = new Uint8Array([ 0xB1 ]);

/* eslint-enable */
