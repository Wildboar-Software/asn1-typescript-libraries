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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary DisconnectResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisconnectResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DisconnectResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { disconnected: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_DisconnectResult_Item: $.ASN1Decoder<DisconnectResult_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisconnectResult_Item} The decoded data structure.
 */
export function _decode_DisconnectResult_Item(el: _Element): DisconnectResult_Item {
    if (!_cached_decoder_for_DisconnectResult_Item) {
        _cached_decoder_for_DisconnectResult_Item = $._decode_inextensible_choice<DisconnectResult_Item>(
            {
                'UNIVERSAL 16': ['failed', _decode_Failed],
                'UNIVERSAL 5': ['failed', _decode_Failed],
                'UNIVERSAL 2': ['failed', _decode_Failed],
                'CONTEXT 2': ['disconnected', _decode_ObjectInstance],
                'CONTEXT 3': ['disconnected', _decode_ObjectInstance],
                'CONTEXT 4': ['disconnected', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_DisconnectResult_Item(el);
}


let _cached_encoder_for_DisconnectResult_Item: $.ASN1Encoder<DisconnectResult_Item> | null = null;


/**
 * @summary Encodes a(n) DisconnectResult_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_DisconnectResult_Item(
    value: DisconnectResult_Item,
    elGetter: $.ASN1Encoder<DisconnectResult_Item>
): _Element {
    if (!_cached_encoder_for_DisconnectResult_Item) {
        _cached_encoder_for_DisconnectResult_Item = $._encode_choice<DisconnectResult_Item>(
            {
                failed: _encode_Failed,
                disconnected: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DisconnectResult_Item(value, elGetter);
}


/* eslint-enable */
