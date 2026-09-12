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
 * @summary Unsigned16
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Unsigned16  ::=  INTEGER(0..32767)
 * ```
 */
export
type Unsigned16 = INTEGER;

let _cached_decoder_for_Unsigned16: $.ASN1Decoder<Unsigned16> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unsigned16
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Unsigned16 (el: _Element): Unsigned16 {
    if (!_cached_decoder_for_Unsigned16) { _cached_decoder_for_Unsigned16 = $._decodeInteger; }
    return _cached_decoder_for_Unsigned16(el);
}

let _cached_encoder_for_Unsigned16: $.ASN1Encoder<Unsigned16> | null = null;

/**
 * @summary Encodes a(n) Unsigned16 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unsigned16, encoded as an ASN.1 Element.
 */
export
function _encode_Unsigned16 (value: Unsigned16, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Unsigned16) { _cached_encoder_for_Unsigned16 = $._encodeInteger; }
    return _cached_encoder_for_Unsigned16(value, elGetter);
}


/* eslint-enable */
