/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
