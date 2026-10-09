/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allAsynchronousServices
 * @description
 *
 * All asynchronous services. Group code. Bit pattern `'01100000'B`.
 * Non-hierarchical compound bearer service group defined in 3GPP TS 22.030.
 * Used only in call-independent supplementary service operations; not used in
 * InsertSubscriberData or DeleteSubscriberData. Covers `allDataCDA-Services`,
 * `allAlternateSpeech-DataCDA`, `allSpeechFollowedByDataCDA` and
 * `allPadAccessCDA-Services` (3GPP TS 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allAsynchronousServices    BearerServiceCode ::= '01100000'B
 * ```
 * 
 * @constant
 */
export
const allAsynchronousServices: BearerServiceCode = new Uint8Array([ 0x60 ]);

/* eslint-enable */
