/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ID = $._decodeObjectIdentifier;


export const _encode_ID = $._encodeObjectIdentifier;


/* eslint-enable */
