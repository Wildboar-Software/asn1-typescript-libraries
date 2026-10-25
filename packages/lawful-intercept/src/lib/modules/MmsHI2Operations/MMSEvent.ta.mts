/* eslint-disable */
import {
    type ENUMERATED
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
 * MMS event reported to the LEMF. Every event in clause 15.3.6.2.2 is sent as a
 * REPORT. Table 15.3.6.1.1 is the event-to-record map; it does not list upload
 * or delivery as separate rows, and it combines notification with confirmation
 * and both read replies into single rows.
 * 
 * 3GPP TS 33.108, clause 15.3.6 and annex B.15.
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
 * @description
 * 
 * The target sends an MM. REPORT, table 15.3.6.2.2.1. Table 15.3.6.1.1: MMS
 * Send.
 * @constant
 * @type {number}
 */
export
const MMSEvent_send: _enum_for_MMSEvent.send = _enum_for_MMSEvent.send; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary send
 * @description
 * 
 * MMS Send REPORT (table 15.3.6.2.2.1).
 * @constant
 * @type {number}
 */
export
const send: _enum_for_MMSEvent.send = MMSEvent_send; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_notification
 * @description
 * 
 * The target receives notification of an incoming MM. REPORT, table
 * 15.3.6.2.2.2. Table 15.3.6.1.1 groups this with confirmation as one row.
 * @constant
 * @type {number}
 */
export
const MMSEvent_notification: _enum_for_MMSEvent.notification = _enum_for_MMSEvent.notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notification
 * @description
 * 
 * MMS Notification REPORT (table 15.3.6.2.2.2).
 * @constant
 * @type {number}
 */
export
const notification: _enum_for_MMSEvent.notification = MMSEvent_notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_notificationResponse
 * @description
 * 
 * The target responds to notification of an incoming MM. REPORT, table
 * 15.3.6.2.2.3.
 * @constant
 * @type {number}
 */
export
const MMSEvent_notificationResponse: _enum_for_MMSEvent.notificationResponse = _enum_for_MMSEvent.notificationResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notificationResponse
 * @description
 * 
 * MMS Notification Response REPORT (table 15.3.6.2.2.3).
 * @constant
 * @type {number}
 */
export
const notificationResponse: _enum_for_MMSEvent.notificationResponse = MMSEvent_notificationResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_retrieval
 * @description
 * 
 * An MM is retrieved by the target. REPORT, table 15.3.6.2.2.4. Table
 * 15.3.6.1.1 calls this MMS Retrieval Confirmation.
 * @constant
 * @type {number}
 */
export
const MMSEvent_retrieval: _enum_for_MMSEvent.retrieval = _enum_for_MMSEvent.retrieval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieval
 * @description
 * 
 * MMS Retrieval REPORT (table 15.3.6.2.2.4).
 * @constant
 * @type {number}
 */
export
const retrieval: _enum_for_MMSEvent.retrieval = MMSEvent_retrieval; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_retrievalAcknowledgement
 * @description
 * 
 * The target acknowledges a retrieved MM. REPORT, table 15.3.6.2.2.5.
 * @constant
 * @type {number}
 */
export
const MMSEvent_retrievalAcknowledgement: _enum_for_MMSEvent.retrievalAcknowledgement = _enum_for_MMSEvent.retrievalAcknowledgement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrievalAcknowledgement
 * @description
 * 
 * MMS Retrieval Acknowledgement REPORT (table 15.3.6.2.2.5).
 * @constant
 * @type {number}
 */
export
const retrievalAcknowledgement: _enum_for_MMSEvent.retrievalAcknowledgement = MMSEvent_retrievalAcknowledgement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_forwarding
 * @description
 * 
 * The target forwards an MM. REPORT, table 15.3.6.2.2.6.
 * @constant
 * @type {number}
 */
export
const MMSEvent_forwarding: _enum_for_MMSEvent.forwarding = _enum_for_MMSEvent.forwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarding
 * @description
 * 
 * MMS Forwarding REPORT (table 15.3.6.2.2.6).
 * @constant
 * @type {number}
 */
export
const forwarding: _enum_for_MMSEvent.forwarding = MMSEvent_forwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_store
 * @description
 * 
 * The target stores an MM in the MMBox. REPORT, table 15.3.6.2.2.7. That
 * table's event-type cell says to provide MMS Forwarding. Table 15.3.6.1.1
 * calls the event MMS Store Request.
 * @constant
 * @type {number}
 */
export
const MMSEvent_store: _enum_for_MMSEvent.store = _enum_for_MMSEvent.store; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary store
 * @description
 * 
 * MMS Store REPORT (table 15.3.6.2.2.7). Its event-type cell says Forwarding.
 * @constant
 * @type {number}
 */
export
const store: _enum_for_MMSEvent.store = MMSEvent_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_upload
 * @description
 * 
 * The target uploads an MM to the MMBox. REPORT, table 15.3.6.2.2.8. Table
 * 15.3.6.1.1 does not list this event.
 * @constant
 * @type {number}
 */
export
const MMSEvent_upload: _enum_for_MMSEvent.upload = _enum_for_MMSEvent.upload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary upload
 * @description
 * 
 * MMS Upload REPORT (table 15.3.6.2.2.8). Not a row of table 15.3.6.1.1.
 * @constant
 * @type {number}
 */
export
const upload: _enum_for_MMSEvent.upload = MMSEvent_upload; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_delete_
 * @description
 * 
 * The target deletes an MM stored in the MMBox. REPORT, table 15.3.6.2.2.9.
 * Table 15.3.6.1.1 calls the event MMS Deletion Request.
 * @constant
 * @type {number}
 */
export
const MMSEvent_delete_: _enum_for_MMSEvent.delete_ = _enum_for_MMSEvent.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 * 
 * MMS Delete REPORT (table 15.3.6.2.2.9).
 * @constant
 * @type {number}
 */
export
const delete_: _enum_for_MMSEvent.delete_ = MMSEvent_delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_delivery
 * @description
 * 
 * The target receives an MMS delivery report. REPORT, table 15.3.6.2.2.10.
 * Table 15.3.6.1.1 does not list this event.
 * @constant
 * @type {number}
 */
export
const MMSEvent_delivery: _enum_for_MMSEvent.delivery = _enum_for_MMSEvent.delivery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery
 * @description
 * 
 * MMS Delivery REPORT (table 15.3.6.2.2.10). Not a row of table 15.3.6.1.1.
 * @constant
 * @type {number}
 */
export
const delivery: _enum_for_MMSEvent.delivery = MMSEvent_delivery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_readReplyFromTarget
 * @description
 * 
 * The target sends an MMS read reply. REPORT, table 15.3.6.2.2.11. Table
 * 15.3.6.1.1 has one MMS Read Report row for both directions.
 * @constant
 * @type {number}
 */
export
const MMSEvent_readReplyFromTarget: _enum_for_MMSEvent.readReplyFromTarget = _enum_for_MMSEvent.readReplyFromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary readReplyFromTarget
 * @description
 * 
 * Read reply sent by the target (table 15.3.6.2.2.11).
 * @constant
 * @type {number}
 */
export
const readReplyFromTarget: _enum_for_MMSEvent.readReplyFromTarget = MMSEvent_readReplyFromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_readReplyToTarget
 * @description
 * 
 * The target receives an MMS read reply. REPORT, table 15.3.6.2.2.12. Table
 * 15.3.6.1.1 has one MMS Read Report row for both directions.
 * @constant
 * @type {number}
 */
export
const MMSEvent_readReplyToTarget: _enum_for_MMSEvent.readReplyToTarget = _enum_for_MMSEvent.readReplyToTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary readReplyToTarget
 * @description
 * 
 * Read reply received by the target (table 15.3.6.2.2.12).
 * @constant
 * @type {number}
 */
export
const readReplyToTarget: _enum_for_MMSEvent.readReplyToTarget = MMSEvent_readReplyToTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_cancel
 * @description
 * 
 * The target receives an MMS cancel request. REPORT, table 15.3.6.2.2.13. Table
 * 15.3.6.1.1 calls the event MMS Cancel Request.
 * @constant
 * @type {number}
 */
export
const MMSEvent_cancel: _enum_for_MMSEvent.cancel = _enum_for_MMSEvent.cancel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @description
 * 
 * MMS Cancel REPORT (table 15.3.6.2.2.13).
 * @constant
 * @type {number}
 */
export
const cancel: _enum_for_MMSEvent.cancel = MMSEvent_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_viewRequest
 * @description
 * 
 * The target sends an MMBox view request. REPORT, table 15.3.6.2.2.14. Table
 * 15.3.6.1.1 calls the event MMS Viewing Request.
 * @constant
 * @type {number}
 */
export
const MMSEvent_viewRequest: _enum_for_MMSEvent.viewRequest = _enum_for_MMSEvent.viewRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary viewRequest
 * @description
 * 
 * MMS View Request REPORT (table 15.3.6.2.2.14).
 * @constant
 * @type {number}
 */
export
const viewRequest: _enum_for_MMSEvent.viewRequest = MMSEvent_viewRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSEvent_viewConfirm
 * @description
 * 
 * The target receives confirmation of an MMBox view request. REPORT, table
 * 15.3.6.2.2.15. Table 15.3.6.1.1 calls the event MMS Viewing Response.
 * @constant
 * @type {number}
 */
export
const MMSEvent_viewConfirm: _enum_for_MMSEvent.viewConfirm = _enum_for_MMSEvent.viewConfirm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary viewConfirm
 * @description
 * 
 * MMS View Confirm REPORT (table 15.3.6.2.2.15).
 * @constant
 * @type {number}
 */
export
const viewConfirm: _enum_for_MMSEvent.viewConfirm = MMSEvent_viewConfirm; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSEvent: $.ASN1Decoder<MMSEvent> = $._decodeEnumerated;
export const _encode_MMSEvent: $.ASN1Encoder<MMSEvent> = $._encodeEnumerated;


/* eslint-enable */
