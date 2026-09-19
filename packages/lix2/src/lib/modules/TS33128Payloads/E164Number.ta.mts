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
 * @summary E164Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E164Number  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type E164Number = NumericString; // NumericString

let _cached_decoder_for_E164Number: $.ASN1Decoder<E164Number> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E164Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E164Number (el: _Element): E164Number {
    if (!_cached_decoder_for_E164Number) { _cached_decoder_for_E164Number = $._decodeNumericString; }
    return _cached_decoder_for_E164Number(el);
}

let _cached_encoder_for_E164Number: $.ASN1Encoder<E164Number> | null = null;

/**
 * @summary Encodes a(n) E164Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E164Number, encoded as an ASN.1 Element.
 */
export
function _encode_E164Number (value: E164Number, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E164Number) { _cached_encoder_for_E164Number = $._encodeNumericString; }
    return _cached_encoder_for_E164Number(value, elGetter);
}


/* eslint-enable */
