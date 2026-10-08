/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPSuri
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPSuri  ::=  IA5String
 * ```
 */
export
type CPSuri = IA5String; // IA5String
export const _decode_CPSuri = $._decodeIA5String;
export const _encode_CPSuri = $._encodeIA5String;


/* eslint-enable */
