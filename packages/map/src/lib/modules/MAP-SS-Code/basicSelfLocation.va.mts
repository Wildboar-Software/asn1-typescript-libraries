/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary basicSelfLocation
 * @description
 *
 * Allow an MS to request its own location. Specific service. Bit pattern
 * `'11000001'B`. Basic Self Location MO-LR class (3GPP TS 29.002 V19.1.0
 * clauses 7.6.4.45 and 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basicSelfLocation    SS-Code ::= '11000001'B
 * ```
 * 
 * @constant
 */
export
const basicSelfLocation: SS_Code = new Uint8Array([ 0xC1 ]);

/* eslint-enable */
