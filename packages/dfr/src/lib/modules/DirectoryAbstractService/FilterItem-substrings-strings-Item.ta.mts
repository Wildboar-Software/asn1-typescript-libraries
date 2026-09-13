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
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
// export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary FilterItem_substrings_strings_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilterItem-substrings-strings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type FilterItem_substrings_strings_Item =
    { initial: _Element } /* CHOICE_ALT_ROOT */
    | { any_: _Element } /* CHOICE_ALT_ROOT */
    | { final: _Element } /* CHOICE_ALT_ROOT */
    | { control: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_FilterItem_substrings_strings_Item: $.ASN1Decoder<FilterItem_substrings_strings_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_substrings_strings_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilterItem_substrings_strings_Item (el: _Element): FilterItem_substrings_strings_Item {
    if (!_cached_decoder_for_FilterItem_substrings_strings_Item) { _cached_decoder_for_FilterItem_substrings_strings_Item = $._decode_extensible_choice<FilterItem_substrings_strings_Item>({
    "CONTEXT 0": [ "initial", $._decode_implicit<_Element>(() => $._decodeAny) ],
    "CONTEXT 1": [ "any_", $._decode_implicit<_Element>(() => $._decodeAny) ],
    "CONTEXT 2": [ "final", $._decode_implicit<_Element>(() => $._decodeAny) ],
    "UNIVERSAL 16": [ "control", _decode_Attribute ]
}); }
    return _cached_decoder_for_FilterItem_substrings_strings_Item(el);
}

let _cached_encoder_for_FilterItem_substrings_strings_Item: $.ASN1Encoder<FilterItem_substrings_strings_Item> | null = null;

/**
 * @summary Encodes a(n) FilterItem_substrings_strings_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_substrings_strings_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FilterItem_substrings_strings_Item (value: FilterItem_substrings_strings_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilterItem_substrings_strings_Item) { _cached_encoder_for_FilterItem_substrings_strings_Item = $._encode_choice<FilterItem_substrings_strings_Item>({
    "initial": $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER),
    "any_": $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER),
    "final": $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
    "control": _encode_Attribute,
}, $.BER); }
    return _cached_encoder_for_FilterItem_substrings_strings_Item(value, elGetter);
}


/* eslint-enable */
