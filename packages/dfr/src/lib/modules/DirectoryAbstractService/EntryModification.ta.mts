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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";
// export { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";


/**
 * @summary EntryModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryModification  ::=  CHOICE {
 *   addAttribute     [0]  Attribute{{SupportedAttributes}},
 *   removeAttribute  [1]  AttributeType,
 *   addValues        [2]  Attribute{{SupportedAttributes}},
 *   removeValues     [3]  Attribute{{SupportedAttributes}},
 *   alterValues      [4]  AttributeTypeAndValue,
 *   resetValue       [5]  AttributeType,
 *   replaceValues    [6]  Attribute{{SupportedAttributes}},
 *   ... }
 * ```
 */
export
type EntryModification =
    { addAttribute: Attribute } /* CHOICE_ALT_ROOT */
    | { removeAttribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { addValues: Attribute } /* CHOICE_ALT_ROOT */
    | { removeValues: Attribute } /* CHOICE_ALT_ROOT */
    | { alterValues: AttributeTypeAndValue } /* CHOICE_ALT_ROOT */
    | { resetValue: AttributeType } /* CHOICE_ALT_ROOT */
    | { replaceValues: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EntryModification: $.ASN1Decoder<EntryModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryModification (el: _Element): EntryModification {
    if (!_cached_decoder_for_EntryModification) { _cached_decoder_for_EntryModification = $._decode_extensible_choice<EntryModification>({
    "CONTEXT 0": [ "addAttribute", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 1": [ "removeAttribute", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 2": [ "addValues", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 3": [ "removeValues", $._decode_implicit<Attribute>(() => _decode_Attribute) ],
    "CONTEXT 4": [ "alterValues", $._decode_implicit<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue) ],
    "CONTEXT 5": [ "resetValue", $._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 6": [ "replaceValues", $._decode_implicit<Attribute>(() => _decode_Attribute) ]
}); }
    return _cached_decoder_for_EntryModification(el);
}

let _cached_encoder_for_EntryModification: $.ASN1Encoder<EntryModification> | null = null;

/**
 * @summary Encodes a(n) EntryModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification, encoded as an ASN.1 Element.
 */
export
function _encode_EntryModification (value: EntryModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryModification) { _cached_encoder_for_EntryModification = $._encode_choice<EntryModification>({
    "addAttribute": $._encode_implicit(_TagClass.context, 0, () => _encode_Attribute, $.BER),
    "removeAttribute": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeType, $.BER),
    "addValues": $._encode_implicit(_TagClass.context, 2, () => _encode_Attribute, $.BER),
    "removeValues": $._encode_implicit(_TagClass.context, 3, () => _encode_Attribute, $.BER),
    "alterValues": $._encode_implicit(_TagClass.context, 4, () => _encode_AttributeTypeAndValue, $.BER),
    "resetValue": $._encode_implicit(_TagClass.context, 5, () => _encode_AttributeType, $.BER),
    "replaceValues": $._encode_implicit(_TagClass.context, 6, () => _encode_Attribute, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntryModification(value, elGetter);
}


/* eslint-enable */
