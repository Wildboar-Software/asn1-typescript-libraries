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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary MultipleConnections_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleConnections-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type MultipleConnections_Item =
    | { downstreamNotConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { downstreamConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { upstreamNotConnected: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { upstreamConnected: ObjectInstance } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_MultipleConnections_Item: $.ASN1Decoder<MultipleConnections_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MultipleConnections_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleConnections_Item} The decoded data structure.
 */
export function _decode_MultipleConnections_Item(el: _Element): MultipleConnections_Item {
    if (!_cached_decoder_for_MultipleConnections_Item) {
        _cached_decoder_for_MultipleConnections_Item = $._decode_inextensible_choice<MultipleConnections_Item>(
            {
                'CONTEXT 0': [
                    'downstreamNotConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'downstreamConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 2': [
                    'upstreamNotConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 3': [
                    'upstreamConnected',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MultipleConnections_Item(el);
}


let _cached_encoder_for_MultipleConnections_Item: $.ASN1Encoder<MultipleConnections_Item> | null = null;


/**
 * @summary Encodes a(n) MultipleConnections_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleConnections_Item, encoded as an ASN.1 Element.
 */
export function _encode_MultipleConnections_Item(
    value: MultipleConnections_Item,
    elGetter: $.ASN1Encoder<MultipleConnections_Item>
): _Element {
    if (!_cached_encoder_for_MultipleConnections_Item) {
        _cached_encoder_for_MultipleConnections_Item = $._encode_choice<MultipleConnections_Item>(
            {
                downstreamNotConnected: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                downstreamConnected: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                upstreamNotConnected: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                upstreamConnected: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MultipleConnections_Item(value, elGetter);
}


/* eslint-enable */
