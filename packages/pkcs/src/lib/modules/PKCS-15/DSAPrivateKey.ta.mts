/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
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




export const _decode_DSAPrivateKey = $._decodeInteger;




export const _encode_DSAPrivateKey = $._encodeInteger;


/* eslint-enable */
