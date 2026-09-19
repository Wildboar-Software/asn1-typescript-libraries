/* eslint-disable */
import { SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";


/**
 * @summary ccbs_B
 * @description
 *
 * Completion of call to busy subscribers, destination side. Specific service.
 * Bit pattern `'01000100'B`. Used only in InsertSubscriberData and
 * DeleteSubscriberData (3GPP TS 29.002 V19.1.0 clause 17.7.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccbs-B    SS-Code ::= '01000100'B
 * ```
 * 
 * @constant
 */
export
const ccbs_B: SS_Code = new Uint8Array([ 0x44 ]);

/* eslint-enable */
