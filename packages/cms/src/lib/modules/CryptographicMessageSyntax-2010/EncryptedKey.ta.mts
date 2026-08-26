/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EncryptedKey
 * @description
 *
 * OCTET STRING containing an encrypted key (typically the CEK)
 * ([RFC 5652 §6.2](https://datatracker.ietf.org/doc/html/rfc5652#section-6.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedKey  ::=  OCTET STRING
 * ```
 */
export type EncryptedKey = OCTET_STRING; // OctetStringType




export const _decode_EncryptedKey = $._decodeOctetString;




export const _encode_EncryptedKey = $._encodeOctetString;


/* eslint-enable */
