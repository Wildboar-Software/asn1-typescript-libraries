/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary N3IWFIDSBI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * N3IWFIDSBI  ::=  UTF8String
 * ```
 */
export
type N3IWFIDSBI = UTF8String; // UTF8String

export const _decode_N3IWFIDSBI: $.ASN1Decoder<N3IWFIDSBI> = $._decodeUTF8String;

export const _encode_N3IWFIDSBI: $.ASN1Encoder<N3IWFIDSBI> = $._encodeUTF8String;

/* eslint-enable */
