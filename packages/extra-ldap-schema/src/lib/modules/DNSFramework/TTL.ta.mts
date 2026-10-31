/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TTL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TTL          ::=  INTEGER (0..4294967295)
 * ```
 */
export
type TTL = INTEGER;

export
const _decode_TTL: $.ASN1Decoder<TTL> = $._decodeInteger;

export
const _encode_TTL: $.ASN1Encoder<TTL> = $._encodeInteger;

/* eslint-enable */
