/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary DSAPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPublicKey  ::=  INTEGER
 * ```
 */
export type DSAPublicKey = INTEGER;




export const _decode_DSAPublicKey = $._decodeInteger;




export const _encode_DSAPublicKey = $._encodeInteger;


/* eslint-enable */
