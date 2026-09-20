/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary boicExHC
 * @description
 *
 * Barring of outgoing international calls except those directed to the home
 * PLMN Country. Specific service. Bit pattern `'10010100'B` (3GPP TS 29.002
 * V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * boicExHC    SS-Code ::= '10010100'B
 * ```
 * 
 * @constant
 */
export
const boicExHC: SS_Code = new Uint8Array([ 0x94 ]);

/* eslint-enable */
