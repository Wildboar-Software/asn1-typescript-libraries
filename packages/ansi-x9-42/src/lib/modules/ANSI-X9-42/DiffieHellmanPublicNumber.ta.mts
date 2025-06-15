/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary DiffieHellmanPublicNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiffieHellmanPublicNumber  ::=  INTEGER
 * ```
 */
export type DiffieHellmanPublicNumber = INTEGER;




export const _decode_DiffieHellmanPublicNumber = $._decodeInteger;




export const _encode_DiffieHellmanPublicNumber = $._encodeInteger;


/* eslint-enable */
