/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary plmnoperator
 * @description
 *
 * Allow location by designated PLMN operator LCS clients. Specific service. Bit
 * pattern `'10110100'B`. PLMN operator LCS privacy exception class (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.4.44 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * plmnoperator    SS-Code ::= '10110100'B
 * ```
 * 
 * @constant
 */
export
const plmnoperator: SS_Code = new Uint8Array([ 0xB4 ]);

/* eslint-enable */
