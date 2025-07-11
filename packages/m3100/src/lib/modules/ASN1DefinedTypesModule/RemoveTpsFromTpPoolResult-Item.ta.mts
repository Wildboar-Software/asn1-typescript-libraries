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
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';
import {
    RemoveTpsResultInformation,
    _decode_RemoveTpsResultInformation,
    _encode_RemoveTpsResultInformation,
} from '../ASN1DefinedTypesModule/RemoveTpsResultInformation.ta.mjs';

/**
 * @summary RemoveTpsFromTpPoolResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromTpPoolResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RemoveTpsFromTpPoolResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { removed: RemoveTpsResultInformation } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_RemoveTpsFromTpPoolResult_Item: $.ASN1Decoder<RemoveTpsFromTpPoolResult_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromTpPoolResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromTpPoolResult_Item} The decoded data structure.
 */
export function _decode_RemoveTpsFromTpPoolResult_Item(el: _Element): RemoveTpsFromTpPoolResult_Item {
    if (!_cached_decoder_for_RemoveTpsFromTpPoolResult_Item) {
        _cached_decoder_for_RemoveTpsFromTpPoolResult_Item = $._decode_inextensible_choice<RemoveTpsFromTpPoolResult_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'removed',
                    $._decode_implicit<RemoveTpsResultInformation>(
                        () => _decode_RemoveTpsResultInformation
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RemoveTpsFromTpPoolResult_Item(el);
}


let _cached_encoder_for_RemoveTpsFromTpPoolResult_Item: $.ASN1Encoder<RemoveTpsFromTpPoolResult_Item> | null = null;


/**
 * @summary Encodes a(n) RemoveTpsFromTpPoolResult_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromTpPoolResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromTpPoolResult_Item(
    value: RemoveTpsFromTpPoolResult_Item,
    elGetter: $.ASN1Encoder<RemoveTpsFromTpPoolResult_Item>
): _Element {
    if (!_cached_encoder_for_RemoveTpsFromTpPoolResult_Item) {
        _cached_encoder_for_RemoveTpsFromTpPoolResult_Item = $._encode_choice<RemoveTpsFromTpPoolResult_Item>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                removed: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RemoveTpsResultInformation,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromTpPoolResult_Item(value, elGetter);
}


/* eslint-enable */
