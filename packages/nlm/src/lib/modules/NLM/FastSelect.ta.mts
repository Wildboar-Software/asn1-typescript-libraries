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

/* START_OF_SYMBOL_DEFINITION _enum_for_FastSelect */
/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```@enum {number}
 */
export enum _enum_for_FastSelect {
    notSpecified = 0,
    fastSelect = 1,
    fastSelectWithRestrictedResponse = 2,
    noFastSelect = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FastSelect */

/* START_OF_SYMBOL_DEFINITION FastSelect */
/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```@enum {number}
 */
export type FastSelect = _enum_for_FastSelect;
/* END_OF_SYMBOL_DEFINITION FastSelect */

/* START_OF_SYMBOL_DEFINITION FastSelect */
/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```@enum {number}
 */
export const FastSelect = _enum_for_FastSelect;
/* END_OF_SYMBOL_DEFINITION FastSelect */

/* START_OF_SYMBOL_DEFINITION FastSelect_notSpecified */
/**
 * @summary FastSelect_notSpecified
 * @constant
 * @type {number}
 */
export const FastSelect_notSpecified: FastSelect =
    FastSelect.notSpecified; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FastSelect_notSpecified */

/* START_OF_SYMBOL_DEFINITION notSpecified */
/**
 * @summary notSpecified
 * @constant
 * @type {number}
 */
export const notSpecified: FastSelect =
    FastSelect.notSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notSpecified */

/* START_OF_SYMBOL_DEFINITION FastSelect_fastSelect */
/**
 * @summary FastSelect_fastSelect
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelect: FastSelect =
    FastSelect.fastSelect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FastSelect_fastSelect */

/* START_OF_SYMBOL_DEFINITION fastSelect */
/**
 * @summary fastSelect
 * @constant
 * @type {number}
 */
export const fastSelect: FastSelect =
    FastSelect.fastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fastSelect */

/* START_OF_SYMBOL_DEFINITION FastSelect_fastSelectWithRestrictedResponse */
/**
 * @summary FastSelect_fastSelectWithRestrictedResponse
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FastSelect_fastSelectWithRestrictedResponse */

/* START_OF_SYMBOL_DEFINITION fastSelectWithRestrictedResponse */
/**
 * @summary fastSelectWithRestrictedResponse
 * @constant
 * @type {number}
 */
export const fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fastSelectWithRestrictedResponse */

/* START_OF_SYMBOL_DEFINITION FastSelect_noFastSelect */
/**
 * @summary FastSelect_noFastSelect
 * @constant
 * @type {number}
 */
export const FastSelect_noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FastSelect_noFastSelect */

/* START_OF_SYMBOL_DEFINITION noFastSelect */
/**
 * @summary noFastSelect
 * @constant
 * @type {number}
 */
export const noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noFastSelect */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FastSelect */
let _cached_decoder_for_FastSelect: $.ASN1Decoder<FastSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FastSelect */

/* START_OF_SYMBOL_DEFINITION _decode_FastSelect */
/**
 * @summary Decodes an ASN.1 element into a(n) FastSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FastSelect} The decoded data structure.
 */
export function _decode_FastSelect(el: _Element) {
    if (!_cached_decoder_for_FastSelect) {
        _cached_decoder_for_FastSelect = $._decodeEnumerated;
    }
    return _cached_decoder_for_FastSelect(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FastSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FastSelect */
let _cached_encoder_for_FastSelect: $.ASN1Encoder<FastSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FastSelect */

/* START_OF_SYMBOL_DEFINITION _encode_FastSelect */
/**
 * @summary Encodes a(n) FastSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FastSelect, encoded as an ASN.1 Element.
 */
export function _encode_FastSelect(
    value: FastSelect,
    elGetter: $.ASN1Encoder<FastSelect>
) {
    if (!_cached_encoder_for_FastSelect) {
        _cached_encoder_for_FastSelect = $._encodeEnumerated;
    }
    return _cached_encoder_for_FastSelect(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FastSelect */

/* eslint-enable */
