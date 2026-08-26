/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MessageAuthenticationCode
 * @description
 *
 * OCTET STRING MAC value ([RFC 5652 §9.1](https://datatracker.ietf.org/doc/html/rfc5652#section-9.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCode  ::=  OCTET STRING
 * ```
 */
export type MessageAuthenticationCode = OCTET_STRING; // OctetStringType




export const _decode_MessageAuthenticationCode = $._decodeOctetString;




export const _encode_MessageAuthenticationCode = $._encodeOctetString;


/* eslint-enable */
