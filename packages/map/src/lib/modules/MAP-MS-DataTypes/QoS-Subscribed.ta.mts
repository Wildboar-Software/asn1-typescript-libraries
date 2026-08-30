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
 * @summary QoS_Subscribed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoS-Subscribed  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type QoS_Subscribed = OCTET_STRING; // OctetStringType

let _cached_decoder_for_QoS_Subscribed: $.ASN1Decoder<QoS_Subscribed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QoS_Subscribed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QoS_Subscribed (el: _Element): QoS_Subscribed {
    if (!_cached_decoder_for_QoS_Subscribed) { _cached_decoder_for_QoS_Subscribed = $._decodeOctetString; }
    return _cached_decoder_for_QoS_Subscribed(el);
}

let _cached_encoder_for_QoS_Subscribed: $.ASN1Encoder<QoS_Subscribed> | null = null;

/**
 * @summary Encodes a(n) QoS_Subscribed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QoS_Subscribed, encoded as an ASN.1 Element.
 */
export
function _encode_QoS_Subscribed (value: QoS_Subscribed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QoS_Subscribed) { _cached_encoder_for_QoS_Subscribed = $._encodeOctetString; }
    return _cached_encoder_for_QoS_Subscribed(value, elGetter);
}


/* eslint-enable */
