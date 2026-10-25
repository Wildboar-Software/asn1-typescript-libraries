/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DHPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPrivateKey  ::=  INTEGER
 * ```
 */
export type DHPrivateKey = INTEGER;




export const _decode_DHPrivateKey: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_DHPrivateKey: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
