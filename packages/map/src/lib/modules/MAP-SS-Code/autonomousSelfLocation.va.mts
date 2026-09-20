/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary autonomousSelfLocation
 * @description
 *
 * Allow an MS to perform self location without interaction with the PLMN for a
 * predetermined period of time. Specific service. Bit pattern `'11000010'B`.
 * Autonomous Self Location MO-LR class (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.4.45 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * autonomousSelfLocation    SS-Code ::= '11000010'B
 * ```
 * 
 * @constant
 */
export
const autonomousSelfLocation: SS_Code = new Uint8Array([ 0xC2 ]);

/* eslint-enable */
