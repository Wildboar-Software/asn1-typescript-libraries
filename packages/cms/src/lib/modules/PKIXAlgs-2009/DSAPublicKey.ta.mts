/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DSAPublicKey
 * @description
 *
 * DSA public key value (INTEGER)
 * ([RFC 3279 §2.3.2](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.2)).
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
