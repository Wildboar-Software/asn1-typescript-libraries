/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allTeleservices_ExeptSMS
 * @description
 *
 * All teleservices except SMS. Group code. Bit pattern `'10000000'B`.
 * Non-hierarchical compound teleservice group defined in 3GPP TS 22.030. Used
 * only in call-independent supplementary service operations; not used in
 * InsertSubscriberData or DeleteSubscriberData. Covers
 * `allSpeechTransmissionServices` and `allFacsimileTransmissionServices` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allTeleservices-ExeptSMS    TeleserviceCode ::= '10000000'B
 * ```
 * 
 * @constant
 */
export
const allTeleservices_ExeptSMS: TeleserviceCode = new Uint8Array([ 0x80 ]);

/* eslint-enable */
