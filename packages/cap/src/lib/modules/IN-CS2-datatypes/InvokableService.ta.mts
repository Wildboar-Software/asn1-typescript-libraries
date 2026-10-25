/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const InvokableService_callingLineIdentificationRestriction = InvokableService.callingLineIdentificationRestriction satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const callingLineIdentificationRestriction = InvokableService.callingLineIdentificationRestriction satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const InvokableService_connectedLineIdentificationRestriction = InvokableService.connectedLineIdentificationRestriction satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const connectedLineIdentificationRestriction = InvokableService.connectedLineIdentificationRestriction satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callWaiting
 * @constant
 * @type {number}
 */
export
const InvokableService_callWaiting = InvokableService.callWaiting satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @constant
 * @type {number}
 */
export
const callWaiting = InvokableService.callWaiting satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callHold
 * @constant
 * @type {number}
 */
export
const InvokableService_callHold = InvokableService.callHold satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @constant
 * @type {number}
 */
export
const callHold = InvokableService.callHold satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_reverseCharging
 * @constant
 * @type {number}
 */
export
const InvokableService_reverseCharging = InvokableService.reverseCharging satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reverseCharging
 * @constant
 * @type {number}
 */
export
const reverseCharging = InvokableService.reverseCharging satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const InvokableService_explicitCallTransfer = InvokableService.explicitCallTransfer satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const explicitCallTransfer = InvokableService.explicitCallTransfer satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const InvokableService_callCompletionOnBusySubscriber = InvokableService.callCompletionOnBusySubscriber satisfies InvokableService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const callCompletionOnBusySubscriber = InvokableService.callCompletionOnBusySubscriber satisfies InvokableService; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InvokableService = $._decodeEnumerated;
export const _encode_InvokableService = $._encodeEnumerated;


/* eslint-enable */
