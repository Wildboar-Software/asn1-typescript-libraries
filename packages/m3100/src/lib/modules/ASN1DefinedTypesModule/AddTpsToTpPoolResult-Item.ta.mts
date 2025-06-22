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
    TpsAddedToTpPool,
    _decode_TpsAddedToTpPool,
    _encode_TpsAddedToTpPool,
} from '../ASN1DefinedTypesModule/TpsAddedToTpPool.ta.mjs';

/**
 * @summary AddTpsToTpPoolResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddTpsToTpPoolResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { tpsAddedToTpPool: TpsAddedToTpPool } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_AddTpsToTpPoolResult_Item: $.ASN1Decoder<AddTpsToTpPoolResult_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolResult_Item} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolResult_Item(el: _Element) {
    if (!_cached_decoder_for_AddTpsToTpPoolResult_Item) {
        _cached_decoder_for_AddTpsToTpPoolResult_Item = $._decode_inextensible_choice<AddTpsToTpPoolResult_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'tpsAddedToTpPool',
                    $._decode_implicit<TpsAddedToTpPool>(
                        () => _decode_TpsAddedToTpPool
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AddTpsToTpPoolResult_Item(el);
}


let _cached_encoder_for_AddTpsToTpPoolResult_Item: $.ASN1Encoder<AddTpsToTpPoolResult_Item> | null = null;


/**
 * @summary Encodes a(n) AddTpsToTpPoolResult_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolResult_Item(
    value: AddTpsToTpPoolResult_Item,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolResult_Item>
) {
    if (!_cached_encoder_for_AddTpsToTpPoolResult_Item) {
        _cached_encoder_for_AddTpsToTpPoolResult_Item = $._encode_choice<AddTpsToTpPoolResult_Item>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                tpsAddedToTpPool: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TpsAddedToTpPool,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToTpPoolResult_Item(value, elGetter);
}


/* eslint-enable */
