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
const InvokableService: typeof _enum_for_InvokableService = _enum_for_InvokableService;

/**
 * @summary InvokableService_callingLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const InvokableService_callingLineIdentificationRestriction: _enum_for_InvokableService.callingLineIdentificationRestriction = InvokableService.callingLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const callingLineIdentificationRestriction: _enum_for_InvokableService.callingLineIdentificationRestriction = InvokableService.callingLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const InvokableService_connectedLineIdentificationRestriction: _enum_for_InvokableService.connectedLineIdentificationRestriction = InvokableService.connectedLineIdentificationRestriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedLineIdentificationRestriction
 * @constant
 * @type {number}
 */
export
const connectedLineIdentificationRestriction: _enum_for_InvokableService.connectedLineIdentificationRestriction = InvokableService.connectedLineIdentificationRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callWaiting
 * @constant
 * @type {number}
 */
export
const InvokableService_callWaiting: _enum_for_InvokableService.callWaiting = InvokableService.callWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaiting
 * @constant
 * @type {number}
 */
export
const callWaiting: _enum_for_InvokableService.callWaiting = InvokableService.callWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callHold
 * @constant
 * @type {number}
 */
export
const InvokableService_callHold: _enum_for_InvokableService.callHold = InvokableService.callHold; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callHold
 * @constant
 * @type {number}
 */
export
const callHold: _enum_for_InvokableService.callHold = InvokableService.callHold; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_reverseCharging
 * @constant
 * @type {number}
 */
export
const InvokableService_reverseCharging: _enum_for_InvokableService.reverseCharging = InvokableService.reverseCharging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reverseCharging
 * @constant
 * @type {number}
 */
export
const reverseCharging: _enum_for_InvokableService.reverseCharging = InvokableService.reverseCharging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const InvokableService_explicitCallTransfer: _enum_for_InvokableService.explicitCallTransfer = InvokableService.explicitCallTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary explicitCallTransfer
 * @constant
 * @type {number}
 */
export
const explicitCallTransfer: _enum_for_InvokableService.explicitCallTransfer = InvokableService.explicitCallTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InvokableService_callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const InvokableService_callCompletionOnBusySubscriber: _enum_for_InvokableService.callCompletionOnBusySubscriber = InvokableService.callCompletionOnBusySubscriber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCompletionOnBusySubscriber
 * @constant
 * @type {number}
 */
export
const callCompletionOnBusySubscriber: _enum_for_InvokableService.callCompletionOnBusySubscriber = InvokableService.callCompletionOnBusySubscriber; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InvokableService: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_InvokableService: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
