/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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




export const _decode_ECPrivateKey = $._decodeInteger;




export const _encode_ECPrivateKey = $._encodeInteger;


/* eslint-enable */
