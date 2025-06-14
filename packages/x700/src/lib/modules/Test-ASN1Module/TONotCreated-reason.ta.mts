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

/* START_OF_SYMBOL_DEFINITION _enum_for_TONotCreated_reason */
/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_TONotCreated_reason {
    invalidTOclass = 0,
    duplicateTOInstance = 1,
    invalidMORTClass = 2,
    invalidAssociatedObjectClass = 3,
    mORTNotAvailable = 4,
    associatedObjectNotAvailable = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason */
/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type TONotCreated_reason = _enum_for_TONotCreated_reason;
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason */
/**
 * @summary TONotCreated_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const TONotCreated_reason = _enum_for_TONotCreated_reason;
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidTOclass */
/**
 * @summary TONotCreated_reason_invalidTOclass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidTOclass */

/* START_OF_SYMBOL_DEFINITION invalidTOclass */
/**
 * @summary invalidTOclass
 * @constant
 * @type {number}
 */
export const invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidTOclass */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_duplicateTOInstance */
/**
 * @summary TONotCreated_reason_duplicateTOInstance
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_duplicateTOInstance */

/* START_OF_SYMBOL_DEFINITION duplicateTOInstance */
/**
 * @summary duplicateTOInstance
 * @constant
 * @type {number}
 */
export const duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicateTOInstance */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidMORTClass */
/**
 * @summary TONotCreated_reason_invalidMORTClass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidMORTClass */

/* START_OF_SYMBOL_DEFINITION invalidMORTClass */
/**
 * @summary invalidMORTClass
 * @constant
 * @type {number}
 */
export const invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidMORTClass */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidAssociatedObjectClass */
/**
 * @summary TONotCreated_reason_invalidAssociatedObjectClass
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_invalidAssociatedObjectClass */

/* START_OF_SYMBOL_DEFINITION invalidAssociatedObjectClass */
/**
 * @summary invalidAssociatedObjectClass
 * @constant
 * @type {number}
 */
export const invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAssociatedObjectClass */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_mORTNotAvailable */
/**
 * @summary TONotCreated_reason_mORTNotAvailable
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_mORTNotAvailable */

/* START_OF_SYMBOL_DEFINITION mORTNotAvailable */
/**
 * @summary mORTNotAvailable
 * @constant
 * @type {number}
 */
export const mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mORTNotAvailable */

/* START_OF_SYMBOL_DEFINITION TONotCreated_reason_associatedObjectNotAvailable */
/**
 * @summary TONotCreated_reason_associatedObjectNotAvailable
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TONotCreated_reason_associatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION associatedObjectNotAvailable */
/**
 * @summary associatedObjectNotAvailable
 * @constant
 * @type {number}
 */
export const associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION associatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TONotCreated_reason */
let _cached_decoder_for_TONotCreated_reason: $.ASN1Decoder<TONotCreated_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION _decode_TONotCreated_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) TONotCreated_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TONotCreated_reason} The decoded data structure.
 */
export function _decode_TONotCreated_reason(el: _Element) {
    if (!_cached_decoder_for_TONotCreated_reason) {
        _cached_decoder_for_TONotCreated_reason = $._decodeEnumerated;
    }
    return _cached_decoder_for_TONotCreated_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TONotCreated_reason */
let _cached_encoder_for_TONotCreated_reason: $.ASN1Encoder<TONotCreated_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TONotCreated_reason */

/* START_OF_SYMBOL_DEFINITION _encode_TONotCreated_reason */
/**
 * @summary Encodes a(n) TONotCreated_reason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TONotCreated_reason, encoded as an ASN.1 Element.
 */
export function _encode_TONotCreated_reason(
    value: TONotCreated_reason,
    elGetter: $.ASN1Encoder<TONotCreated_reason>
) {
    if (!_cached_encoder_for_TONotCreated_reason) {
        _cached_encoder_for_TONotCreated_reason = $._encodeEnumerated;
    }
    return _cached_encoder_for_TONotCreated_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TONotCreated_reason */

/* eslint-enable */
