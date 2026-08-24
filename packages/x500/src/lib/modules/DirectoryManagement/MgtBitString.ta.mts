/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtBitString
 * @description
 *
 * CMIP BIT STRING wrapper. Used for critical extensions the DSA does not
 * support (notification parameter). Empty BIT STRING = no such bits asserted.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBitString  ::=  BIT STRING
 * ```
 */
export type MgtBitString = BIT_STRING;


export const _decode_MgtBitString = $._decodeBitString;


export const _encode_MgtBitString = $._encodeBitString;


/* eslint-enable */
