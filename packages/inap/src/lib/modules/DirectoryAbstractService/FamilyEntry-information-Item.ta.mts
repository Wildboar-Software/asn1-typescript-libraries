/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary FamilyEntry_information_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyEntry-information-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FamilyEntry_information_Item =
    { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FamilyEntry_information_Item: $.ASN1Decoder<FamilyEntry_information_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyEntry_information_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyEntry_information_Item (el: _Element): FamilyEntry_information_Item {
    if (!_cached_decoder_for_FamilyEntry_information_Item) { _cached_decoder_for_FamilyEntry_information_Item = $._decode_inextensible_choice<FamilyEntry_information_Item>({
    "UNIVERSAL 6": [ "attributeType", _decode_AttributeType ],
    "UNIVERSAL 16": [ "attribute", _decode_Attribute ]
}); }
    return _cached_decoder_for_FamilyEntry_information_Item(el);
}

let _cached_encoder_for_FamilyEntry_information_Item: $.ASN1Encoder<FamilyEntry_information_Item> | null = null;

/**
 * @summary Encodes a(n) FamilyEntry_information_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyEntry_information_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyEntry_information_Item (value: FamilyEntry_information_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyEntry_information_Item) { _cached_encoder_for_FamilyEntry_information_Item = $._encode_choice<FamilyEntry_information_Item>({
    "attributeType": _encode_AttributeType,
    "attribute": _encode_Attribute,
}, $.BER); }
    return _cached_encoder_for_FamilyEntry_information_Item(value, elGetter);
}


/* eslint-enable */
