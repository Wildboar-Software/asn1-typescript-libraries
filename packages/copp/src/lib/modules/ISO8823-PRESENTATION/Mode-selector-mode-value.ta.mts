/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Mode_selector_mode_value */
/**
 * @summary Mode_selector_mode_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mode-selector-mode-value ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Mode_selector_mode_value = INTEGER;
/* END_OF_SYMBOL_DEFINITION Mode_selector_mode_value */

/* START_OF_SYMBOL_DEFINITION Mode_selector_mode_value_x410_1984_mode */
/**
 * @summary Mode_selector_mode_value_x410_1984_mode
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_x410_1984_mode: Mode_selector_mode_value = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Mode_selector_mode_value_x410_1984_mode */

/* START_OF_SYMBOL_DEFINITION x410_1984_mode */
/**
 * @summary Mode_selector_mode_value_x410_1984_mode
 * @constant
 * @type {number}
 */
export const x410_1984_mode: Mode_selector_mode_value = Mode_selector_mode_value_x410_1984_mode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION x410_1984_mode */

/* START_OF_SYMBOL_DEFINITION Mode_selector_mode_value_normal_mode */
/**
 * @summary Mode_selector_mode_value_normal_mode
 * @constant
 * @type {number}
 */
export const Mode_selector_mode_value_normal_mode: Mode_selector_mode_value = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Mode_selector_mode_value_normal_mode */

/* START_OF_SYMBOL_DEFINITION normal_mode */
/**
 * @summary Mode_selector_mode_value_normal_mode
 * @constant
 * @type {number}
 */
export const normal_mode: Mode_selector_mode_value = Mode_selector_mode_value_normal_mode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal_mode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mode_selector_mode_value */
let _cached_decoder_for_Mode_selector_mode_value: $.ASN1Decoder<Mode_selector_mode_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mode_selector_mode_value */

/* START_OF_SYMBOL_DEFINITION _decode_Mode_selector_mode_value */
/**
 * @summary Decodes an ASN.1 element into a(n) Mode_selector_mode_value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mode_selector_mode_value} The decoded data structure.
 */
export function _decode_Mode_selector_mode_value(el: _Element) {
    if (!_cached_decoder_for_Mode_selector_mode_value) {
        _cached_decoder_for_Mode_selector_mode_value = $._decodeInteger;
    }
    return _cached_decoder_for_Mode_selector_mode_value(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Mode_selector_mode_value */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mode_selector_mode_value */
let _cached_encoder_for_Mode_selector_mode_value: $.ASN1Encoder<Mode_selector_mode_value> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mode_selector_mode_value */

/* START_OF_SYMBOL_DEFINITION _encode_Mode_selector_mode_value */
/**
 * @summary Encodes a(n) Mode_selector_mode_value into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mode_selector_mode_value, encoded as an ASN.1 Element.
 */
export function _encode_Mode_selector_mode_value(
    value: Mode_selector_mode_value,
    elGetter: $.ASN1Encoder<Mode_selector_mode_value>
) {
    if (!_cached_encoder_for_Mode_selector_mode_value) {
        _cached_encoder_for_Mode_selector_mode_value = $._encodeInteger;
    }
    return _cached_encoder_for_Mode_selector_mode_value(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Mode_selector_mode_value */

/* eslint-enable */
