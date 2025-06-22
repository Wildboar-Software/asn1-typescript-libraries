/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
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




export const _decode_DHPrivateKey = $._decodeInteger;




export const _encode_DHPrivateKey = $._encodeInteger;


/* eslint-enable */
