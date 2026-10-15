/* eslint-disable */
import {
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Talk_burst_reason_code
 * @description
 * 
 * Reason the PTC server denied or revoked a talk burst, when known (table
 * 17.2.14). Coded by the rules and procedures of OMA-PoC-AD [97]. TS 33.108
 * does not list the code strings.
 * 
 * 3GPP TS 33.108, clause 17.2.14 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Talk-burst-reason-code  ::=  VisibleString
 * ```
 */
export
type Talk_burst_reason_code = VisibleString; // VisibleString
export const _decode_Talk_burst_reason_code: $.ASN1Decoder<Talk_burst_reason_code> = $._decodeVisibleString;
export const _encode_Talk_burst_reason_code: $.ASN1Encoder<Talk_burst_reason_code> = $._encodeVisibleString;


/* eslint-enable */
