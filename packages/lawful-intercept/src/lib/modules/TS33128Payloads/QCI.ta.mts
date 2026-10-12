/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QCI  ::=  INTEGER (0..255)
 * ```
 */
export
type QCI = INTEGER;
export const _decode_QCI: $.ASN1Decoder<QCI> = $._decodeInteger;
export const _encode_QCI: $.ASN1Encoder<QCI> = $._encodeInteger;


/* eslint-enable */
