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

/* START_OF_SYMBOL_DEFINITION _enum_for_EDINInitiatorField */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION EDINInitiatorField */
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
/* END_OF_SYMBOL_DEFINITION EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION EDINInitiatorField */
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
/* END_OF_SYMBOL_DEFINITION EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION EDINInitiatorField_internal_ua */
/**
 * @summary EDINInitiatorField_internal_ua
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_internal_ua: EDINInitiatorField =
    EDINInitiatorField.internal_ua; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINInitiatorField_internal_ua */

/* START_OF_SYMBOL_DEFINITION internal_ua */
/**
 * @summary internal_ua
 * @constant
 * @type {number}
 */
export const internal_ua: EDINInitiatorField =
    EDINInitiatorField.internal_ua; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internal_ua */

/* START_OF_SYMBOL_DEFINITION EDINInitiatorField_external_ua */
/**
 * @summary EDINInitiatorField_external_ua
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_external_ua: EDINInitiatorField =
    EDINInitiatorField.external_ua; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINInitiatorField_external_ua */

/* START_OF_SYMBOL_DEFINITION external_ua */
/**
 * @summary external_ua
 * @constant
 * @type {number}
 */
export const external_ua: EDINInitiatorField =
    EDINInitiatorField.external_ua; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION external_ua */

/* START_OF_SYMBOL_DEFINITION EDINInitiatorField_internal_ms */
/**
 * @summary EDINInitiatorField_internal_ms
 * @constant
 * @type {number}
 */
export const EDINInitiatorField_internal_ms: EDINInitiatorField =
    EDINInitiatorField.internal_ms; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINInitiatorField_internal_ms */

/* START_OF_SYMBOL_DEFINITION internal_ms */
/**
 * @summary internal_ms
 * @constant
 * @type {number}
 */
export const internal_ms: EDINInitiatorField =
    EDINInitiatorField.internal_ms; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internal_ms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINInitiatorField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION _decode_EDINInitiatorField */
export const _decode_EDINInitiatorField = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINInitiatorField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINInitiatorField */

/* START_OF_SYMBOL_DEFINITION _encode_EDINInitiatorField */
export const _encode_EDINInitiatorField = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_EDINInitiatorField */

/* eslint-enable */
