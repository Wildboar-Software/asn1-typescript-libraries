/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NoValueAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoValueAvailable  ::=  INTEGER (255)
 * ```
 */
export
type NoValueAvailable = INTEGER;

export
const _decode_NoValueAvailable: $.ASN1Decoder<NoValueAvailable> = $._decodeInteger;

export
const _encode_NoValueAvailable: $.ASN1Encoder<NoValueAvailable> = $._encodeInteger;

/* eslint-enable */
