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
 * @summary StateIncompatibilityErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateIncompatibilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     invalidObjectState                 ( 2),
 *     invalidDeviceState                 (15),
 *     connectedCallExists                 (16),
 *     invalidActiveDeviceState             (17),
 *     invalidCalledDeviceState             (18),
 *     invalidCallingDeviceState             (19),
 *     invalidCallToParkDeviceState             (20),
 *     invalidDestinationDeviceState             (21),
 *     invalidDivertingDeviceState             (22),
 *     invalidHeldDeviceState                 (23),
 *     invalidParkToDeviceState             (24),
 *     invalidConnectionState                 (25),
 *     invalidActiveConnectionState             (26),
 *     invalidConnectionIDForActiveCall         ( 3),
 *     invalidHeldConnectionState             (27),
 *     noActiveCall                     ( 4),
 *     noCallToAnswer                     ( 8),
 *     noCallToClear                     ( 6),
 *     noCallToComplete                 ( 9),
 *     noConnectionToClear                 ( 7),
 *     noHeldCall                     ( 5),
 *     incorrectMsgState                 (28),
 *     beginningOfMsg                     (13),
 *     endOfMsg                     (12),
 *     msgSuspended                     (14),
 *     notAbleToPlay                     (10),
 *     notAbleToResume                 (11) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StateIncompatibilityErrors {
    generic = 1,
    invalidObjectState = 2,
    invalidDeviceState = 15,
    connectedCallExists = 16,
    invalidActiveDeviceState = 17,
    invalidCalledDeviceState = 18,
    invalidCallingDeviceState = 19,
    invalidCallToParkDeviceState = 20,
    invalidDestinationDeviceState = 21,
    invalidDivertingDeviceState = 22,
    invalidHeldDeviceState = 23,
    invalidParkToDeviceState = 24,
    invalidConnectionState = 25,
    invalidActiveConnectionState = 26,
    invalidConnectionIDForActiveCall = 3,
    invalidHeldConnectionState = 27,
    noActiveCall = 4,
    noCallToAnswer = 8,
    noCallToClear = 6,
    noCallToComplete = 9,
    noConnectionToClear = 7,
    noHeldCall = 5,
    incorrectMsgState = 28,
    beginningOfMsg = 13,
    endOfMsg = 12,
    msgSuspended = 14,
    notAbleToPlay = 10,
    notAbleToResume = 11,
}

/**
 * @summary StateIncompatibilityErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateIncompatibilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     invalidObjectState                 ( 2),
 *     invalidDeviceState                 (15),
 *     connectedCallExists                 (16),
 *     invalidActiveDeviceState             (17),
 *     invalidCalledDeviceState             (18),
 *     invalidCallingDeviceState             (19),
 *     invalidCallToParkDeviceState             (20),
 *     invalidDestinationDeviceState             (21),
 *     invalidDivertingDeviceState             (22),
 *     invalidHeldDeviceState                 (23),
 *     invalidParkToDeviceState             (24),
 *     invalidConnectionState                 (25),
 *     invalidActiveConnectionState             (26),
 *     invalidConnectionIDForActiveCall         ( 3),
 *     invalidHeldConnectionState             (27),
 *     noActiveCall                     ( 4),
 *     noCallToAnswer                     ( 8),
 *     noCallToClear                     ( 6),
 *     noCallToComplete                 ( 9),
 *     noConnectionToClear                 ( 7),
 *     noHeldCall                     ( 5),
 *     incorrectMsgState                 (28),
 *     beginningOfMsg                     (13),
 *     endOfMsg                     (12),
 *     msgSuspended                     (14),
 *     notAbleToPlay                     (10),
 *     notAbleToResume                 (11) }
 * ```
 * 
 * @enum {number}
 */
export
type StateIncompatibilityErrors = _enum_for_StateIncompatibilityErrors;

