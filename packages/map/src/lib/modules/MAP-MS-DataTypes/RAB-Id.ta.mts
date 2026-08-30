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
 * @summary RAB_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAB-Id  ::=  INTEGER (1..maxNrOfRABs)
 * ```
 */
export
type RAB_Id = INTEGER;

let _cached_decoder_for_RAB_Id: $.ASN1Decoder<RAB_Id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RAB_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RAB_Id (el: _Element): RAB_Id {
    if (!_cached_decoder_for_RAB_Id) { _cached_decoder_for_RAB_Id = $._decodeInteger; }
    return _cached_decoder_for_RAB_Id(el);
}

let _cached_encoder_for_RAB_Id: $.ASN1Encoder<RAB_Id> | null = null;

/**
 * @summary Encodes a(n) RAB_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAB_Id, encoded as an ASN.1 Element.
 */
export
function _encode_RAB_Id (value: RAB_Id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RAB_Id) { _cached_encoder_for_RAB_Id = $._encodeInteger; }
    return _cached_encoder_for_RAB_Id(value, elGetter);
}


/* eslint-enable */
