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
export const _decode_InnerContextToken = $._decodeAny;
export const _encode_InnerContextToken = $._encodeAny;


/* eslint-enable */
