/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary bicRoam
 * @description
 *
 * Barring of incoming calls when roaming outside home PLMN Country. Specific
 * service. Bit pattern `'10011011'B` (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bicRoam    SS-Code ::= '10011011'B
 * ```
 * 
 * @constant
 */
export
const bicRoam: SS_Code = new Uint8Array([ 0x9B ]);

/* eslint-enable */
