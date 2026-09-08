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
 * @summary LocationTrackingSessionSuspended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationTrackingSessionSuspended  ::=  BIT STRING
 * {    locReason                ( 0),
 *     locationInfoList            ( 1),
 *     privateData                ( 2),
 *     privateDataInAck            ( 3) }
 * ```
 */
export
type LocationTrackingSessionSuspended = BIT_STRING;

/**
 * @summary LocationTrackingSessionSuspended_locReason
 * @constant
 */
export
const LocationTrackingSessionSuspended_locReason: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary locReason
 * @constant
 */
export
const locReason: number = LocationTrackingSessionSuspended_locReason; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_locationInfoList
 * @constant
 */
export
const LocationTrackingSessionSuspended_locationInfoList: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = LocationTrackingSessionSuspended_locationInfoList; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_privateData
 * @constant
 */
export
const LocationTrackingSessionSuspended_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = LocationTrackingSessionSuspended_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary LocationTrackingSessionSuspended_privateDataInAck
 * @constant
 */
export
const LocationTrackingSessionSuspended_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = LocationTrackingSessionSuspended_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationTrackingSessionSuspended: $.ASN1Decoder<LocationTrackingSessionSuspended> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationTrackingSessionSuspended
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationTrackingSessionSuspended (el: _Element): LocationTrackingSessionSuspended {
    if (!_cached_decoder_for_LocationTrackingSessionSuspended) { _cached_decoder_for_LocationTrackingSessionSuspended = $._decodeBitString; }
    return _cached_decoder_for_LocationTrackingSessionSuspended(el);
}

let _cached_encoder_for_LocationTrackingSessionSuspended: $.ASN1Encoder<LocationTrackingSessionSuspended> | null = null;

/**
 * @summary Encodes a(n) LocationTrackingSessionSuspended into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationTrackingSessionSuspended, encoded as an ASN.1 Element.
 */
export
function _encode_LocationTrackingSessionSuspended (value: LocationTrackingSessionSuspended, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationTrackingSessionSuspended) { _cached_encoder_for_LocationTrackingSessionSuspended = $._encodeBitString; }
    return _cached_encoder_for_LocationTrackingSessionSuspended(value, elGetter);
}


/* eslint-enable */
