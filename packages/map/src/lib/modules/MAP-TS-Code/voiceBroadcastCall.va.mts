/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary voiceBroadcastCall
 * @description
 *
 * Voice broadcast call. Specific service. Bit pattern `'10010010'B` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * voiceBroadcastCall    TeleserviceCode ::= '10010010'B
 * ```
 * 
 * @constant
 */
export
const voiceBroadcastCall: TeleserviceCode = new Uint8Array([ 0x92 ]);

/* eslint-enable */
