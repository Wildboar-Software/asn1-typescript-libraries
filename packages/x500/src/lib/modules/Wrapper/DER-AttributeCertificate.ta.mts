/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
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
