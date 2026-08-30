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
enum _enum_for_AbsentSubscriberReason {
    imsiDetach = 0,
    restrictedArea = 1,
    noPageResponse = 2,
    purgedMS = 3,
    mtRoamingRetry = 4,
    busySubscriber = 5,
}

/**
 * @summary AbsentSubscriberReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsentSubscriberReason  ::=  ENUMERATED {
 *     imsiDetach (0),
 *     restrictedArea (1),
 *     noPageResponse (2),
 *     ... ,
 *     purgedMS (3),
 *     mtRoamingRetry (4),
 *     busySubscriber (5)}
 * ```
 * 
 * @enum {number}
 */
export
type AbsentSubscriberReason = _enum_for_AbsentSubscriberReason | ENUMERATED;

/**
 * @summary AbsentSubscriberReason_imsiDetach
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_imsiDetach: AbsentSubscriberReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiDetach
 * @constant
 * @type {number}
 */
export
const imsiDetach: AbsentSubscriberReason = AbsentSubscriberReason_imsiDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_restrictedArea
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_restrictedArea: AbsentSubscriberReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedArea
 * @constant
 * @type {number}
 */
export
const restrictedArea: AbsentSubscriberReason = AbsentSubscriberReason_restrictedArea; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_noPageResponse
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_noPageResponse: AbsentSubscriberReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPageResponse
 * @constant
 * @type {number}
 */
export
const noPageResponse: AbsentSubscriberReason = AbsentSubscriberReason_noPageResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_purgedMS
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_purgedMS: AbsentSubscriberReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary purgedMS
 * @constant
 * @type {number}
 */
export
const purgedMS: AbsentSubscriberReason = AbsentSubscriberReason_purgedMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_mtRoamingRetry
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_mtRoamingRetry: AbsentSubscriberReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mtRoamingRetry
 * @constant
 * @type {number}
 */
export
const mtRoamingRetry: AbsentSubscriberReason = AbsentSubscriberReason_mtRoamingRetry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_busySubscriber
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_busySubscriber: AbsentSubscriberReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busySubscriber
 * @constant
 * @type {number}
 */
export
const busySubscriber: AbsentSubscriberReason = AbsentSubscriberReason_busySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AbsentSubscriberReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AbsentSubscriberReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AbsentSubscriberReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsentSubscriberReason, encoded as an ASN.1 Element.
 */
export const _encode_AbsentSubscriberReason = $._encodeEnumerated;


/* eslint-enable */
