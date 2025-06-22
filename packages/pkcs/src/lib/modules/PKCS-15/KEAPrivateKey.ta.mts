/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
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




export const _decode_KEAPrivateKey = $._decodeInteger;




export const _encode_KEAPrivateKey = $._encodeInteger;


/* eslint-enable */
