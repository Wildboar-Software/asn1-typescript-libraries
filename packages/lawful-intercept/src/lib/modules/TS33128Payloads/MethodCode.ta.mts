/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MethodCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodCode  ::=  INTEGER (16..31)
 * ```
 */
export
type MethodCode = INTEGER;

export const _decode_MethodCode: $.ASN1Decoder<MethodCode> = $._decodeInteger;

export const _encode_MethodCode: $.ASN1Encoder<MethodCode> = $._encodeInteger;


/* eslint-enable */
