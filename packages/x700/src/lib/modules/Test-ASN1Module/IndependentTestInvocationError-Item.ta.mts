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
import * as $ from '@wildboar/asn1/functional';
import {
    IndependentTestResponse,
    _decode_IndependentTestResponse,
    _encode_IndependentTestResponse,
} from '../Test-ASN1Module/IndependentTestResponse.ta.mjs';
import {
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';
/**
 * @summary IndependentTestInvocationError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndependentTestInvocationError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IndependentTestInvocationError_Item =
    | { testInstanceCreated: IndependentTestResponse } /* CHOICE_ALT_ROOT */
    | { tONotCreated: TONotCreated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IndependentTestInvocationError_Item: $.ASN1Decoder<IndependentTestInvocationError_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndependentTestInvocationError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndependentTestInvocationError_Item} The decoded data structure.
 */
export function _decode_IndependentTestInvocationError_Item(el: _Element) {
    if (!_cached_decoder_for_IndependentTestInvocationError_Item) {
        _cached_decoder_for_IndependentTestInvocationError_Item = $._decode_inextensible_choice<IndependentTestInvocationError_Item>(
            {
                'CONTEXT 0': [
                    'testInstanceCreated',
                    $._decode_implicit<IndependentTestResponse>(
                        () => _decode_IndependentTestResponse
                    ),
                ],
                'UNIVERSAL 10': ['tONotCreated', _decode_TONotCreated],
                'UNIVERSAL 17': ['tONotCreated', _decode_TONotCreated],
            }
        );
    }
    return _cached_decoder_for_IndependentTestInvocationError_Item(el);
}

let _cached_encoder_for_IndependentTestInvocationError_Item: $.ASN1Encoder<IndependentTestInvocationError_Item> | null = null;

/**
 * @summary Encodes a(n) IndependentTestInvocationError_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndependentTestInvocationError_Item, encoded as an ASN.1 Element.
 */
export function _encode_IndependentTestInvocationError_Item(
    value: IndependentTestInvocationError_Item,
    elGetter: $.ASN1Encoder<IndependentTestInvocationError_Item>
) {
    if (!_cached_encoder_for_IndependentTestInvocationError_Item) {
        _cached_encoder_for_IndependentTestInvocationError_Item = $._encode_choice<IndependentTestInvocationError_Item>(
            {
                testInstanceCreated: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IndependentTestResponse,
                    $.BER
                ),
                tONotCreated: _encode_TONotCreated,
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndependentTestInvocationError_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
