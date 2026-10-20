/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Month
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Month       ::=  INTEGER ( 1 .. 12 )
 * ```
 */
export
type Month = INTEGER;

export
const _decode_Month: $.ASN1Decoder<Month> = $._decodeInteger;

export
const _encode_Month: $.ASN1Encoder<Month> = $._encodeInteger;

/* eslint-enable */
