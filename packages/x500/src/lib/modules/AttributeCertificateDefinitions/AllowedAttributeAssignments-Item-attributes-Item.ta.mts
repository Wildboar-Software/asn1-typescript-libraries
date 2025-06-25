/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary AllowedAttributeAssignments_Item_attributes_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedAttributeAssignments-Item-attributes-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AllowedAttributeAssignments_Item_attributes_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attributeTypeandValues: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Decoder<AllowedAttributeAssignments_Item_attributes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments_Item_attributes_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedAttributeAssignments_Item_attributes_Item} The decoded data structure.
 */
export function _decode_AllowedAttributeAssignments_Item_attributes_Item(
    el: _Element
): AllowedAttributeAssignments_Item_attributes_Item {
    if (!_cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item) {
        _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._decode_extensible_choice<AllowedAttributeAssignments_Item_attributes_Item>(
            {
                "CONTEXT 0": [
                    "attributeType",
                    $._decode_implicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 1": [
                    "attributeTypeandValues",
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
            }
        );
    }
    return _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item(
        el
    );
}

let _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Encoder<AllowedAttributeAssignments_Item_attributes_Item> | null = null;

/**
 * @summary Encodes a(n) AllowedAttributeAssignments_Item_attributes_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments_Item_attributes_Item, encoded as an ASN.1 Element.
 */
export function _encode_AllowedAttributeAssignments_Item_attributes_Item(
    value: AllowedAttributeAssignments_Item_attributes_Item,
    elGetter: $.ASN1Encoder<AllowedAttributeAssignments_Item_attributes_Item>
): _Element {
    if (!_cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item) {
        _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._encode_choice<AllowedAttributeAssignments_Item_attributes_Item>(
            {
                attributeType: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.DER
                ),
                attributeTypeandValues: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Attribute,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
