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
 * @summary ConnectTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectTime  ::=  [58] IMPLICIT OCTET STRING(SIZE(5))
 * ```
 */
export
type ConnectTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ConnectTime: $.ASN1Decoder<ConnectTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectTime (el: _Element): ConnectTime {
    if (!_cached_decoder_for_ConnectTime) { _cached_decoder_for_ConnectTime = $._decode_implicit<ConnectTime>(() => $._decodeOctetString); }
    return _cached_decoder_for_ConnectTime(el);
}

let _cached_encoder_for_ConnectTime: $.ASN1Encoder<ConnectTime> | null = null;

/**
 * @summary Encodes a(n) ConnectTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectTime, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectTime (value: ConnectTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectTime) { _cached_encoder_for_ConnectTime = $._encode_implicit(_TagClass.context, 58, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ConnectTime(value, elGetter);
}


/* eslint-enable */
