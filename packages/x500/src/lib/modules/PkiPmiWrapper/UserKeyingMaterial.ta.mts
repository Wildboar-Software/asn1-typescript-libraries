/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UserKeyingMaterial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING (SIZE (64))
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType


export const _decode_UserKeyingMaterial = $._decodeOctetString;


export const _encode_UserKeyingMaterial = $._encodeOctetString;


/* eslint-enable */
