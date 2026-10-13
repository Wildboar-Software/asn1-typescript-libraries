/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BufferSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize            ::=    INTEGER (7 .. 66560)
 * ```
 */
export
type BufferSize = INTEGER;
export const _decode_BufferSize: $.ASN1Decoder<BufferSize> = $._decodeInteger;
export const _encode_BufferSize: $.ASN1Encoder<BufferSize> = $._encodeInteger;


/* eslint-enable */
