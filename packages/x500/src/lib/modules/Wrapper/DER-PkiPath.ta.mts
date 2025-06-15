/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/**
 * @summary DER_PkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-PkiPath  ::=  OCTET STRING
 *   (CONTAINING PkiPath ENCODED BY der)
 * ```
 */
export type DER_PkiPath = OCTET_STRING; // OctetStringType


export const _decode_DER_PkiPath = $._decodeOctetString;


export const _encode_DER_PkiPath = $._encodeOctetString;


/* eslint-enable */
