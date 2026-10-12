/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QFI  ::=  INTEGER (0..63)
 * ```
 */
export
type QFI = INTEGER;
export const _decode_QFI: $.ASN1Decoder<QFI> = $._decodeInteger;
export const _encode_QFI: $.ASN1Encoder<QFI> = $._encodeInteger;


/* eslint-enable */
