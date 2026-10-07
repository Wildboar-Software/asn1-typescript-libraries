/* eslint-disable */
import { BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";


/**
 * @summary allSpeechFollowedByDataCDA
 * @description
 *
 * All speech followed by data CDA. Group code. Bit pattern `'01000000'B` (3GPP
 * TS 29.002 V19.1.0 clause 17.7.10).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allSpeechFollowedByDataCDA    BearerServiceCode ::= '01000000'B
 * ```
 * 
 * @constant
 */
export
const allSpeechFollowedByDataCDA: BearerServiceCode = new Uint8Array([ 0x40 ]);

/* eslint-enable */
