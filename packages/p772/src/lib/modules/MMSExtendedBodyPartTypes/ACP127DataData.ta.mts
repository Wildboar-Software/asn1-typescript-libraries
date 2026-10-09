/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACP127DataData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataData  ::=  IA5String(SIZE (1..ub-data-size))
 * ```
 */
export
type ACP127DataData = IA5String; // IA5String
export const _decode_ACP127DataData = $._decodeIA5String;
export const _encode_ACP127DataData = $._encodeIA5String;


/* eslint-enable */
