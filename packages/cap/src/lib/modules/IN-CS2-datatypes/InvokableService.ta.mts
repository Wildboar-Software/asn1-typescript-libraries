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
 * @summary InvokableService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokableService  ::=  ENUMERATED {
 *   callingLineIdentificationRestriction(1),
 *   connectedLineIdentificationRestriction(2), callWaiting(3), callHold(4),
 *   reverseCharging(5), explicitCallTransfer(6),
 *   callCompletionOnBusySubscriber(7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_InvokableService {
    callingLineIdentificationRestriction = 1,
    connectedLineIdentificationRestriction = 2,
    callWaiting = 3,
    callHold = 4,
    reverseCharging = 5,
    explicitCallTransfer = 6,
    callCompletionOnBusySubscriber = 7,
}

/**
 * @summary InvokableService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokableService  ::=  ENUMERATED {
 *   callingLineIdentificationRestriction(1),
 *   connectedLineIdentificationRestriction(2), callWaiting(3), callHold(4),
 *   reverseCharging(5), explicitCallTransfer(6),
 *   callCompletionOnBusySubscriber(7)}
 * ```
 * 
 * @enum {number}
 */
export
type InvokableService = _enum_for_InvokableService;

/**
 * @summary InvokableService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokableService  ::=  ENUMERATED {
 *   callingLineIdentificationRestriction(1),
 *   connectedLineIdentificationRestriction(2), callWaiting(3), callHold(4),
 *   reverseCharging(5), explicitCallTransfer(6),
 *   callCompletionOnBusySubscriber(7)}
 * ```
 * 
 * @enum {number}
 */
export
const InvokableService = _enum_for_InvokableService;

/**
 * @summary InvokableService_callingLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const InvokableService_callingLineIdentificationRestriction: InvokableService = InvokableService.callingLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const callingLineIdentificationRestriction: InvokableService = InvokableService.callingLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const InvokableService_connectedLineIdentificationRestriction: InvokableService = InvokableService.connectedLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const connectedLineIdentificationRestriction: InvokableService = InvokableService.connectedLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callWaiting
 * @constant
 * @type {number}
 */
export
const InvokableService_callWaiting: InvokableService = InvokableService.callWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @constant
 * @type {number}
 */
export
const callWaiting: InvokableService = InvokableService.callWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callHold
 * @constant
 * @type {number}
 */
export
const InvokableService_callHold: InvokableService = InvokableService.callHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @constant
 * @type {number}
 */
export
const callHold: InvokableService = InvokableService.callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_reverseCharging
 * @constant
 * @type {number}
 */
export
const InvokableService_reverseCharging: InvokableService = InvokableService.reverseCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reverseCharging
 * @constant
 * @type {number}
 */
export
const reverseCharging: InvokableService = InvokableService.reverseCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const InvokableService_explicitCallTransfer: InvokableService = InvokableService.explicitCallTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const explicitCallTransfer: InvokableService = InvokableService.explicitCallTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const InvokableService_callCompletionOnBusySubscriber: InvokableService = InvokableService.callCompletionOnBusySubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const callCompletionOnBusySubscriber: InvokableService = InvokableService.callCompletionOnBusySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InvokableService = $._decodeEnumerated;
export const _encode_InvokableService = $._encodeEnumerated;


/* eslint-enable */
