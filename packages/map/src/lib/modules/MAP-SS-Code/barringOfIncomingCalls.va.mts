/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary barringOfIncomingCalls
 * @description
 *
 * Barring of incoming calls. Group code. Bit pattern `'10011001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * barringOfIncomingCalls    SS-Code ::= '10011001'B
 * ```
 * 
 * @constant
 */
export
const barringOfIncomingCalls: SS_Code = new Uint8Array([ 0x99 ]);

/* eslint-enable */
