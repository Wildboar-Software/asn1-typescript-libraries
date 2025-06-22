/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Integrity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integrity  ::=  BIT STRING
 * ```
 */
export type Integrity = BIT_STRING;


export const _decode_Integrity = $._decodeBitString;


export const _encode_Integrity = $._encodeBitString;


/* eslint-enable */