/**
 * @summary StateIncompatibilityErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateIncompatibilityErrors  ::=  ENUMERATED
 * {     generic                     ( 1),
 *     invalidObjectState                 ( 2),
 *     invalidDeviceState                 (15),
 *     connectedCallExists                 (16),
 *     invalidActiveDeviceState             (17),
 *     invalidCalledDeviceState             (18),
 *     invalidCallingDeviceState             (19),
 *     invalidCallToParkDeviceState             (20),
 *     invalidDestinationDeviceState             (21),
 *     invalidDivertingDeviceState             (22),
 *     invalidHeldDeviceState                 (23),
 *     invalidParkToDeviceState             (24),
 *     invalidConnectionState                 (25),
 *     invalidActiveConnectionState             (26),
 *     invalidConnectionIDForActiveCall         ( 3),
 *     invalidHeldConnectionState             (27),
 *     noActiveCall                     ( 4),
 *     noCallToAnswer                     ( 8),
 *     noCallToClear                     ( 6),
 *     noCallToComplete                 ( 9),
 *     noConnectionToClear                 ( 7),
 *     noHeldCall                     ( 5),
 *     incorrectMsgState                 (28),
 *     beginningOfMsg                     (13),
 *     endOfMsg                     (12),
 *     msgSuspended                     (14),
 *     notAbleToPlay                     (10),
 *     notAbleToResume                 (11) }
 * ```
 * 
 * @enum {number}
 */
export
const StateIncompatibilityErrors = _enum_for_StateIncompatibilityErrors;

/**
 * @summary StateIncompatibilityErrors_generic
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_generic: StateIncompatibilityErrors = StateIncompatibilityErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: StateIncompatibilityErrors = StateIncompatibilityErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidObjectState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidObjectState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidObjectState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidObjectState
 * @constant
 * @type {number}
 */
export
const invalidObjectState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidObjectState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDeviceState
 * @constant
 * @type {number}
 */
export
const invalidDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_connectedCallExists
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_connectedCallExists: StateIncompatibilityErrors = StateIncompatibilityErrors.connectedCallExists; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedCallExists
 * @constant
 * @type {number}
 */
export
const connectedCallExists: StateIncompatibilityErrors = StateIncompatibilityErrors.connectedCallExists; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidActiveDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidActiveDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidActiveDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveDeviceState
 * @constant
 * @type {number}
 */
export
const invalidActiveDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidActiveDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidCalledDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidCalledDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCalledDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCalledDeviceState
 * @constant
 * @type {number}
 */
export
const invalidCalledDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCalledDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidCallingDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidCallingDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCallingDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallingDeviceState
 * @constant
 * @type {number}
 */
export
const invalidCallingDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCallingDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidCallToParkDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidCallToParkDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCallToParkDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToParkDeviceState
 * @constant
 * @type {number}
 */
export
const invalidCallToParkDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidCallToParkDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidDestinationDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidDestinationDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDestinationDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDeviceState
 * @constant
 * @type {number}
 */
export
const invalidDestinationDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDestinationDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidDivertingDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidDivertingDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDivertingDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDivertingDeviceState
 * @constant
 * @type {number}
 */
export
const invalidDivertingDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidDivertingDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidHeldDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidHeldDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidHeldDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldDeviceState
 * @constant
 * @type {number}
 */
export
const invalidHeldDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidHeldDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidParkToDeviceState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidParkToDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidParkToDeviceState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParkToDeviceState
 * @constant
 * @type {number}
 */
export
const invalidParkToDeviceState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidParkToDeviceState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidConnectionState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionState
 * @constant
 * @type {number}
 */
export
const invalidConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidActiveConnectionState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidActiveConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidActiveConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveConnectionState
 * @constant
 * @type {number}
 */
export
const invalidActiveConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidActiveConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidConnectionIDForActiveCall
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidConnectionIDForActiveCall: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidConnectionIDForActiveCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionIDForActiveCall
 * @constant
 * @type {number}
 */
export
const invalidConnectionIDForActiveCall: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidConnectionIDForActiveCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_invalidHeldConnectionState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_invalidHeldConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidHeldConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldConnectionState
 * @constant
 * @type {number}
 */
export
const invalidHeldConnectionState: StateIncompatibilityErrors = StateIncompatibilityErrors.invalidHeldConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noActiveCall
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noActiveCall: StateIncompatibilityErrors = StateIncompatibilityErrors.noActiveCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noActiveCall
 * @constant
 * @type {number}
 */
