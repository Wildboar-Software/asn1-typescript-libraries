/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DHPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicKey  ::=  INTEGER
 * ```
 */
export type DHPublicKey = INTEGER;




export const _decode_DHPublicKey = $._decodeInteger;




export const _encode_DHPublicKey = $._encodeInteger;


/* eslint-enable */
