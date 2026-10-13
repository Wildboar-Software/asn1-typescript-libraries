/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMSEvent {
    send = 0,
    notification = 1,
    notificationResponse = 2,
    retrieval = 3,
    retrievalAcknowledgement = 4,
    forwarding = 5,
    store = 6,
    upload = 7,
    delete_ = 8,
    delivery = 9,
    readReplyFromTarget = 10,
    readReplyToTarget = 11,
    cancel = 12,
    viewRequest = 13,
    viewConfirm = 14,
}

/**
 * @summary MMSEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSEvent  ::=  ENUMERATED
 * {
 *     send         (0),
 *     notification    (1),
 *     notificationResponse    (2),
 *     retrieval        (3),
 *     retrievalAcknowledgement(4),
 *     forwarding        (5),
 *     store        (6),
 *     upload        (7),
 *     delete        (8),
 *     delivery        (9),
 *     readReplyFromTarget    (10),
 *     readReplyToTarget    (11),
 *     cancel        (12),
 *     viewRequest        (13),
 *     viewConfirm        (14),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSEvent = _enum_for_MMSEvent | ENUMERATED;

/**
 * @summary MMSEvent_send
 * @constant
 * @type {number}
 */
export
const MMSEvent_send: MMSEvent = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary send
 * @constant
 * @type {number}
 */
export
const send: MMSEvent = MMSEvent_send; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_notification
 * @constant
 * @type {number}
 */
export
const MMSEvent_notification: MMSEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @constant
 * @type {number}
 */
export
const notification: MMSEvent = MMSEvent_notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_notificationResponse
 * @constant
 * @type {number}
 */
export
const MMSEvent_notificationResponse: MMSEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationResponse
 * @constant
 * @type {number}
 */
export
const notificationResponse: MMSEvent = MMSEvent_notificationResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_retrieval
 * @constant
 * @type {number}
 */
export
const MMSEvent_retrieval: MMSEvent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieval
 * @constant
 * @type {number}
 */
export
const retrieval: MMSEvent = MMSEvent_retrieval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_retrievalAcknowledgement
 * @constant
 * @type {number}
 */
export
const MMSEvent_retrievalAcknowledgement: MMSEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrievalAcknowledgement
 * @constant
 * @type {number}
 */
export
const retrievalAcknowledgement: MMSEvent = MMSEvent_retrievalAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_forwarding
 * @constant
 * @type {number}
 */
export
const MMSEvent_forwarding: MMSEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarding
 * @constant
 * @type {number}
 */
export
const forwarding: MMSEvent = MMSEvent_forwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_store
 * @constant
 * @type {number}
 */
export
const MMSEvent_store: MMSEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary store
 * @constant
 * @type {number}
 */
export
const store: MMSEvent = MMSEvent_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_upload
 * @constant
 * @type {number}
 */
export
const MMSEvent_upload: MMSEvent = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upload
 * @constant
 * @type {number}
 */
export
const upload: MMSEvent = MMSEvent_upload; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_delete_
 * @constant
 * @type {number}
 */
export
const MMSEvent_delete_: MMSEvent = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @constant
 * @type {number}
 */
export
const delete_: MMSEvent = MMSEvent_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_delivery
 * @constant
 * @type {number}
 */
export
const MMSEvent_delivery: MMSEvent = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @constant
 * @type {number}
 */
export
const delivery: MMSEvent = MMSEvent_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_readReplyFromTarget
 * @constant
 * @type {number}
 */
export
const MMSEvent_readReplyFromTarget: MMSEvent = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary readReplyFromTarget
 * @constant
 * @type {number}
 */
export
const readReplyFromTarget: MMSEvent = MMSEvent_readReplyFromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_readReplyToTarget
 * @constant
 * @type {number}
 */
export
const MMSEvent_readReplyToTarget: MMSEvent = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary readReplyToTarget
 * @constant
 * @type {number}
 */
export
const readReplyToTarget: MMSEvent = MMSEvent_readReplyToTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_cancel
 * @constant
 * @type {number}
 */
export
const MMSEvent_cancel: MMSEvent = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: MMSEvent = MMSEvent_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_viewRequest
 * @constant
 * @type {number}
 */
export
const MMSEvent_viewRequest: MMSEvent = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary viewRequest
 * @constant
 * @type {number}
 */
export
const viewRequest: MMSEvent = MMSEvent_viewRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_viewConfirm
 * @constant
 * @type {number}
 */
export
const MMSEvent_viewConfirm: MMSEvent = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary viewConfirm
 * @constant
 * @type {number}
 */
export
const viewConfirm: MMSEvent = MMSEvent_viewConfirm; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSEvent: $.ASN1Decoder<MMSEvent> = $._decodeEnumerated;
export const _encode_MMSEvent: $.ASN1Encoder<MMSEvent> = $._encodeEnumerated;


/* eslint-enable */