export
const noActiveCall: StateIncompatibilityErrors = StateIncompatibilityErrors.noActiveCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noCallToAnswer
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noCallToAnswer: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCallToAnswer
 * @constant
 * @type {number}
 */
export
const noCallToAnswer: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noCallToClear
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noCallToClear: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToClear; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCallToClear
 * @constant
 * @type {number}
 */
export
const noCallToClear: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToClear; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noCallToComplete
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noCallToComplete: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCallToComplete
 * @constant
 * @type {number}
 */
export
const noCallToComplete: StateIncompatibilityErrors = StateIncompatibilityErrors.noCallToComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noConnectionToClear
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noConnectionToClear: StateIncompatibilityErrors = StateIncompatibilityErrors.noConnectionToClear; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noConnectionToClear
 * @constant
 * @type {number}
 */
export
const noConnectionToClear: StateIncompatibilityErrors = StateIncompatibilityErrors.noConnectionToClear; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_noHeldCall
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_noHeldCall: StateIncompatibilityErrors = StateIncompatibilityErrors.noHeldCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noHeldCall
 * @constant
 * @type {number}
 */
export
const noHeldCall: StateIncompatibilityErrors = StateIncompatibilityErrors.noHeldCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_incorrectMsgState
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_incorrectMsgState: StateIncompatibilityErrors = StateIncompatibilityErrors.incorrectMsgState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incorrectMsgState
 * @constant
 * @type {number}
 */
export
const incorrectMsgState: StateIncompatibilityErrors = StateIncompatibilityErrors.incorrectMsgState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_beginningOfMsg
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_beginningOfMsg: StateIncompatibilityErrors = StateIncompatibilityErrors.beginningOfMsg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary beginningOfMsg
 * @constant
 * @type {number}
 */
export
const beginningOfMsg: StateIncompatibilityErrors = StateIncompatibilityErrors.beginningOfMsg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_endOfMsg
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_endOfMsg: StateIncompatibilityErrors = StateIncompatibilityErrors.endOfMsg; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMsg
 * @constant
 * @type {number}
 */
export
const endOfMsg: StateIncompatibilityErrors = StateIncompatibilityErrors.endOfMsg; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_msgSuspended
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_msgSuspended: StateIncompatibilityErrors = StateIncompatibilityErrors.msgSuspended; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msgSuspended
 * @constant
 * @type {number}
 */
export
const msgSuspended: StateIncompatibilityErrors = StateIncompatibilityErrors.msgSuspended; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_notAbleToPlay
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_notAbleToPlay: StateIncompatibilityErrors = StateIncompatibilityErrors.notAbleToPlay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAbleToPlay
 * @constant
 * @type {number}
 */
export
const notAbleToPlay: StateIncompatibilityErrors = StateIncompatibilityErrors.notAbleToPlay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StateIncompatibilityErrors_notAbleToResume
 * @constant
 * @type {number}
 */
export
const StateIncompatibilityErrors_notAbleToResume: StateIncompatibilityErrors = StateIncompatibilityErrors.notAbleToResume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAbleToResume
 * @constant
 * @type {number}
 */
export
const notAbleToResume: StateIncompatibilityErrors = StateIncompatibilityErrors.notAbleToResume; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_StateIncompatibilityErrors: $.ASN1Decoder<StateIncompatibilityErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateIncompatibilityErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StateIncompatibilityErrors (el: _Element): StateIncompatibilityErrors {
    if (!_cached_decoder_for_StateIncompatibilityErrors) { _cached_decoder_for_StateIncompatibilityErrors = $._decodeEnumerated; }
    return _cached_decoder_for_StateIncompatibilityErrors(el);
}

let _cached_encoder_for_StateIncompatibilityErrors: $.ASN1Encoder<StateIncompatibilityErrors> | null = null;

/**
 * @summary Encodes a(n) StateIncompatibilityErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateIncompatibilityErrors, encoded as an ASN.1 Element.
 */
export
function _encode_StateIncompatibilityErrors (value: StateIncompatibilityErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StateIncompatibilityErrors) { _cached_encoder_for_StateIncompatibilityErrors = $._encodeEnumerated; }
    return _cached_encoder_for_StateIncompatibilityErrors(value, elGetter);
}


/* eslint-enable */
