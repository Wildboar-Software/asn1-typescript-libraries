/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary cfnrc
 * @description
 *
 * Call forwarding on mobile subscriber not reachable. Specific service. Bit
 * pattern `'00101011'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfnrc    SS-Code ::= '00101011'B
 * ```
 * 
 * @constant
 */
export
const cfnrc: SS_Code = new Uint8Array([ 0x2B ]);

/* eslint-enable */
