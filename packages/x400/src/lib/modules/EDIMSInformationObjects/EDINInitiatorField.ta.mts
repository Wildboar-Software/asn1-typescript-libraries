/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary EDINInitiatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINInitiatorField  ::=  ENUMERATED {
 *   internal-ua(0), external-ua(1), internal-ms(2)}
 * ```@enum {number}
 */
export enum _enum_for_EDINInitiatorField {
    internal_ua = 0,
    external_ua = 1,
    internal_ms = 2,
}

/**
 * @summary EDINInitiatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINInitiatorField  ::=  ENUMERATED {
 *   internal-ua(0), external-ua(1), internal-ms(2)}
 * ```@enum {number}
 */
export type EDINInitiatorField = _enum_for_EDINInitiatorField;

/**
 * @summary EDINInitiatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINInitiatorField  ::=  ENUMERATED {
 *   internal-ua(0), external-ua(1), internal-ms(2)}
 * ```@enum {number}
 */
export const EDINInitiatorField = _enum_for_EDINInitiatorField;

/**
 * @summary EDINInitiatorField_internal_ua
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_internal_ua: EDINInitiatorField =
    EDINInitiatorField.internal_ua; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal_ua
 * @constant
 * @type {number}
 */
export const internal_ua: EDINInitiatorField =
    EDINInitiatorField.internal_ua; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINInitiatorField_external_ua
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_external_ua: EDINInitiatorField =
    EDINInitiatorField.external_ua; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external_ua
 * @constant
 * @type {number}
 */
export const external_ua: EDINInitiatorField =
    EDINInitiatorField.external_ua; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EDINInitiatorField_internal_ms
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_internal_ms: EDINInitiatorField =
    EDINInitiatorField.internal_ms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal_ms
 * @constant
 * @type {number}
 */
export const internal_ms: EDINInitiatorField =
    EDINInitiatorField.internal_ms; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EDINInitiatorField = $._decodeEnumerated;


export const _encode_EDINInitiatorField = $._encodeEnumerated;


/* eslint-enable */
