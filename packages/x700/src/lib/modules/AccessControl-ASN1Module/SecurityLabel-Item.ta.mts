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
    SecurityLabel_Item_initiatorLabel,
    _decode_SecurityLabel_Item_initiatorLabel,
    _encode_SecurityLabel_Item_initiatorLabel,
} from '../AccessControl-ASN1Module/SecurityLabel-Item-initiatorLabel.ta.mjs';
/**
 * @summary SecurityLabel_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SecurityLabel_Item = {
    initiatorLabel: SecurityLabel_Item_initiatorLabel;
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityLabel_Item: $.ASN1Decoder<SecurityLabel_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel_Item} The decoded data structure.
 */
export function _decode_SecurityLabel_Item(el: _Element) {
    if (!_cached_decoder_for_SecurityLabel_Item) {
        _cached_decoder_for_SecurityLabel_Item = $._decode_inextensible_choice<SecurityLabel_Item>(
            {
                'CONTEXT 1': [
                    'initiatorLabel',
                    $._decode_implicit<SecurityLabel_Item_initiatorLabel>(
                        () => _decode_SecurityLabel_Item_initiatorLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityLabel_Item(el);
}

let _cached_encoder_for_SecurityLabel_Item: $.ASN1Encoder<SecurityLabel_Item> | null = null;

/**
 * @summary Encodes a(n) SecurityLabel_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel_Item, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel_Item(
    value: SecurityLabel_Item,
    elGetter: $.ASN1Encoder<SecurityLabel_Item>
) {
    if (!_cached_encoder_for_SecurityLabel_Item) {
        _cached_encoder_for_SecurityLabel_Item = $._encode_choice<SecurityLabel_Item>(
            {
                initiatorLabel: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SecurityLabel_Item_initiatorLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabel_Item(value, elGetter);
}


/* eslint-enable */
