/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MessageDigest
 * @description
 *
 * OCTET STRING message digest used as the value of the message-digest
 * attribute ([RFC 5652 §11.2](https://datatracker.ietf.org/doc/html/rfc5652#section-11.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export type MessageDigest = OCTET_STRING; // OctetStringType




export const _decode_MessageDigest = $._decodeOctetString;




export const _encode_MessageDigest = $._encodeOctetString;


/* eslint-enable */
