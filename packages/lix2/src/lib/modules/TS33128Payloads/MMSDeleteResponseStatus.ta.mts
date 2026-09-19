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
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSDeleteResponseStatus {
    ok = 1,
    errorUnspecified = 2,
    errorServiceDenied = 3,
    errorMessageFormatCorrupt = 4,
    errorSendingAddressUnresolved = 5,
    errorMessageNotFound = 6,
    errorNetworkProblem = 7,
    errorContentNotAccepted = 8,
    errorUnsupportedMessage = 9,
    errorTransientFailure = 10,
    errorTransientSendingAddressUnresolved = 11,
    errorTransientMessageNotFound = 12,
    errorTransientNetworkProblem = 13,
    errorTransientPartialSuccess = 14,
    errorPermanentFailure = 15,
    errorPermanentServiceDenied = 16,
    errorPermanentMessageFormatCorrupt = 17,
    errorPermanentSendingAddressUnresolved = 18,
    errorPermanentMessageNotFound = 19,
    errorPermanentContentNotAccepted = 20,
    errorPermanentReplyChargingLimitationsNotMet = 21,
    errorPermanentReplyChargingRequestNotAccepted = 22,
    errorPermanentReplyChargingForwardingDenied = 23,
    errorPermanentReplyChargingNotSupported = 24,
    errorPermanentAddressHidingNotSupported = 25,
    errorPermanentLackOfPrepaid = 26,
}

/**
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSDeleteResponseStatus = _enum_for_MMSDeleteResponseStatus;

/**
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSDeleteResponseStatus = _enum_for_MMSDeleteResponseStatus;

/**
 * @summary MMSDeleteResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_ok: MMSDeleteResponseStatus = MMSDeleteResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok: MMSDeleteResponseStatus = MMSDeleteResponseStatus.ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnspecified: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorServiceDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageFormatCorrupt: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorNetworkProblem: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorContentNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnsupportedMessage: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorUnsupportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorUnsupportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientFailure: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientNetworkProblem: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientPartialSuccess: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentFailure: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentServiceDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentContentNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentLackOfPrepaid: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid: MMSDeleteResponseStatus = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSDeleteResponseStatus: $.ASN1Decoder<MMSDeleteResponseStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDeleteResponseStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSDeleteResponseStatus (el: _Element): MMSDeleteResponseStatus {
    if (!_cached_decoder_for_MMSDeleteResponseStatus) { _cached_decoder_for_MMSDeleteResponseStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSDeleteResponseStatus(el);
}

let _cached_encoder_for_MMSDeleteResponseStatus: $.ASN1Encoder<MMSDeleteResponseStatus> | null = null;

/**
 * @summary Encodes a(n) MMSDeleteResponseStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDeleteResponseStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSDeleteResponseStatus (value: MMSDeleteResponseStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSDeleteResponseStatus) { _cached_encoder_for_MMSDeleteResponseStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSDeleteResponseStatus(value, elGetter);
}


/* eslint-enable */
