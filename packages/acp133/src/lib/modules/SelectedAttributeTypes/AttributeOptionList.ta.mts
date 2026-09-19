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



/**
 * @summary AttributeOptionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeOptionList  ::=  SEQUENCE OF UTF8String
 * ```
 */
export
type AttributeOptionList = UTF8String[]; // SequenceOfType

let _cached_decoder_for_AttributeOptionList: $.ASN1Decoder<AttributeOptionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOptionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeOptionList (el: _Element): AttributeOptionList {
    if (!_cached_decoder_for_AttributeOptionList) { _cached_decoder_for_AttributeOptionList = $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String); }
    return _cached_decoder_for_AttributeOptionList(el);
}

let _cached_encoder_for_AttributeOptionList: $.ASN1Encoder<AttributeOptionList> | null = null;

/**
 * @summary Encodes a(n) AttributeOptionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOptionList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeOptionList (value: AttributeOptionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeOptionList) { _cached_encoder_for_AttributeOptionList = $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER); }
    return _cached_encoder_for_AttributeOptionList(value, elGetter);
}


/* eslint-enable */
