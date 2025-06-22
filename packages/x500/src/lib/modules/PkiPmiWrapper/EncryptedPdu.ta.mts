/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncryptedPdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPdu  ::=  OCTET STRING
 * ```
 */
export type EncryptedPdu = OCTET_STRING; // OctetStringType


export const _decode_EncryptedPdu = $._decodeOctetString;


export const _encode_EncryptedPdu = $._encodeOctetString;


/* eslint-enable */
