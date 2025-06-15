/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ACIItem_itemOrUserFirst_itemFirst,
    _decode_ACIItem_itemOrUserFirst_itemFirst,
    _encode_ACIItem_itemOrUserFirst_itemFirst,
} from "../BasicAccessControl/ACIItem-itemOrUserFirst-itemFirst.ta.mjs";
import {
    ACIItem_itemOrUserFirst_userFirst,
    _decode_ACIItem_itemOrUserFirst_userFirst,
    _encode_ACIItem_itemOrUserFirst_userFirst,
} from "../BasicAccessControl/ACIItem-itemOrUserFirst-userFirst.ta.mjs";
/**
 * @summary ACIItem_itemOrUserFirst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACIItem-itemOrUserFirst ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ACIItem_itemOrUserFirst =
    | { itemFirst: ACIItem_itemOrUserFirst_itemFirst } /* CHOICE_ALT_ROOT */
    | { userFirst: ACIItem_itemOrUserFirst_userFirst } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ACIItem_itemOrUserFirst: $.ASN1Decoder<ACIItem_itemOrUserFirst> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACIItem_itemOrUserFirst
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACIItem_itemOrUserFirst} The decoded data structure.
 */
export function _decode_ACIItem_itemOrUserFirst(el: _Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst = $._decode_extensible_choice<ACIItem_itemOrUserFirst>(
            {
                "CONTEXT 0": [
                    "itemFirst",
                    $._decode_explicit<ACIItem_itemOrUserFirst_itemFirst>(
                        () => _decode_ACIItem_itemOrUserFirst_itemFirst
                    ),
                ],
                "CONTEXT 1": [
                    "userFirst",
                    $._decode_explicit<ACIItem_itemOrUserFirst_userFirst>(
                        () => _decode_ACIItem_itemOrUserFirst_userFirst
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst(el);
}

let _cached_encoder_for_ACIItem_itemOrUserFirst: $.ASN1Encoder<ACIItem_itemOrUserFirst> | null = null;

/**
 * @summary Encodes a(n) ACIItem_itemOrUserFirst into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACIItem_itemOrUserFirst, encoded as an ASN.1 Element.
 */
export function _encode_ACIItem_itemOrUserFirst(
    value: ACIItem_itemOrUserFirst,
    elGetter: $.ASN1Encoder<ACIItem_itemOrUserFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst = $._encode_choice<ACIItem_itemOrUserFirst>(
            {
                itemFirst: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ACIItem_itemOrUserFirst_itemFirst,
                    $.DER
                ),
                userFirst: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ACIItem_itemOrUserFirst_userFirst,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ACIItem_itemOrUserFirst(value, elGetter);
}


/* eslint-enable */
