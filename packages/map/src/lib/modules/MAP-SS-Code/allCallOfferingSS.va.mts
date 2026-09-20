/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary allCallOfferingSS
 * @description
 *
 * All call offering SS; includes also all forwarding SS. Group code. Bit
 * pattern `'00110000'B`. Reserved for possible future use (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allCallOfferingSS    SS-Code ::= '00110000'B
 * ```
 * 
 * @constant
 */
export
const allCallOfferingSS: SS_Code = new Uint8Array([ 0x30 ]);

/* eslint-enable */
