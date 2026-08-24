/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary AdministrativeRole
 * @description
 *
 * OBJECT-CLASS.&id of an administrative-role object class (`id-ar-*`, e.g.
 * autonomous area, access-control specific area). Marks the start of that
 * administrative area; maps to the Directory `administrativeRole` attribute.
 * Equality is OID equality.
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
