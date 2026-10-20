/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export
type TimeZone = INTEGER;

export
const _decode_TimeZone: $.ASN1Decoder<TimeZone> = $._decodeInteger;

export
const _encode_TimeZone: $.ASN1Encoder<TimeZone> = $._encodeInteger;

/* eslint-enable */
