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
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta.mjs';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';


/**
 * @summary SplitXCReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SplitXCReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { success: CoincidentUnidirectionalConnections } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SplitXCReply_Item: $.ASN1Decoder<SplitXCReply_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCReply_Item} The decoded data structure.
 */
export function _decode_SplitXCReply_Item(el: _Element) {
    if (!_cached_decoder_for_SplitXCReply_Item) {
        _cached_decoder_for_SplitXCReply_Item = $._decode_inextensible_choice<SplitXCReply_Item>(
            {
                '*': ['failed', _decode_Failed],
                'CONTEXT 0': [
                    'success',
                    _decode_CoincidentUnidirectionalConnections,
                ],
                'CONTEXT 1': [
                    'success',
                    _decode_CoincidentUnidirectionalConnections,
                ],
            }
        );
    }
    return _cached_decoder_for_SplitXCReply_Item(el);
}


let _cached_encoder_for_SplitXCReply_Item: $.ASN1Encoder<SplitXCReply_Item> | null = null;


/**
 * @summary Encodes a(n) SplitXCReply_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCReply_Item(
    value: SplitXCReply_Item,
    elGetter: $.ASN1Encoder<SplitXCReply_Item>
) {
    if (!_cached_encoder_for_SplitXCReply_Item) {
        _cached_encoder_for_SplitXCReply_Item = $._encode_choice<SplitXCReply_Item>(
            {
                failed: _encode_Failed,
                success: _encode_CoincidentUnidirectionalConnections,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SplitXCReply_Item(value, elGetter);
}


/* eslint-enable */
