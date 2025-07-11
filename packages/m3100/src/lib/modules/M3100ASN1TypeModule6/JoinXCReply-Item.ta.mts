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
    JoinXCReply_Item_success,
    _decode_JoinXCReply_Item_success,
    _encode_JoinXCReply_Item_success,
} from '../M3100ASN1TypeModule6/JoinXCReply-Item-success.ta.mjs';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';


/**
 * @summary JoinXCReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinXCReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type JoinXCReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { success: JoinXCReply_Item_success } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_JoinXCReply_Item: $.ASN1Decoder<JoinXCReply_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) JoinXCReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinXCReply_Item} The decoded data structure.
 */
export function _decode_JoinXCReply_Item(el: _Element): JoinXCReply_Item {
    if (!_cached_decoder_for_JoinXCReply_Item) {
        _cached_decoder_for_JoinXCReply_Item = $._decode_inextensible_choice<JoinXCReply_Item>(
            {
                'CONTEXT 0': [
                    'failed',
                    $._decode_implicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'success',
                    $._decode_explicit<JoinXCReply_Item_success>(
                        () => _decode_JoinXCReply_Item_success
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_JoinXCReply_Item(el);
}


let _cached_encoder_for_JoinXCReply_Item: $.ASN1Encoder<JoinXCReply_Item> | null = null;


/**
 * @summary Encodes a(n) JoinXCReply_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinXCReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_JoinXCReply_Item(
    value: JoinXCReply_Item,
    elGetter: $.ASN1Encoder<JoinXCReply_Item>
): _Element {
    if (!_cached_encoder_for_JoinXCReply_Item) {
        _cached_encoder_for_JoinXCReply_Item = $._encode_choice<JoinXCReply_Item>(
            {
                failed: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                success: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_JoinXCReply_Item_success,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_JoinXCReply_Item(value, elGetter);
}


/* eslint-enable */
