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
 * @summary LocationServices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationServices  ::=  BIT STRING
 * {    getLocationInformation                    ( 0),
 *     setLocationInformation                    ( 1),
 *     locationTrackkingSessionResumed                ( 2),
 *     locationTrackkingSessionSuspended            ( 3),
 *     resumeLocationTrackingSession                ( 4),
 *     locationInformationReport                ( 5),
 *     startLocationTrackingSession                ( 6),
 *     stopLocationTrackingSession                ( 7),
 *     suspendLocationTrackingCapabilities            ( 8),
 *     locationSessionInfo                    ( 9) }
 * ```
 */
export
type LocationServices = BIT_STRING;

/**
 * @summary LocationServices_getLocationInformation
 * @constant
 */
export
const LocationServices_getLocationInformation: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary getLocationInformation
 * @constant
 */
export
const getLocationInformation: number = LocationServices_getLocationInformation; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_setLocationInformation
 * @constant
 */
export
const LocationServices_setLocationInformation: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary setLocationInformation
 * @constant
 */
export
const setLocationInformation: number = LocationServices_setLocationInformation; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationTrackkingSessionResumed
 * @constant
 */
export
const LocationServices_locationTrackkingSessionResumed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary locationTrackkingSessionResumed
 * @constant
 */
export
const locationTrackkingSessionResumed: number = LocationServices_locationTrackkingSessionResumed; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationTrackkingSessionSuspended
 * @constant
 */
export
const LocationServices_locationTrackkingSessionSuspended: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary locationTrackkingSessionSuspended
 * @constant
 */
export
const locationTrackkingSessionSuspended: number = LocationServices_locationTrackkingSessionSuspended; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_resumeLocationTrackingSession
 * @constant
 */
export
const LocationServices_resumeLocationTrackingSession: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary resumeLocationTrackingSession
 * @constant
 */
export
const resumeLocationTrackingSession: number = LocationServices_resumeLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationInformationReport
 * @constant
 */
export
const LocationServices_locationInformationReport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary locationInformationReport
 * @constant
 */
export
const locationInformationReport: number = LocationServices_locationInformationReport; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_startLocationTrackingSession
 * @constant
 */
export
const LocationServices_startLocationTrackingSession: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary startLocationTrackingSession
 * @constant
 */
export
const startLocationTrackingSession: number = LocationServices_startLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_stopLocationTrackingSession
 * @constant
 */
export
const LocationServices_stopLocationTrackingSession: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary stopLocationTrackingSession
 * @constant
 */
export
const stopLocationTrackingSession: number = LocationServices_stopLocationTrackingSession; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_suspendLocationTrackingCapabilities
 * @constant
 */
export
const LocationServices_suspendLocationTrackingCapabilities: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary suspendLocationTrackingCapabilities
 * @constant
 */
export
const suspendLocationTrackingCapabilities: number = LocationServices_suspendLocationTrackingCapabilities; /* SHORT_NAMED_BIT */

/**
 * @summary LocationServices_locationSessionInfo
 * @constant
 */
export
const LocationServices_locationSessionInfo: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary locationSessionInfo
 * @constant
 */
export
const locationSessionInfo: number = LocationServices_locationSessionInfo; /* SHORT_NAMED_BIT */

let _cached_decoder_for_LocationServices: $.ASN1Decoder<LocationServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationServices (el: _Element): LocationServices {
    if (!_cached_decoder_for_LocationServices) { _cached_decoder_for_LocationServices = $._decodeBitString; }
    return _cached_decoder_for_LocationServices(el);
}

let _cached_encoder_for_LocationServices: $.ASN1Encoder<LocationServices> | null = null;

/**
 * @summary Encodes a(n) LocationServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationServices, encoded as an ASN.1 Element.
 */
export
function _encode_LocationServices (value: LocationServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationServices) { _cached_encoder_for_LocationServices = $._encodeBitString; }
    return _cached_encoder_for_LocationServices(value, elGetter);
}


/* eslint-enable */
