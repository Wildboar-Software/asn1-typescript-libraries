/* eslint-disable */
import {
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Talk_burst_reason_code
 * @description
 * 
 * Reason the PTC server denied or revoked a talk burst. Conditional on the
 * floor-control record: provide it when known (table 17.2.14). The module
 * comment says the code follows OMA-PoC-AD. The handover text does not list the
 * code values.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
