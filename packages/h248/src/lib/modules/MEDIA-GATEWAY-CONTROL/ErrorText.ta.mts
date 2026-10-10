/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorText  ::=  IA5String
 * ```
 */
export
type ErrorText = IA5String; // IA5String
export const _decode_ErrorText = $._decodeIA5String;
export const _encode_ErrorText = $._encodeIA5String;


/* eslint-enable */
