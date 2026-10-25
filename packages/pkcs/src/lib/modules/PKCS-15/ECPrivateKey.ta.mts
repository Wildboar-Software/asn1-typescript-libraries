/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ECPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPrivateKey  ::=  INTEGER
 * ```
 */
export type ECPrivateKey = INTEGER;




export const _decode_ECPrivateKey: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_ECPrivateKey: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
