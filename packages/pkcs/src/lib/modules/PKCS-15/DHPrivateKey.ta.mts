/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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




export const _decode_DHPrivateKey = $._decodeInteger;




export const _encode_DHPrivateKey = $._encodeInteger;


/* eslint-enable */
