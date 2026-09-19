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
 * @summary MMSResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
enum _enum_for_MMSResponseStatus {
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
 * @summary MMSResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
type MMSResponseStatus = _enum_for_MMSResponseStatus;

/**
 * @summary MMSResponseStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
const MMSResponseStatus = _enum_for_MMSResponseStatus;

/**
 * @summary MMSResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_ok: MMSResponseStatus = MMSResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok: MMSResponseStatus = MMSResponseStatus.ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnspecified: MMSResponseStatus = MMSResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified: MMSResponseStatus = MMSResponseStatus.errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorServiceDenied: MMSResponseStatus = MMSResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied: MMSResponseStatus = MMSResponseStatus.errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageFormatCorrupt: MMSResponseStatus = MMSResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt: MMSResponseStatus = MMSResponseStatus.errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorNetworkProblem: MMSResponseStatus = MMSResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem: MMSResponseStatus = MMSResponseStatus.errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorContentNotAccepted: MMSResponseStatus = MMSResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted: MMSResponseStatus = MMSResponseStatus.errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnsupportedMessage: MMSResponseStatus = MMSResponseStatus.errorUnsupportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage: MMSResponseStatus = MMSResponseStatus.errorUnsupportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientFailure: MMSResponseStatus = MMSResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: MMSResponseStatus = MMSResponseStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientNetworkProblem: MMSResponseStatus = MMSResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: MMSResponseStatus = MMSResponseStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientPartialSuccess: MMSResponseStatus = MMSResponseStatus.errorTransientPartialSuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess: MMSResponseStatus = MMSResponseStatus.errorTransientPartialSuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentFailure: MMSResponseStatus = MMSResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: MMSResponseStatus = MMSResponseStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentServiceDenied: MMSResponseStatus = MMSResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: MMSResponseStatus = MMSResponseStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageFormatCorrupt: MMSResponseStatus = MMSResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: MMSResponseStatus = MMSResponseStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved: MMSResponseStatus = MMSResponseStatus.errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: MMSResponseStatus = MMSResponseStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentContentNotAccepted: MMSResponseStatus = MMSResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted: MMSResponseStatus = MMSResponseStatus.errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingForwardingDenied: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingNotSupported: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported: MMSResponseStatus = MMSResponseStatus.errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentAddressHidingNotSupported: MMSResponseStatus = MMSResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported: MMSResponseStatus = MMSResponseStatus.errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentLackOfPrepaid: MMSResponseStatus = MMSResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid: MMSResponseStatus = MMSResponseStatus.errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSResponseStatus: $.ASN1Decoder<MMSResponseStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSResponseStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSResponseStatus (el: _Element): MMSResponseStatus {
    if (!_cached_decoder_for_MMSResponseStatus) { _cached_decoder_for_MMSResponseStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSResponseStatus(el);
}

let _cached_encoder_for_MMSResponseStatus: $.ASN1Encoder<MMSResponseStatus> | null = null;

/**
 * @summary Encodes a(n) MMSResponseStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSResponseStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSResponseStatus (value: MMSResponseStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSResponseStatus) { _cached_encoder_for_MMSResponseStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSResponseStatus(value, elGetter);
}


/* eslint-enable */
