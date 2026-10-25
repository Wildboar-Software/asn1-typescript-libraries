/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KEAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEAPrivateKey  ::=  INTEGER
 * ```
 */
export type KEAPrivateKey = INTEGER;




export const _decode_KEAPrivateKey: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_KEAPrivateKey: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
