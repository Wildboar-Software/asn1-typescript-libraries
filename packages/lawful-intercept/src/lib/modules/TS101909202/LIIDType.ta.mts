/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIIDType  ::=  INTEGER (0..65535)
 * ```
 */
export
type LIIDType = INTEGER;
export const _decode_LIIDType: $.ASN1Decoder<LIIDType> = $._decodeInteger;
export const _encode_LIIDType: $.ASN1Encoder<LIIDType> = $._encodeInteger;


/* eslint-enable */
