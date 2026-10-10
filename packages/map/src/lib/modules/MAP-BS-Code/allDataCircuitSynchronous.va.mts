/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allDataCircuitSynchronous
 * @description
 *
 * All data circuit synchronous. Group code. Bit pattern `'01011000'B`.
 * Non-hierarchical compound bearer service group defined in 3GPP TS 22.030.
 * Used only in call-independent supplementary service operations; not used in
 * InsertSubscriberData or DeleteSubscriberData. Covers `allDataCDS-Services`,
 * `allAlternateSpeech-DataCDS` and `allSpeechFollowedByDataCDS` (3GPP TS
 * 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allDataCircuitSynchronous    BearerServiceCode ::= '01011000'B
 * ```
 * 
 * @constant
 */
export
const allDataCircuitSynchronous: BearerServiceCode = new Uint8Array([ 0x58 ]);

/* eslint-enable */
