/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary voiceGroupCall
 * @description
 *
 * Voice group call. Specific service. Bit pattern `'10010001'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * voiceGroupCall    TeleserviceCode ::= '10010001'B
 * ```
 * 
 * @constant
 */
export
const voiceGroupCall: TeleserviceCode = new Uint8Array([ 0x91 ]);

/* eslint-enable */
