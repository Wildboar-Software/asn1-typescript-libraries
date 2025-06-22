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
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';
import {
    AddedTps,
    _decode_AddedTps,
    _encode_AddedTps,
} from '../ASN1DefinedTypesModule/AddedTps.ta.mjs';

/**
 * @summary AddTpsToGtpResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddTpsToGtpResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { addedTps: AddedTps } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_AddTpsToGtpResult_Item: $.ASN1Decoder<AddTpsToGtpResult_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpResult_Item} The decoded data structure.
 */
export function _decode_AddTpsToGtpResult_Item(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpResult_Item) {
        _cached_decoder_for_AddTpsToGtpResult_Item = $._decode_inextensible_choice<AddTpsToGtpResult_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_explicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'addedTps',
                    $._decode_implicit<AddedTps>(() => _decode_AddedTps),
                ],
            }
        );
    }
    return _cached_decoder_for_AddTpsToGtpResult_Item(el);
}


let _cached_encoder_for_AddTpsToGtpResult_Item: $.ASN1Encoder<AddTpsToGtpResult_Item> | null = null;


/**
 * @summary Encodes a(n) AddTpsToGtpResult_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpResult_Item(
    value: AddTpsToGtpResult_Item,
    elGetter: $.ASN1Encoder<AddTpsToGtpResult_Item>
) {
    if (!_cached_encoder_for_AddTpsToGtpResult_Item) {
        _cached_encoder_for_AddTpsToGtpResult_Item = $._encode_choice<AddTpsToGtpResult_Item>(
            {
                failed: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                addedTps: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddedTps,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpResult_Item(value, elGetter);
}


/* eslint-enable */
