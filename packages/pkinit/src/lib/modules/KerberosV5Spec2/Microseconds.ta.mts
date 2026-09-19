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
 * @summary Microseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Microseconds     ::=  INTEGER (0..999999)
 * ```
 */
export
type Microseconds = INTEGER;

let _cached_decoder_for_Microseconds: $.ASN1Decoder<Microseconds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Microseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Microseconds (el: _Element): Microseconds {
    if (!_cached_decoder_for_Microseconds) { _cached_decoder_for_Microseconds = $._decodeInteger; }
    return _cached_decoder_for_Microseconds(el);
}

let _cached_encoder_for_Microseconds: $.ASN1Encoder<Microseconds> | null = null;

/**
 * @summary Encodes a(n) Microseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Microseconds, encoded as an ASN.1 Element.
 */
export
function _encode_Microseconds (value: Microseconds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Microseconds) { _cached_encoder_for_Microseconds = $._encodeInteger; }
    return _cached_encoder_for_Microseconds(value, elGetter);
}


/* eslint-enable */
