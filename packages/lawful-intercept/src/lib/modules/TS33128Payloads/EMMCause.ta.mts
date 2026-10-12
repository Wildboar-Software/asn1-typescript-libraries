/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type EMMCause = INTEGER;
export const _decode_EMMCause: $.ASN1Decoder<EMMCause> = $._decodeInteger;
export const _encode_EMMCause: $.ASN1Encoder<EMMCause> = $._encodeInteger;


/* eslint-enable */
