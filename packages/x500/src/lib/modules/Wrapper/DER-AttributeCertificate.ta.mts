/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary DER_AttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-AttributeCertificate  ::=  OCTET STRING
 *   (CONTAINING AttributeCertificate ENCODED BY der)
 * ```
 */
export type DER_AttributeCertificate = OCTET_STRING; // OctetStringType


export const _decode_DER_AttributeCertificate = $._decodeOctetString;


export const _encode_DER_AttributeCertificate = $._encodeOctetString;


/* eslint-enable */
