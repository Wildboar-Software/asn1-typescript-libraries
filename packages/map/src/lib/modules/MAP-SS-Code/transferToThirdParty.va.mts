/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary transferToThirdParty
 * @description
 *
 * Allow an MS to request transfer of its location to another LCS client.
 * Specific service. Bit pattern `'11000011'B`. Transfer to Third Party MO-LR
 * class (3GPP TS 29.002 V19.1.0 clauses 7.6.4.45 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferToThirdParty    SS-Code ::= '11000011'B
 * ```
 * 
 * @constant
 */
export
const transferToThirdParty: SS_Code = new Uint8Array([ 0xC3 ]);

/* eslint-enable */
