/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReturnMode */
export enum _enum_for_ReturnMode {
    continuous = 0,
    batch = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION ReturnMode */
/**
 * @summary ReturnMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnMode  ::=  ENUMERATED {
 *   continuous,
 *   batch,
 *   ... }
 * ```@enum {number}
 */
export type ReturnMode = _enum_for_ReturnMode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ReturnMode */

/* START_OF_SYMBOL_DEFINITION ReturnMode_continuous */
/**
 * @summary ReturnMode_continuous
 * @constant
 * @type {number}
 */
export const ReturnMode_continuous: ReturnMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnMode_continuous */

/* START_OF_SYMBOL_DEFINITION continuous */
/**
 * @summary continuous
 * @constant
 * @type {number}
 */
export const continuous: ReturnMode = ReturnMode_continuous; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION continuous */

/* START_OF_SYMBOL_DEFINITION ReturnMode_batch */
/**
 * @summary ReturnMode_batch
 * @constant
 * @type {number}
 */
export const ReturnMode_batch: ReturnMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReturnMode_batch */

/* START_OF_SYMBOL_DEFINITION batch */
/**
 * @summary batch
 * @constant
 * @type {number}
 */
export const batch: ReturnMode = ReturnMode_batch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION batch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnMode */
let _cached_decoder_for_ReturnMode: $.ASN1Decoder<ReturnMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _decode_ReturnMode */
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnMode} The decoded data structure.
 */
export function _decode_ReturnMode(el: _Element) {
    if (!_cached_decoder_for_ReturnMode) {
        _cached_decoder_for_ReturnMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReturnMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnMode */
let _cached_encoder_for_ReturnMode: $.ASN1Encoder<ReturnMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReturnMode */

/* START_OF_SYMBOL_DEFINITION _encode_ReturnMode */
/**
 * @summary Encodes a(n) ReturnMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnMode, encoded as an ASN.1 Element.
 */
export function _encode_ReturnMode(
    value: ReturnMode,
    elGetter: $.ASN1Encoder<ReturnMode>
) {
    if (!_cached_encoder_for_ReturnMode) {
        _cached_encoder_for_ReturnMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReturnMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReturnMode */

/* eslint-enable */
