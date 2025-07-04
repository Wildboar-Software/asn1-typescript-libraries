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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';


/**
 * @summary ConvertMulticastToPtoPReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertMulticastToPtoPReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConvertMulticastToPtoPReply_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { success: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ConvertMulticastToPtoPReply_Item: $.ASN1Decoder<ConvertMulticastToPtoPReply_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConvertMulticastToPtoPReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertMulticastToPtoPReply_Item} The decoded data structure.
 */
export function _decode_ConvertMulticastToPtoPReply_Item(el: _Element): ConvertMulticastToPtoPReply_Item {
    if (!_cached_decoder_for_ConvertMulticastToPtoPReply_Item) {
        _cached_decoder_for_ConvertMulticastToPtoPReply_Item = $._decode_inextensible_choice<ConvertMulticastToPtoPReply_Item>(
            {
                '*': ['failed', _decode_Failed],
                'CONTEXT 2': ['success', _decode_ObjectInstance],
                'CONTEXT 3': ['success', _decode_ObjectInstance],
                'CONTEXT 4': ['success', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ConvertMulticastToPtoPReply_Item(el);
}


let _cached_encoder_for_ConvertMulticastToPtoPReply_Item: $.ASN1Encoder<ConvertMulticastToPtoPReply_Item> | null = null;


/**
 * @summary Encodes a(n) ConvertMulticastToPtoPReply_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertMulticastToPtoPReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConvertMulticastToPtoPReply_Item(
    value: ConvertMulticastToPtoPReply_Item,
    elGetter: $.ASN1Encoder<ConvertMulticastToPtoPReply_Item>
): _Element {
    if (!_cached_encoder_for_ConvertMulticastToPtoPReply_Item) {
        _cached_encoder_for_ConvertMulticastToPtoPReply_Item = $._encode_choice<ConvertMulticastToPtoPReply_Item>(
            {
                failed: _encode_Failed,
                success: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConvertMulticastToPtoPReply_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
