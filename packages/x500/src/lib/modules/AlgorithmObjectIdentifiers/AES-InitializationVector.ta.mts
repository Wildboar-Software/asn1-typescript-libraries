/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AES_InitializationVector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AES-InitializationVector  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export type AES_InitializationVector = OCTET_STRING; // OctetStringType


export const _decode_AES_InitializationVector = $._decodeOctetString;


export const _encode_AES_InitializationVector = $._encodeOctetString;


/* eslint-enable */
