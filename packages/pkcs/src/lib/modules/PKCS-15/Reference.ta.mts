/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reference  ::=  INTEGER (0..pkcs15-ub-reference)
 * ```
 */
export type Reference = INTEGER;




export const _decode_Reference: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Reference: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
