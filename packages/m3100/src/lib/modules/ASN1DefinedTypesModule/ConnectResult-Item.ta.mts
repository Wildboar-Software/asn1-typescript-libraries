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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';
import {
    Connected,
    _decode_Connected,
    _encode_Connected,
} from '../ASN1DefinedTypesModule/Connected.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ConnectResult_Item */
/**
 * @summary ConnectResult_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectResult-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ConnectResult_Item =
    | { failed: Failed } /* CHOICE_ALT_ROOT */
    | { connected: Connected } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult_Item */
let _cached_decoder_for_ConnectResult_Item: $.ASN1Decoder<ConnectResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectResult_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectResult_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectResult_Item} The decoded data structure.
 */
export function _decode_ConnectResult_Item(el: _Element) {
    if (!_cached_decoder_for_ConnectResult_Item) {
        _cached_decoder_for_ConnectResult_Item = $._decode_inextensible_choice<ConnectResult_Item>(
            {
                'UNIVERSAL 16': ['failed', _decode_Failed],
                'UNIVERSAL 5': ['failed', _decode_Failed],
                'UNIVERSAL 2': ['failed', _decode_Failed],
                'CONTEXT 0': ['connected', _decode_Connected],
                'CONTEXT 1': ['connected', _decode_Connected],
            }
        );
    }
    return _cached_decoder_for_ConnectResult_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult_Item */
let _cached_encoder_for_ConnectResult_Item: $.ASN1Encoder<ConnectResult_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectResult_Item */
/**
 * @summary Encodes a(n) ConnectResult_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectResult_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConnectResult_Item(
    value: ConnectResult_Item,
    elGetter: $.ASN1Encoder<ConnectResult_Item>
) {
    if (!_cached_encoder_for_ConnectResult_Item) {
        _cached_encoder_for_ConnectResult_Item = $._encode_choice<ConnectResult_Item>(
            {
                failed: _encode_Failed,
                connected: _encode_Connected,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectResult_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectResult_Item */

/* eslint-enable */
