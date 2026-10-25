/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UserKeyingMaterial
 * @description
 *
 * OCTET STRING **SIZE (64) exactly** (UKM / `partyAinfo`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING (SIZE (64))
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType


export const _decode_UserKeyingMaterial: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;


export const _encode_UserKeyingMaterial: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
