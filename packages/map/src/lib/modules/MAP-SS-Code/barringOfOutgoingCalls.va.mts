/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary barringOfOutgoingCalls
 * @description
 *
 * Barring of outgoing calls. Group code. Bit pattern `'10010001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * barringOfOutgoingCalls    SS-Code ::= '10010001'B
 * ```
 * 
 * @constant
 */
export
const barringOfOutgoingCalls: SS_Code = new Uint8Array([ 0x91 ]);

/* eslint-enable */
