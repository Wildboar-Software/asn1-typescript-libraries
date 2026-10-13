/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeoutPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod            ::=    INTEGER (1 .. 600)
 * ```
 */
export
type TimeoutPeriod = INTEGER;
export const _decode_TimeoutPeriod: $.ASN1Decoder<TimeoutPeriod> = $._decodeInteger;
export const _encode_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
