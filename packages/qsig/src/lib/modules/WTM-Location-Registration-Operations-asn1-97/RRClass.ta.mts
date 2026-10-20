/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RRClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RRClass  ::=  INTEGER (0..99)
 * ```
 */
export
type RRClass = INTEGER;

export
const _decode_RRClass: $.ASN1Decoder<RRClass> = $._decodeInteger;

export
const _encode_RRClass: $.ASN1Encoder<RRClass> = $._encodeInteger;

/* eslint-enable */
