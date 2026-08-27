/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SignatureValue
 * @description
 *
 * OCTET STRING holding the signature value produced by the signature
 * generation process ([RFC 5652 §5.3](https://datatracker.ietf.org/doc/html/rfc5652#section-5.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType




export const _decode_SignatureValue = $._decodeOctetString;




export const _encode_SignatureValue = $._encodeOctetString;


/* eslint-enable */
