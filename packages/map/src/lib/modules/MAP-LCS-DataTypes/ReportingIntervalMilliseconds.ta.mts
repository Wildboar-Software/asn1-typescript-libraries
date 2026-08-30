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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary ReportingIntervalMilliseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingIntervalMilliseconds  ::=  INTEGER (1..maxReportingIntervalMilliseconds)
 * ```
 */
export
type ReportingIntervalMilliseconds = INTEGER;

let _cached_decoder_for_ReportingIntervalMilliseconds: $.ASN1Decoder<ReportingIntervalMilliseconds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingIntervalMilliseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingIntervalMilliseconds (el: _Element): ReportingIntervalMilliseconds {
    if (!_cached_decoder_for_ReportingIntervalMilliseconds) { _cached_decoder_for_ReportingIntervalMilliseconds = $._decodeInteger; }
    return _cached_decoder_for_ReportingIntervalMilliseconds(el);
}

let _cached_encoder_for_ReportingIntervalMilliseconds: $.ASN1Encoder<ReportingIntervalMilliseconds> | null = null;

/**
 * @summary Encodes a(n) ReportingIntervalMilliseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingIntervalMilliseconds, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingIntervalMilliseconds (value: ReportingIntervalMilliseconds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingIntervalMilliseconds) { _cached_encoder_for_ReportingIntervalMilliseconds = $._encodeInteger; }
    return _cached_encoder_for_ReportingIntervalMilliseconds(value, elGetter);
}


/* eslint-enable */
