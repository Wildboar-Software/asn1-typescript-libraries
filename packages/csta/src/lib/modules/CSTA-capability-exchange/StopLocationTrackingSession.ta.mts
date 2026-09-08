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
 * @summary StopLocationTrackingSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopLocationTrackingSession  ::=  BIT STRING
 * {    reason                    ( 0),
 *     privateData                ( 1),
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type StopLocationTrackingSession = BIT_STRING;

/**
 * @summary StopLocationTrackingSession_reason
 * @constant
 */
export
const StopLocationTrackingSession_reason: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = StopLocationTrackingSession_reason; /* SHORT_NAMED_BIT */

/**
 * @summary StopLocationTrackingSession_privateData
 * @constant
 */
export
const StopLocationTrackingSession_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StopLocationTrackingSession_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StopLocationTrackingSession_privateDataInAck
 * @constant
 */
export
const StopLocationTrackingSession_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = StopLocationTrackingSession_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopLocationTrackingSession: $.ASN1Decoder<StopLocationTrackingSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopLocationTrackingSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopLocationTrackingSession (el: _Element): StopLocationTrackingSession {
    if (!_cached_decoder_for_StopLocationTrackingSession) { _cached_decoder_for_StopLocationTrackingSession = $._decodeBitString; }
    return _cached_decoder_for_StopLocationTrackingSession(el);
}

let _cached_encoder_for_StopLocationTrackingSession: $.ASN1Encoder<StopLocationTrackingSession> | null = null;

/**
 * @summary Encodes a(n) StopLocationTrackingSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopLocationTrackingSession, encoded as an ASN.1 Element.
 */
export
function _encode_StopLocationTrackingSession (value: StopLocationTrackingSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopLocationTrackingSession) { _cached_encoder_for_StopLocationTrackingSession = $._encodeBitString; }
    return _cached_encoder_for_StopLocationTrackingSession(value, elGetter);
}


/* eslint-enable */
