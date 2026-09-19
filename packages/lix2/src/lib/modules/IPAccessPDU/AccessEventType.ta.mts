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
enum _enum_for_AccessEventType {
    accessAttempt = 0,
    accessAccept = 1,
    accessReject = 2,
    accessFailed = 3,
    sessionStart = 4,
    sessionEnd = 5,
    interimUpdate = 6,
    startOfInterceptionWithSessionActive = 7,
    accessEnd = 8,
    endOfInterceptionWithSessionActive = 9,
    unknown = 10,
}

/**
 * @summary AccessEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessEventType  ::=  ENUMERATED
 * {
 *     accessAttempt(0),
 *         -- A target requests access to the IAS
 *     accessAccept(1),
 *         -- IAS access is granted to the target, the session begins
 *     accessReject(2),
 *         -- IAS access is refused to the target
 *     accessFailed(3),
 *         -- The accessAttempt timed-out or failed otherwise
 *     sessionStart(4),
 *         -- A target starts using the IAS; not in use anymore from version 4(4)
 *     sessionEnd(5),
 *         -- A target stops using the IAS; not in use anymore from version 4(4)
 *     interimUpdate(6),
 *         -- Intermediate status report on service status or usage
 *     ...,
 *     startOfInterceptionWithSessionActive(7),
 *         -- LI is started on a target who already has an active session
 *     accessEnd(8),
 *         -- A target stops using the IAS, the session ends
 *     endOfInterceptionWithSessionActive(9),
 *         -- LI is ended on a target who still has an active session
 *     unknown(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessEventType = _enum_for_AccessEventType | ENUMERATED;

/**
 * @summary AccessEventType_accessAttempt
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessAttempt: AccessEventType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessAttempt
 * @constant
 * @type {number}
 */
export
const accessAttempt: AccessEventType = AccessEventType_accessAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessAccept
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessAccept: AccessEventType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessAccept
 * @constant
 * @type {number}
 */
export
const accessAccept: AccessEventType = AccessEventType_accessAccept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessReject
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessReject: AccessEventType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessReject
 * @constant
 * @type {number}
 */
export
const accessReject: AccessEventType = AccessEventType_accessReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessFailed
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessFailed: AccessEventType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessFailed
 * @constant
 * @type {number}
 */
export
const accessFailed: AccessEventType = AccessEventType_accessFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_sessionStart
 * @constant
 * @type {number}
 */
export
const AccessEventType_sessionStart: AccessEventType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionStart
 * @constant
 * @type {number}
 */
export
const sessionStart: AccessEventType = AccessEventType_sessionStart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_sessionEnd
 * @constant
 * @type {number}
 */
export
const AccessEventType_sessionEnd: AccessEventType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionEnd
 * @constant
 * @type {number}
 */
export
const sessionEnd: AccessEventType = AccessEventType_sessionEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_interimUpdate
 * @constant
 * @type {number}
 */
export
const AccessEventType_interimUpdate: AccessEventType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interimUpdate
 * @constant
 * @type {number}
 */
export
const interimUpdate: AccessEventType = AccessEventType_interimUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_startOfInterceptionWithSessionActive
 * @constant
 * @type {number}
 */
export
const AccessEventType_startOfInterceptionWithSessionActive: AccessEventType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithSessionActive
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithSessionActive: AccessEventType = AccessEventType_startOfInterceptionWithSessionActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_accessEnd
 * @constant
 * @type {number}
 */
export
const AccessEventType_accessEnd: AccessEventType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accessEnd
 * @constant
 * @type {number}
 */
export
const accessEnd: AccessEventType = AccessEventType_accessEnd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_endOfInterceptionWithSessionActive
 * @constant
 * @type {number}
 */
export
const AccessEventType_endOfInterceptionWithSessionActive: AccessEventType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfInterceptionWithSessionActive
 * @constant
 * @type {number}
 */
export
const endOfInterceptionWithSessionActive: AccessEventType = AccessEventType_endOfInterceptionWithSessionActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessEventType_unknown
 * @constant
 * @type {number}
 */
export
const AccessEventType_unknown: AccessEventType = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AccessEventType = AccessEventType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AccessEventType: $.ASN1Decoder<AccessEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessEventType (el: _Element): AccessEventType {
    if (!_cached_decoder_for_AccessEventType) { _cached_decoder_for_AccessEventType = $._decodeEnumerated; }
    return _cached_decoder_for_AccessEventType(el);
}

let _cached_encoder_for_AccessEventType: $.ASN1Encoder<AccessEventType> | null = null;

/**
 * @summary Encodes a(n) AccessEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessEventType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessEventType (value: AccessEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessEventType) { _cached_encoder_for_AccessEventType = $._encodeEnumerated; }
    return _cached_encoder_for_AccessEventType(value, elGetter);
}


/* eslint-enable */
