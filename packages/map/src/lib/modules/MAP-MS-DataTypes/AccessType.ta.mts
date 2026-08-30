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
enum _enum_for_AccessType {
    call = 0,
    emergencyCall = 1,
    locationUpdating = 2,
    supplementaryService = 3,
    shortMessage = 4,
    gprsAttach = 5,
    routingAreaUpdating = 6,
    serviceRequest = 7,
    pdpContextActivation = 8,
    pdpContextDeactivation = 9,
    gprsDetach = 10,
}

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED {
 *     call (0),
 *     emergencyCall (1),
 *     locationUpdating (2),
 *     supplementaryService (3),
 *     shortMessage (4),
 *     gprsAttach (5),
 *     routingAreaUpdating (6),
 *     serviceRequest (7),
 *     pdpContextActivation (8),
 *     pdpContextDeactivation (9),
 *     ...,
 *     gprsDetach (10)}
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType | ENUMERATED;

/**
 * @summary AccessType_call
 * @constant
 * @type {number}
 */
export
const AccessType_call: AccessType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call
 * @constant
 * @type {number}
 */
export
const call: AccessType = AccessType_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_emergencyCall
 * @constant
 * @type {number}
 */
export
const AccessType_emergencyCall: AccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emergencyCall
 * @constant
 * @type {number}
 */
export
const emergencyCall: AccessType = AccessType_emergencyCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_locationUpdating
 * @constant
 * @type {number}
 */
export
const AccessType_locationUpdating: AccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationUpdating
 * @constant
 * @type {number}
 */
export
const locationUpdating: AccessType = AccessType_locationUpdating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_supplementaryService
 * @constant
 * @type {number}
 */
export
const AccessType_supplementaryService: AccessType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementaryService
 * @constant
 * @type {number}
 */
export
const supplementaryService: AccessType = AccessType_supplementaryService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_shortMessage
 * @constant
 * @type {number}
 */
export
const AccessType_shortMessage: AccessType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shortMessage
 * @constant
 * @type {number}
 */
export
const shortMessage: AccessType = AccessType_shortMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_gprsAttach
 * @constant
 * @type {number}
 */
export
const AccessType_gprsAttach: AccessType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprsAttach
 * @constant
 * @type {number}
 */
export
const gprsAttach: AccessType = AccessType_gprsAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_routingAreaUpdating
 * @constant
 * @type {number}
 */
export
const AccessType_routingAreaUpdating: AccessType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routingAreaUpdating
 * @constant
 * @type {number}
 */
export
const routingAreaUpdating: AccessType = AccessType_routingAreaUpdating; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_serviceRequest
 * @constant
 * @type {number}
 */
export
const AccessType_serviceRequest: AccessType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceRequest
 * @constant
 * @type {number}
 */
export
const serviceRequest: AccessType = AccessType_serviceRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_pdpContextActivation
 * @constant
 * @type {number}
 */
export
const AccessType_pdpContextActivation: AccessType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdpContextActivation
 * @constant
 * @type {number}
 */
export
const pdpContextActivation: AccessType = AccessType_pdpContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_pdpContextDeactivation
 * @constant
 * @type {number}
 */
export
const AccessType_pdpContextDeactivation: AccessType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pdpContextDeactivation
 * @constant
 * @type {number}
 */
export
const pdpContextDeactivation: AccessType = AccessType_pdpContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_gprsDetach
 * @constant
 * @type {number}
 */
export
const AccessType_gprsDetach: AccessType = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gprsDetach
 * @constant
 * @type {number}
 */
export
const gprsDetach: AccessType = AccessType_gprsDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AccessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AccessType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AccessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessType, encoded as an ASN.1 Element.
 */
export const _encode_AccessType = $._encodeEnumerated;


/* eslint-enable */
