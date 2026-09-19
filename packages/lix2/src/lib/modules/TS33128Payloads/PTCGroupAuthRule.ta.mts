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
 * @summary PTCGroupAuthRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCGroupAuthRule {
    allowInitiatingPTCSession = 1,
    blockInitiatingPTCSession = 2,
    allowJoiningPTCSession = 3,
    blockJoiningPTCSession = 4,
    allowAddParticipants = 5,
    blockAddParticipants = 6,
    allowSubscriptionPTCSessionState = 7,
    blockSubscriptionPTCSessionState = 8,
    allowAnonymity = 9,
    forbidAnonymity = 10,
}

/**
 * @summary PTCGroupAuthRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCGroupAuthRule = _enum_for_PTCGroupAuthRule;

/**
 * @summary PTCGroupAuthRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAuthRule   ::=  ENUMERATED
 * {
 *     allowInitiatingPTCSession(1),
 *     blockInitiatingPTCSession(2),
 *     allowJoiningPTCSession(3),
 *     blockJoiningPTCSession(4),
 *     allowAddParticipants(5),
 *     blockAddParticipants(6),
 *     allowSubscriptionPTCSessionState(7),
 *     blockSubscriptionPTCSessionState(8),
 *     allowAnonymity(9),
 *     forbidAnonymity(10)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCGroupAuthRule = _enum_for_PTCGroupAuthRule;

/**
 * @summary PTCGroupAuthRule_allowInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowInitiatingPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.allowInitiatingPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const allowInitiatingPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.allowInitiatingPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockInitiatingPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.blockInitiatingPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockInitiatingPTCSession
 * @constant
 * @type {number}
 */
export
const blockInitiatingPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.blockInitiatingPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowJoiningPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.allowJoiningPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const allowJoiningPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.allowJoiningPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockJoiningPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.blockJoiningPTCSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockJoiningPTCSession
 * @constant
 * @type {number}
 */
export
const blockJoiningPTCSession: PTCGroupAuthRule = PTCGroupAuthRule.blockJoiningPTCSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowAddParticipants
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowAddParticipants: PTCGroupAuthRule = PTCGroupAuthRule.allowAddParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAddParticipants
 * @constant
 * @type {number}
 */
export
const allowAddParticipants: PTCGroupAuthRule = PTCGroupAuthRule.allowAddParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockAddParticipants
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockAddParticipants: PTCGroupAuthRule = PTCGroupAuthRule.blockAddParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockAddParticipants
 * @constant
 * @type {number}
 */
export
const blockAddParticipants: PTCGroupAuthRule = PTCGroupAuthRule.blockAddParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowSubscriptionPTCSessionState: PTCGroupAuthRule = PTCGroupAuthRule.allowSubscriptionPTCSessionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const allowSubscriptionPTCSessionState: PTCGroupAuthRule = PTCGroupAuthRule.allowSubscriptionPTCSessionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_blockSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_blockSubscriptionPTCSessionState: PTCGroupAuthRule = PTCGroupAuthRule.blockSubscriptionPTCSessionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockSubscriptionPTCSessionState
 * @constant
 * @type {number}
 */
export
const blockSubscriptionPTCSessionState: PTCGroupAuthRule = PTCGroupAuthRule.blockSubscriptionPTCSessionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_allowAnonymity
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_allowAnonymity: PTCGroupAuthRule = PTCGroupAuthRule.allowAnonymity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAnonymity
 * @constant
 * @type {number}
 */
export
const allowAnonymity: PTCGroupAuthRule = PTCGroupAuthRule.allowAnonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCGroupAuthRule_forbidAnonymity
 * @constant
 * @type {number}
 */
export
const PTCGroupAuthRule_forbidAnonymity: PTCGroupAuthRule = PTCGroupAuthRule.forbidAnonymity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forbidAnonymity
 * @constant
 * @type {number}
 */
export
const forbidAnonymity: PTCGroupAuthRule = PTCGroupAuthRule.forbidAnonymity; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCGroupAuthRule: $.ASN1Decoder<PTCGroupAuthRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCGroupAuthRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCGroupAuthRule (el: _Element): PTCGroupAuthRule {
    if (!_cached_decoder_for_PTCGroupAuthRule) { _cached_decoder_for_PTCGroupAuthRule = $._decodeEnumerated; }
    return _cached_decoder_for_PTCGroupAuthRule(el);
}

let _cached_encoder_for_PTCGroupAuthRule: $.ASN1Encoder<PTCGroupAuthRule> | null = null;

/**
 * @summary Encodes a(n) PTCGroupAuthRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCGroupAuthRule, encoded as an ASN.1 Element.
 */
export
function _encode_PTCGroupAuthRule (value: PTCGroupAuthRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCGroupAuthRule) { _cached_encoder_for_PTCGroupAuthRule = $._encodeEnumerated; }
    return _cached_encoder_for_PTCGroupAuthRule(value, elGetter);
}


/* eslint-enable */
