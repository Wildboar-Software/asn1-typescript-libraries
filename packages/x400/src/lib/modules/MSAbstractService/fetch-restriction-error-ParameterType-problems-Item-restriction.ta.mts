/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    MS_EITs,
    _decode_MS_EITs,
    _encode_MS_EITs,
} from '../MSAbstractService/MS-EITs.ta.mjs';
/**
 * @summary fetch_restriction_error_ParameterType_problems_Item_restriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fetch-restriction-error-ParameterType-problems-Item-restriction ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type fetch_restriction_error_ParameterType_problems_Item_restriction =
    | { content_type: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { eit: MS_EITs } /* CHOICE_ALT_ROOT */
    | { attribute_length: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction: $.ASN1Decoder<fetch_restriction_error_ParameterType_problems_Item_restriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) fetch_restriction_error_ParameterType_problems_Item_restriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {fetch_restriction_error_ParameterType_problems_Item_restriction} The decoded data structure.
 */
export function _decode_fetch_restriction_error_ParameterType_problems_Item_restriction(
    el: _Element
) {
    if (
        !_cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction
    ) {
        _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction = $._decode_inextensible_choice<fetch_restriction_error_ParameterType_problems_Item_restriction>(
            {
                'CONTEXT 0': [
                    'content_type',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'eit',
                    $._decode_implicit<MS_EITs>(() => _decode_MS_EITs),
                ],
                'CONTEXT 2': [
                    'attribute_length',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction(
        el
    );
}

let _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction: $.ASN1Encoder<fetch_restriction_error_ParameterType_problems_Item_restriction> | null = null;

/**
 * @summary Encodes a(n) fetch_restriction_error_ParameterType_problems_Item_restriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The fetch_restriction_error_ParameterType_problems_Item_restriction, encoded as an ASN.1 Element.
 */
export function _encode_fetch_restriction_error_ParameterType_problems_Item_restriction(
    value: fetch_restriction_error_ParameterType_problems_Item_restriction,
    elGetter: $.ASN1Encoder<fetch_restriction_error_ParameterType_problems_Item_restriction>
) {
    if (
        !_cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction
    ) {
        _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction = $._encode_choice<fetch_restriction_error_ParameterType_problems_Item_restriction>(
            {
                content_type: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                eit: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MS_EITs,
                    $.BER
                ),
                attribute_length: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_fetch_restriction_error_ParameterType_problems_Item_restriction(
        value,
        elGetter
    );
}


/* eslint-enable */
