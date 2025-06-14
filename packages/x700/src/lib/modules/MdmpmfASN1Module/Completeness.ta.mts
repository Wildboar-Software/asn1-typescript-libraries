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

/* START_OF_SYMBOL_DEFINITION _enum_for_Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export enum _enum_for_Completeness {
    completenessUnknown = 0,
    knownComplete = 1,
    knownNotComplete = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export type Completeness = _enum_for_Completeness;
/* END_OF_SYMBOL_DEFINITION Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness */
/**
 * @summary Completeness
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```@enum {number}
 */
export const Completeness = _enum_for_Completeness;
/* END_OF_SYMBOL_DEFINITION Completeness */

/* START_OF_SYMBOL_DEFINITION Completeness_completenessUnknown */
/**
 * @summary Completeness_completenessUnknown
 * @constant
 * @type {number}
 */
export const Completeness_completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_completenessUnknown */

/* START_OF_SYMBOL_DEFINITION completenessUnknown */
/**
 * @summary completenessUnknown
 * @constant
 * @type {number}
 */
export const completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION completenessUnknown */

/* START_OF_SYMBOL_DEFINITION Completeness_knownComplete */
/**
 * @summary Completeness_knownComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownComplete: Completeness =
    Completeness.knownComplete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_knownComplete */

/* START_OF_SYMBOL_DEFINITION knownComplete */
/**
 * @summary knownComplete
 * @constant
 * @type {number}
 */
export const knownComplete: Completeness =
    Completeness.knownComplete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION knownComplete */

/* START_OF_SYMBOL_DEFINITION Completeness_knownNotComplete */
/**
 * @summary Completeness_knownNotComplete
 * @constant
 * @type {number}
 */
export const Completeness_knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Completeness_knownNotComplete */

/* START_OF_SYMBOL_DEFINITION knownNotComplete */
/**
 * @summary knownNotComplete
 * @constant
 * @type {number}
 */
export const knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION knownNotComplete */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Completeness */
let _cached_decoder_for_Completeness: $.ASN1Decoder<Completeness> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Completeness */

/* START_OF_SYMBOL_DEFINITION _decode_Completeness */
/**
 * @summary Decodes an ASN.1 element into a(n) Completeness
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Completeness} The decoded data structure.
 */
export function _decode_Completeness(el: _Element) {
    if (!_cached_decoder_for_Completeness) {
        _cached_decoder_for_Completeness = $._decodeEnumerated;
    }
    return _cached_decoder_for_Completeness(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Completeness */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Completeness */
let _cached_encoder_for_Completeness: $.ASN1Encoder<Completeness> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Completeness */

/* START_OF_SYMBOL_DEFINITION _encode_Completeness */
/**
 * @summary Encodes a(n) Completeness into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Completeness, encoded as an ASN.1 Element.
 */
export function _encode_Completeness(
    value: Completeness,
    elGetter: $.ASN1Encoder<Completeness>
) {
    if (!_cached_encoder_for_Completeness) {
        _cached_encoder_for_Completeness = $._encodeEnumerated;
    }
    return _cached_encoder_for_Completeness(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Completeness */

/* eslint-enable */
