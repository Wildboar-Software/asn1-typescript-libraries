/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


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
export
type AllowedAttributeAssignments_Item_attributes_Item =
    { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attributeTypeandValues: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Decoder<AllowedAttributeAssignments_Item_attributes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments_Item_attributes_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedAttributeAssignments_Item_attributes_Item (el: _Element): AllowedAttributeAssignments_Item_attributes_Item {
    if (!_cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item) { _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._decode_extensible_choice<AllowedAttributeAssignments_Item_attributes_Item>({
    "CONTEXT 0": [ "attributeType", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 1": [ "attributeTypeandValues", $._decode_implicit<Attribute>(() => _decode_Attribute) ]
}); }
    return _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item(el);
}

let _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Encoder<AllowedAttributeAssignments_Item_attributes_Item> | null = null;

/**
 * @summary Encodes a(n) AllowedAttributeAssignments_Item_attributes_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments_Item_attributes_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedAttributeAssignments_Item_attributes_Item (value: AllowedAttributeAssignments_Item_attributes_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item) { _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._encode_choice<AllowedAttributeAssignments_Item_attributes_Item>({
    "attributeType": $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeType, $.BER),
    "attributeTypeandValues": $._encode_implicit(_TagClass.context, 1, () => _encode_Attribute, $.BER),
}, $.BER); }
    return _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item(value, elGetter);
}


/* eslint-enable */
