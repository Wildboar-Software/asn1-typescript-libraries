/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
import {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from "../InformationFramework/AttributeValueAssertion.ta.mjs";
/**
 * @summary ModifyRights_Item_item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRights-Item-item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyRights_Item_item =
    | { entry: NULL } /* CHOICE_ALT_ROOT */
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { value: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyRights_Item_item: $.ASN1Decoder<ModifyRights_Item_item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRights_Item_item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRights_Item_item} The decoded data structure.
 */
export function _decode_ModifyRights_Item_item(el: _Element) {
    if (!_cached_decoder_for_ModifyRights_Item_item) {
        _cached_decoder_for_ModifyRights_Item_item = $._decode_extensible_choice<ModifyRights_Item_item>(
            {
                "CONTEXT 0": [
                    "entry",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "attribute",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 2": [
                    "value",
                    $._decode_explicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyRights_Item_item(el);
}

let _cached_encoder_for_ModifyRights_Item_item: $.ASN1Encoder<ModifyRights_Item_item> | null = null;

/**
 * @summary Encodes a(n) ModifyRights_Item_item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRights_Item_item, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRights_Item_item(
    value: ModifyRights_Item_item,
    elGetter: $.ASN1Encoder<ModifyRights_Item_item>
) {
    if (!_cached_encoder_for_ModifyRights_Item_item) {
        _cached_encoder_for_ModifyRights_Item_item = $._encode_choice<ModifyRights_Item_item>(
            {
                entry: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                attribute: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    $.BER
                ),
                value: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyRights_Item_item(value, elGetter);
}


/* eslint-enable */
