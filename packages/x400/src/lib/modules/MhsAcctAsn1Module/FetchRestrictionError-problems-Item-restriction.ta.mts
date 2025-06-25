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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta.mjs';
import {
    MS_EITs,
    _decode_MS_EITs,
    _encode_MS_EITs,
} from '../MSAbstractService/MS-EITs.ta.mjs';
import {
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
/**
 * @summary FetchRestrictionError_problems_Item_restriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionError-problems-Item-restriction ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FetchRestrictionError_problems_Item_restriction =
    | { content_type: ContentType } /* CHOICE_ALT_ROOT */
    | { eit: MS_EITs } /* CHOICE_ALT_ROOT */
    | { content_length: ContentLength } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FetchRestrictionError_problems_Item_restriction: $.ASN1Decoder<FetchRestrictionError_problems_Item_restriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchRestrictionError_problems_Item_restriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchRestrictionError_problems_Item_restriction} The decoded data structure.
 */
export function _decode_FetchRestrictionError_problems_Item_restriction(
    el: _Element
): FetchRestrictionError_problems_Item_restriction {
    if (!_cached_decoder_for_FetchRestrictionError_problems_Item_restriction) {
        _cached_decoder_for_FetchRestrictionError_problems_Item_restriction = $._decode_inextensible_choice<FetchRestrictionError_problems_Item_restriction>(
            {
                'CONTEXT 0': [
                    'content_type',
                    $._decode_explicit<ContentType>(() => _decode_ContentType),
                ],
                'CONTEXT 1': [
                    'eit',
                    $._decode_implicit<MS_EITs>(() => _decode_MS_EITs),
                ],
                'CONTEXT 2': [
                    'content_length',
                    $._decode_implicit<ContentLength>(
                        () => _decode_ContentLength
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FetchRestrictionError_problems_Item_restriction(
        el
    );
}

let _cached_encoder_for_FetchRestrictionError_problems_Item_restriction: $.ASN1Encoder<FetchRestrictionError_problems_Item_restriction> | null = null;

/**
 * @summary Encodes a(n) FetchRestrictionError_problems_Item_restriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchRestrictionError_problems_Item_restriction, encoded as an ASN.1 Element.
 */
export function _encode_FetchRestrictionError_problems_Item_restriction(
    value: FetchRestrictionError_problems_Item_restriction,
    elGetter: $.ASN1Encoder<FetchRestrictionError_problems_Item_restriction>
): _Element {
    if (!_cached_encoder_for_FetchRestrictionError_problems_Item_restriction) {
        _cached_encoder_for_FetchRestrictionError_problems_Item_restriction = $._encode_choice<FetchRestrictionError_problems_Item_restriction>(
            {
                content_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ContentType,
                    $.BER
                ),
                eit: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MS_EITs,
                    $.BER
                ),
                content_length: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ContentLength,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FetchRestrictionError_problems_Item_restriction(
        value,
        elGetter
    );
}


/* eslint-enable */
