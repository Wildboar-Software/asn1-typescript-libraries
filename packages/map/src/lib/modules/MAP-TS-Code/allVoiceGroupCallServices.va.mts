/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allVoiceGroupCallServices
 * @description
 *
 * All voice group call services. Group code. Bit pattern `'10010000'B` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allVoiceGroupCallServices    TeleserviceCode ::= '10010000'B
 * ```
 * 
 * @constant
 */
export
const allVoiceGroupCallServices: TeleserviceCode = new Uint8Array([ 0x90 ]);

/* eslint-enable */
