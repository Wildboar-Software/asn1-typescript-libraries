/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SigncryptionValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionValue  ::=  OCTET STRING(SIZE(1..MAX))
 * ```
 */
export type SigncryptionValue = OCTET_STRING; // OctetStringType




export const _decode_SigncryptionValue = $._decodeOctetString;




export const _encode_SigncryptionValue = $._encodeOctetString;


/* eslint-enable */
