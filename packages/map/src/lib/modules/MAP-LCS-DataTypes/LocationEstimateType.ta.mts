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



export
enum _enum_for_LocationEstimateType {
    currentLocation = 0,
    currentOrLastKnownLocation = 1,
    initialLocation = 2,
    activateDeferredLocation = 3,
    cancelDeferredLocation = 4,
    notificationVerificationOnly = 5,
}

/**
 * @summary LocationEstimateType
 * @description
 *
 * Unrecognized values in ProvideSubscriberLocation-Arg: reject with unexpected
 * data value (3GPP TS 29.002 V19.1.0 clauses 7.6.11.12 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEstimateType  ::=  ENUMERATED {
 *     currentLocation    (0),
 *     currentOrLastKnownLocation    (1),
 *     initialLocation    (2),
 *     ...,
 *     activateDeferredLocation    (3),
 *     cancelDeferredLocation    (4) ,
 *     notificationVerificationOnly    (5) }
 * ```
 * 
 * @enum {number}
 */
export
type LocationEstimateType = _enum_for_LocationEstimateType | ENUMERATED;

/**
 * @summary LocationEstimateType_currentLocation
 * @description
 *
 * `currentLocation (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_currentLocation: LocationEstimateType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentLocation
 * @description
 *
 * `currentLocation (0)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const currentLocation: LocationEstimateType = LocationEstimateType_currentLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEstimateType_currentOrLastKnownLocation
 * @description
 *
 * `currentOrLastKnownLocation (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_currentOrLastKnownLocation: LocationEstimateType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary currentOrLastKnownLocation
 * @description
 *
 * `currentOrLastKnownLocation (1)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const currentOrLastKnownLocation: LocationEstimateType = LocationEstimateType_currentOrLastKnownLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEstimateType_initialLocation
 * @description
 *
 * `initialLocation (2)` emergency services (3GPP TS 29.002 V19.1.0 clause
 * 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_initialLocation: LocationEstimateType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialLocation
 * @description
 *
 * `initialLocation (2)` emergency services (3GPP TS 29.002 V19.1.0 clause
 * 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const initialLocation: LocationEstimateType = LocationEstimateType_initialLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEstimateType_activateDeferredLocation
 * @description
 *
 * `activateDeferredLocation (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_activateDeferredLocation: LocationEstimateType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDeferredLocation
 * @description
 *
 * `activateDeferredLocation (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const activateDeferredLocation: LocationEstimateType = LocationEstimateType_activateDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEstimateType_cancelDeferredLocation
 * @description
 *
 * `cancelDeferredLocation (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_cancelDeferredLocation: LocationEstimateType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelDeferredLocation
 * @description
 *
 * `cancelDeferredLocation (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const cancelDeferredLocation: LocationEstimateType = LocationEstimateType_cancelDeferredLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEstimateType_notificationVerificationOnly
 * @description
 *
 * `notificationVerificationOnly (5)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const LocationEstimateType_notificationVerificationOnly: LocationEstimateType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationVerificationOnly
 * @description
 *
 * `notificationVerificationOnly (5)` (3GPP TS 29.002 V19.1.0 clause 7.6.11.12).
 *
 * @constant
 * @type {number}
 */
export
const notificationVerificationOnly: LocationEstimateType = LocationEstimateType_notificationVerificationOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LocationEstimateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LocationEstimateType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LocationEstimateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationEstimateType, encoded as an ASN.1 Element.
 */
export const _encode_LocationEstimateType = $._encodeEnumerated;


/* eslint-enable */
