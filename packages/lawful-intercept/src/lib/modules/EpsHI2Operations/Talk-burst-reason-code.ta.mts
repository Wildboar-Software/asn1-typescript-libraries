/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Talk_burst_reason_code
 * @description
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
