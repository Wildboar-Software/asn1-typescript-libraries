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
 * @summary HashedAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashedAttributes  ::=  SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}
 * ```
 */
export
type HashedAttributes = Attribute[]; // SequenceOfType

let _cached_decoder_for_HashedAttributes: $.ASN1Decoder<HashedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashedAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashedAttributes (el: _Element): HashedAttributes {
    if (!_cached_decoder_for_HashedAttributes) { _cached_decoder_for_HashedAttributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_HashedAttributes(el);
}

let _cached_encoder_for_HashedAttributes: $.ASN1Encoder<HashedAttributes> | null = null;

/**
 * @summary Encodes a(n) HashedAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_HashedAttributes (value: HashedAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashedAttributes) { _cached_encoder_for_HashedAttributes = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_HashedAttributes(value, elGetter);
}


/* eslint-enable */
