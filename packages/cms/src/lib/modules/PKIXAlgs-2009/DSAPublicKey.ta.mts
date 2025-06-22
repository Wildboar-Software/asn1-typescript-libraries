/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
