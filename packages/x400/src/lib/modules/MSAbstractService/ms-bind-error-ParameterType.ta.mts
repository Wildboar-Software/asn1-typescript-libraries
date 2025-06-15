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
import {
    BindProblem,
    _enum_for_BindProblem,
    _decode_BindProblem,
    _encode_BindProblem,
} from '../MSAbstractService/BindProblem.ta.mjs';
import {
    ms_bind_error_ParameterType_qualified_error,
    _decode_ms_bind_error_ParameterType_qualified_error,
    _encode_ms_bind_error_ParameterType_qualified_error,
} from '../MSAbstractService/ms-bind-error-ParameterType-qualified-error.ta.mjs';
/**
 * @summary ms_bind_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-bind-error-ParameterType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ms_bind_error_ParameterType =
    | { unqualified_error: BindProblem } /* CHOICE_ALT_ROOT */
    | {
          qualified_error: ms_bind_error_ParameterType_qualified_error;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ms_bind_error_ParameterType: $.ASN1Decoder<ms_bind_error_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ms_bind_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ms_bind_error_ParameterType} The decoded data structure.
 */
export function _decode_ms_bind_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_ms_bind_error_ParameterType) {
        _cached_decoder_for_ms_bind_error_ParameterType = $._decode_inextensible_choice<ms_bind_error_ParameterType>(
            {
                'UNIVERSAL 10': ['unqualified_error', _decode_BindProblem],
                'UNIVERSAL 17': [
                    'qualified_error',
                    _decode_ms_bind_error_ParameterType_qualified_error,
                ],
            }
        );
    }
    return _cached_decoder_for_ms_bind_error_ParameterType(el);
}

let _cached_encoder_for_ms_bind_error_ParameterType: $.ASN1Encoder<ms_bind_error_ParameterType> | null = null;

/**
 * @summary Encodes a(n) ms_bind_error_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ms_bind_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_ms_bind_error_ParameterType(
    value: ms_bind_error_ParameterType,
    elGetter: $.ASN1Encoder<ms_bind_error_ParameterType>
) {
    if (!_cached_encoder_for_ms_bind_error_ParameterType) {
        _cached_encoder_for_ms_bind_error_ParameterType = $._encode_choice<ms_bind_error_ParameterType>(
            {
                unqualified_error: _encode_BindProblem,
                qualified_error: _encode_ms_bind_error_ParameterType_qualified_error,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ms_bind_error_ParameterType(value, elGetter);
}


/* eslint-enable */
