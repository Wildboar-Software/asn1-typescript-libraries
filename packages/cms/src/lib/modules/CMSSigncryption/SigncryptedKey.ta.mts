/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SigncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedKey  ::=  OCTET STRING
 * ```
 */
export type SigncryptedKey = OCTET_STRING; // OctetStringType




export const _decode_SigncryptedKey = $._decodeOctetString;




export const _encode_SigncryptedKey = $._encodeOctetString;


/* eslint-enable */
