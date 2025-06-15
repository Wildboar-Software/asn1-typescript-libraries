/* eslint-disable */
import {
    REAL,
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
import {
    NormalValue_value_range,
    _decode_NormalValue_value_range,
    _encode_NormalValue_value_range,
} from '../E-health-Data-Message/NormalValue-value-range.ta.mjs';

/**
 * @summary NormalValue_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NormalValue-value ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type NormalValue_value =
    | { range: NormalValue_value_range } /* CHOICE_ALT_ROOT */
    | { low_limit: REAL } /* CHOICE_ALT_ROOT */
    | { high_limit: REAL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_NormalValue_value: $.ASN1Decoder<NormalValue_value> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NormalValue_value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalValue_value} The decoded data structure.
 */
export function _decode_NormalValue_value(el: _Element) {
    if (!_cached_decoder_for_NormalValue_value) {
        _cached_decoder_for_NormalValue_value = $._decode_inextensible_choice<NormalValue_value>(
            {
                'CONTEXT 0': ['range', _decode_NormalValue_value_range],
                'CONTEXT 1': ['low_limit', $._decodeReal],
                'CONTEXT 2': ['high_limit', $._decodeReal],
            }
        );
    }
    return _cached_decoder_for_NormalValue_value(el);
}


let _cached_encoder_for_NormalValue_value: $.ASN1Encoder<NormalValue_value> | null = null;


/**
 * @summary Encodes a(n) NormalValue_value into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalValue_value, encoded as an ASN.1 Element.
 */
export function _encode_NormalValue_value(
    value: NormalValue_value,
    elGetter: $.ASN1Encoder<NormalValue_value>
) {
    if (!_cached_encoder_for_NormalValue_value) {
        _cached_encoder_for_NormalValue_value = $._encode_choice<NormalValue_value>(
            {
                range: _encode_NormalValue_value_range,
                low_limit: $._encodeReal,
                high_limit: $._encodeReal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NormalValue_value(value, elGetter);
}


/* eslint-enable */
