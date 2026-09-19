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
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LocationEventType {
    direct = 1,
    changeOfServeCell = 2,
    uEPrescenceInAreaOfInterest = 3,
    stopChangeOfServeCell = 4,
    stopUEPresenceInAreaOfInterest = 5,
    cancelLocationReportingForTheUE = 6,
}

/**
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LocationEventType = _enum_for_LocationEventType;

/**
 * @summary LocationEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationEventType  ::=  ENUMERATED
 * {
 *     direct(1),
 *     changeOfServeCell(2),
 *     uEPrescenceInAreaOfInterest(3),
 *     stopChangeOfServeCell(4),
 *     stopUEPresenceInAreaOfInterest(5),
 *     cancelLocationReportingForTheUE(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const LocationEventType = _enum_for_LocationEventType;

/**
 * @summary LocationEventType_direct
 * @constant
 * @type {number}
 */
export
const LocationEventType_direct: LocationEventType = LocationEventType.direct; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary direct
 * @constant
 * @type {number}
 */
export
const direct: LocationEventType = LocationEventType.direct; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_changeOfServeCell
 * @constant
 * @type {number}
 */
export
const LocationEventType_changeOfServeCell: LocationEventType = LocationEventType.changeOfServeCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changeOfServeCell
 * @constant
 * @type {number}
 */
export
const changeOfServeCell: LocationEventType = LocationEventType.changeOfServeCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_uEPrescenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const LocationEventType_uEPrescenceInAreaOfInterest: LocationEventType = LocationEventType.uEPrescenceInAreaOfInterest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEPrescenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const uEPrescenceInAreaOfInterest: LocationEventType = LocationEventType.uEPrescenceInAreaOfInterest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_stopChangeOfServeCell
 * @constant
 * @type {number}
 */
export
const LocationEventType_stopChangeOfServeCell: LocationEventType = LocationEventType.stopChangeOfServeCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopChangeOfServeCell
 * @constant
 * @type {number}
 */
export
const stopChangeOfServeCell: LocationEventType = LocationEventType.stopChangeOfServeCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_stopUEPresenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const LocationEventType_stopUEPresenceInAreaOfInterest: LocationEventType = LocationEventType.stopUEPresenceInAreaOfInterest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopUEPresenceInAreaOfInterest
 * @constant
 * @type {number}
 */
export
const stopUEPresenceInAreaOfInterest: LocationEventType = LocationEventType.stopUEPresenceInAreaOfInterest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LocationEventType_cancelLocationReportingForTheUE
 * @constant
 * @type {number}
 */
export
const LocationEventType_cancelLocationReportingForTheUE: LocationEventType = LocationEventType.cancelLocationReportingForTheUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelLocationReportingForTheUE
 * @constant
 * @type {number}
 */
export
const cancelLocationReportingForTheUE: LocationEventType = LocationEventType.cancelLocationReportingForTheUE; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LocationEventType: $.ASN1Decoder<LocationEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationEventType (el: _Element): LocationEventType {
    if (!_cached_decoder_for_LocationEventType) { _cached_decoder_for_LocationEventType = $._decodeEnumerated; }
    return _cached_decoder_for_LocationEventType(el);
}

let _cached_encoder_for_LocationEventType: $.ASN1Encoder<LocationEventType> | null = null;

/**
 * @summary Encodes a(n) LocationEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationEventType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationEventType (value: LocationEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationEventType) { _cached_encoder_for_LocationEventType = $._encodeEnumerated; }
    return _cached_encoder_for_LocationEventType(value, elGetter);
}


/* eslint-enable */
