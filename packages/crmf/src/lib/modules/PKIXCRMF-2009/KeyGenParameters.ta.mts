/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyGenParameters
 * @description
 *
 * Opaque parameters allowing the private key to be regenerated
 * ([RFC 4211 §6.4](https://datatracker.ietf.org/doc/html/rfc4211#section-6.4)). Structure and shrouding
 * are defined by the CRP, not this document.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyGenParameters  ::=  OCTET STRING
 * ```
 */
export type KeyGenParameters = OCTET_STRING; // OctetStringType




export const _decode_KeyGenParameters = $._decodeOctetString;




export const _encode_KeyGenParameters = $._encodeOctetString;


/* eslint-enable */
