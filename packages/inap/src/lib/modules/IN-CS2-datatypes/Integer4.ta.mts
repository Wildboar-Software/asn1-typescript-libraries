/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer4  ::=  INTEGER(0..2147483647)
 * ```
 */
export
type Integer4 = INTEGER;

export
const _decode_Integer4: $.ASN1Decoder<Integer4> = $._decodeInteger;

export
const _encode_Integer4: $.ASN1Encoder<Integer4> = $._encodeInteger;

/* eslint-enable */
