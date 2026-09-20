/* eslint-disable */
import { TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary allDataTeleservices
 * @description
 *
 * All data teleservices. Group code. Bit pattern `'01110000'B`.
 * Non-hierarchical compound teleservice group defined in 3GPP TS 22.030. Used
 * only in call-independent supplementary service operations; not used in
 * InsertSubscriberData or DeleteSubscriberData. Covers
 * `allFacsimileTransmissionServices` and `allShortMessageServices` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allDataTeleservices    TeleserviceCode ::= '01110000'B
 * ```
 * 
 * @constant
 */
export
const allDataTeleservices: TeleserviceCode = new Uint8Array([ 0x70 ]);

/* eslint-enable */
