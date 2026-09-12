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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary TypeSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeSpecification  ::=  CHOICE {
 *    typeName               [0] ObjectName,
 *    typeDescription        TypeDescription  }
 * ```
 */
export
type TypeSpecification =
    { typeName: ObjectName } /* CHOICE_ALT_ROOT */
    | { typeDescription: TypeDescription } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TypeSpecification: $.ASN1Decoder<TypeSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeSpecification (el: _Element): TypeSpecification {
    if (!_cached_decoder_for_TypeSpecification) { _cached_decoder_for_TypeSpecification = $._decode_inextensible_choice<TypeSpecification>({
    "CONTEXT 0": [ "typeName", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 1": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 2": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 3": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 4": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 5": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 6": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 7": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 9": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 10": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 11": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 12": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 13": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 15": [ "typeDescription", _decode_TypeDescription ],
    "CONTEXT 16": [ "typeDescription", _decode_TypeDescription ]
}); }
    return _cached_decoder_for_TypeSpecification(el);
}

let _cached_encoder_for_TypeSpecification: $.ASN1Encoder<TypeSpecification> | null = null;

/**
 * @summary Encodes a(n) TypeSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_TypeSpecification (value: TypeSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeSpecification) { _cached_encoder_for_TypeSpecification = $._encode_choice<TypeSpecification>({
    "typeName": $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER),
    "typeDescription": _encode_TypeDescription,
}, $.BER); }
    return _cached_encoder_for_TypeSpecification(value, elGetter);
}


/* eslint-enable */
