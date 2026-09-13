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
import { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";
// export { AttributeValueAssertion, _decode_AttributeValueAssertion, _encode_AttributeValueAssertion } from "../InformationFramework/AttributeValueAssertion.ta.mjs";


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
export
type ModifyRights_Item_item =
    { entry: NULL } /* CHOICE_ALT_ROOT */
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { value: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyRights_Item_item: $.ASN1Decoder<ModifyRights_Item_item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRights_Item_item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyRights_Item_item (el: _Element): ModifyRights_Item_item {
    if (!_cached_decoder_for_ModifyRights_Item_item) { _cached_decoder_for_ModifyRights_Item_item = $._decode_extensible_choice<ModifyRights_Item_item>({
    "CONTEXT 0": [ "entry", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "attribute", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 2": [ "value", $._decode_implicit<AttributeValueAssertion>(() => _decode_AttributeValueAssertion) ]
}); }
    return _cached_decoder_for_ModifyRights_Item_item(el);
}

let _cached_encoder_for_ModifyRights_Item_item: $.ASN1Encoder<ModifyRights_Item_item> | null = null;

/**
 * @summary Encodes a(n) ModifyRights_Item_item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRights_Item_item, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyRights_Item_item (value: ModifyRights_Item_item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyRights_Item_item) { _cached_encoder_for_ModifyRights_Item_item = $._encode_choice<ModifyRights_Item_item>({
    "entry": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "attribute": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeType, $.BER),
    "value": $._encode_implicit(_TagClass.context, 2, () => _encode_AttributeValueAssertion, $.BER),
}, $.BER); }
    return _cached_encoder_for_ModifyRights_Item_item(value, elGetter);
}


/* eslint-enable */
