/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary IntEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntEmail  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of an (internationalized) email address. -- })
 * ```
 */
export
type IntEmail = UTF8String; // UTF8String

export
const _decode_IntEmail: $.ASN1Decoder<IntEmail> = $._decodeUTF8String;

export
const _encode_IntEmail: $.ASN1Encoder<IntEmail> = $._encodeUTF8String;

/* eslint-enable */
