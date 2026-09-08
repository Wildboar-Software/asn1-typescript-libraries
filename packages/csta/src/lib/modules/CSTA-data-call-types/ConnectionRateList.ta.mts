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
 * @summary ConnectionRateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionRateList  ::=  SEQUENCE OF INTEGER
 * ```
 */
export
type ConnectionRateList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_ConnectionRateList: $.ASN1Decoder<ConnectionRateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionRateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionRateList (el: _Element): ConnectionRateList {
    if (!_cached_decoder_for_ConnectionRateList) { _cached_decoder_for_ConnectionRateList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_ConnectionRateList(el);
}

let _cached_encoder_for_ConnectionRateList: $.ASN1Encoder<ConnectionRateList> | null = null;

/**
 * @summary Encodes a(n) ConnectionRateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionRateList, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionRateList (value: ConnectionRateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionRateList) { _cached_encoder_for_ConnectionRateList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ConnectionRateList(value, elGetter);
}


/* eslint-enable */
