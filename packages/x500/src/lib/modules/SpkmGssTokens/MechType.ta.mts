/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary MechType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MechType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_MechType = $._decodeObjectIdentifier;


export const _encode_MechType = $._encodeObjectIdentifier;


/* eslint-enable */
