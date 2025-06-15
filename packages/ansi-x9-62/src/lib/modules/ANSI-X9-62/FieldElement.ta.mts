/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary FieldElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export type FieldElement = OCTET_STRING; // OctetStringType


export const _decode_FieldElement = $._decodeOctetString;


export const _encode_FieldElement = $._encodeOctetString;


/* eslint-enable */
