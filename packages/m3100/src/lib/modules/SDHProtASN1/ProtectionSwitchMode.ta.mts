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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export enum _enum_for_ProtectionSwitchMode {
    bidirectional = 0,
    unidirectional = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export type ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode */
/**
 * @summary ProtectionSwitchMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionSwitchMode  ::=  ENUMERATED {bidirectional(0), unidirectional(1)}
 * ```@enum {number}
 */
export const ProtectionSwitchMode = _enum_for_ProtectionSwitchMode;
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode_bidirectional */
/**
 * @summary ProtectionSwitchMode_bidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION ProtectionSwitchMode_unidirectional */
/**
 * @summary ProtectionSwitchMode_unidirectional
 * @constant
 * @type {number}
 */
export const ProtectionSwitchMode_unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionSwitchMode_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: ProtectionSwitchMode =
    ProtectionSwitchMode.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionSwitchMode */
let _cached_decoder_for_ProtectionSwitchMode: $.ASN1Decoder<ProtectionSwitchMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionSwitchMode */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionSwitchMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionSwitchMode} The decoded data structure.
 */
export function _decode_ProtectionSwitchMode(el: _Element) {
    if (!_cached_decoder_for_ProtectionSwitchMode) {
        _cached_decoder_for_ProtectionSwitchMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProtectionSwitchMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionSwitchMode */
let _cached_encoder_for_ProtectionSwitchMode: $.ASN1Encoder<ProtectionSwitchMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionSwitchMode */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionSwitchMode */
/**
 * @summary Encodes a(n) ProtectionSwitchMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionSwitchMode, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionSwitchMode(
    value: ProtectionSwitchMode,
    elGetter: $.ASN1Encoder<ProtectionSwitchMode>
) {
    if (!_cached_encoder_for_ProtectionSwitchMode) {
        _cached_encoder_for_ProtectionSwitchMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProtectionSwitchMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionSwitchMode */

/* eslint-enable */
