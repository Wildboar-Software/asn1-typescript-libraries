/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allSpeechTransmissionServices
 * @description
 *
 * All speech transmission services. Group code. Bit pattern `'00010000'B`
 * (3GPP TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allSpeechTransmissionServices    TeleserviceCode ::= '00010000'B
 * ```
 * 
 * @constant
 */
export
const allSpeechTransmissionServices: TeleserviceCode = new Uint8Array([ 0x10 ]);

/* eslint-enable */
