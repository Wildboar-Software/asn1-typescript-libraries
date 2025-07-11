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
    ConvertPtoPToMulticastReply_Item_success,
    _decode_ConvertPtoPToMulticastReply_Item_success,
    _encode_ConvertPtoPToMulticastReply_Item_success,
} from '../M3100ASN1TypeModule6/ConvertPtoPToMulticastReply-Item-success.ta.mjs';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';


/**
 * @summary ConvertPtoPToMulticastReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConvertPtoPToMulticastReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | {
          success: ConvertPtoPToMulticastReply_Item_success;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ConvertPtoPToMulticastReply_Item: $.ASN1Decoder<ConvertPtoPToMulticastReply_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastReply_Item} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastReply_Item(el: _Element): ConvertPtoPToMulticastReply_Item {
    if (!_cached_decoder_for_ConvertPtoPToMulticastReply_Item) {
        _cached_decoder_for_ConvertPtoPToMulticastReply_Item = $._decode_inextensible_choice<ConvertPtoPToMulticastReply_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_implicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'success',
                    $._decode_implicit<ConvertPtoPToMulticastReply_Item_success>(
                        () => _decode_ConvertPtoPToMulticastReply_Item_success
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ConvertPtoPToMulticastReply_Item(el);
}


let _cached_encoder_for_ConvertPtoPToMulticastReply_Item: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item> | null = null;


/**
 * @summary Encodes a(n) ConvertPtoPToMulticastReply_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastReply_Item(
    value: ConvertPtoPToMulticastReply_Item,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply_Item>
): _Element {
    if (!_cached_encoder_for_ConvertPtoPToMulticastReply_Item) {
        _cached_encoder_for_ConvertPtoPToMulticastReply_Item = $._encode_choice<ConvertPtoPToMulticastReply_Item>(
            {
                failed: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                success: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ConvertPtoPToMulticastReply_Item_success,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConvertPtoPToMulticastReply_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
