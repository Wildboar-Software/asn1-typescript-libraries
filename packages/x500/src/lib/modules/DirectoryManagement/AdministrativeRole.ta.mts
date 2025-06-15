/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/**
 * @summary AdministrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrativeRole  ::=  OBJECT-CLASS.&id
 * ```
 */
export type AdministrativeRole = OBJECT_IDENTIFIER; // ObjectClassFieldType


export const _decode_AdministrativeRole = $._decodeObjectIdentifier;


export const _encode_AdministrativeRole = $._encodeObjectIdentifier;


/* eslint-enable */
