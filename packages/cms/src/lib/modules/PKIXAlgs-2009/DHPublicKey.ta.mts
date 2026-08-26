/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DHPublicKey
 * @description
 *
 * Diffie-Hellman public key value (INTEGER)
 * ([RFC 3279 §2.3.3](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.3)).
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
