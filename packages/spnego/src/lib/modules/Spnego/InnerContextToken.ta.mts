/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InnerContextToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InnerContextToken ::= ANY
 * -- interpretation based on predecessor InitialContextToken
 * -- ASN.1 structure not required
 * ```
 */
export
type InnerContextToken = _Element; // AnyType
export const _decode_InnerContextToken: $.ASN1Decoder<_Element> = $._decodeAny;
export const _encode_InnerContextToken: $.ASN1Encoder<_Element> = $._encodeAny;


/* eslint-enable */
