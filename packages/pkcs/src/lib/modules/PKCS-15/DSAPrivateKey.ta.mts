/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DSAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPrivateKey  ::=  INTEGER
 * ```
 */
export type DSAPrivateKey = INTEGER;




export const _decode_DSAPrivateKey: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_DSAPrivateKey: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
