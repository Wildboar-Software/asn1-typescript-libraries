/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
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
 * @summary UpdateErrorData_attributeInfo_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateErrorData-attributeInfo-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UpdateErrorData_attributeInfo_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UpdateErrorData_attributeInfo_Item: $.ASN1Decoder<UpdateErrorData_attributeInfo_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateErrorData_attributeInfo_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateErrorData_attributeInfo_Item} The decoded data structure.
 */
export function _decode_UpdateErrorData_attributeInfo_Item(el: _Element): UpdateErrorData_attributeInfo_Item {
    if (!_cached_decoder_for_UpdateErrorData_attributeInfo_Item) {
        _cached_decoder_for_UpdateErrorData_attributeInfo_Item = $._decode_extensible_choice<UpdateErrorData_attributeInfo_Item>(
            {
                "UNIVERSAL 6": ["attributeType", _decode_AttributeType],
                "UNIVERSAL 16": ["attribute", _decode_Attribute],
            }
        );
    }
    return _cached_decoder_for_UpdateErrorData_attributeInfo_Item(el);
}

let _cached_encoder_for_UpdateErrorData_attributeInfo_Item: $.ASN1Encoder<UpdateErrorData_attributeInfo_Item> | null = null;

/**
 * @summary Encodes a(n) UpdateErrorData_attributeInfo_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateErrorData_attributeInfo_Item, encoded as an ASN.1 Element.
 */
export function _encode_UpdateErrorData_attributeInfo_Item(
    value: UpdateErrorData_attributeInfo_Item,
    elGetter: $.ASN1Encoder<UpdateErrorData_attributeInfo_Item>
): _Element {
    if (!_cached_encoder_for_UpdateErrorData_attributeInfo_Item) {
        _cached_encoder_for_UpdateErrorData_attributeInfo_Item = $._encode_choice<UpdateErrorData_attributeInfo_Item>(
            {
                attributeType: _encode_AttributeType,
                attribute: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateErrorData_attributeInfo_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
