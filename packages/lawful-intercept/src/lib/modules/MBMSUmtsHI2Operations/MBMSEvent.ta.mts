/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSEvent {
    mBMSServiceJoining = 1,
    mBMSServiceLeaving = 2,
    mBMSSubscriptionActivation = 3,
    mBMSSubscriptionModification = 4,
    mBMSSubscriptionTermination = 5,
    startofInterceptWithMBMSServiceActive = 6,
}

/**
 * @summary MBMSEvent
 * @description
 * 
 * MBMS event that caused the IRI record. Table 9.1 maps each event to Begin,
 * End, or Report. The events are those defined for HI2 delivery from TS 33.107.
 * 
 * 3GPP TS 33.108, clause 9.5, table 9.1, and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSEvent  ::=  ENUMERATED
 * {
 *     mBMSServiceJoining                           (1),
 *     mBMSServiceLeaving                        (2),
 *     mBMSSubscriptionActivation                (3),
 *     mBMSSubscriptionModification            (4),
 *     mBMSSubscriptionTermination                (5),
 *     startofInterceptWithMBMSServiceActive    (6),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSEvent = _enum_for_MBMSEvent | ENUMERATED;

/**
 * @summary MBMSEvent_mBMSServiceJoining
 * @description
 * 
 * The target's UE successfully joined an MBMS service. Sent as BEGIN (table
 * 9.1, table 9.6).
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSServiceJoining = _enum_for_MBMSEvent.mBMSServiceJoining satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSServiceJoining
 * @description
 * 
 * Service joining BEGIN (table 9.6).
 * @constant
 * @type {number}
 */
export
const mBMSServiceJoining = MBMSEvent_mBMSServiceJoining satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSServiceLeaving
 * @description
 * 
 * The target's UE left an MBMS service, or the BM-SC terminated the service.
 * Sent as END (table 9.1, table 9.8). Table 9.8's event-type cell says to
 * provide the MBMS Service Joining event type.
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSServiceLeaving = _enum_for_MBMSEvent.mBMSServiceLeaving satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSServiceLeaving
 * @description
 * 
 * Service leaving END (table 9.8). That table's event-type cell says Service
 * Joining.
 * @constant
 * @type {number}
 */
export
const mBMSServiceLeaving = MBMSEvent_mBMSServiceLeaving satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionActivation
 * @description
 * 
 * The target activated an MBMS subscription, from the UE or by an off-line
 * means. Sent as REPORT (table 9.1, table 9.3). Table 9.3's event-type cell
 * says to provide the MBMS Service Joining event type.
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionActivation = _enum_for_MBMSEvent.mBMSSubscriptionActivation satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionActivation
 * @description
 * 
 * Subscription activation REPORT (table 9.3). Its event-type cell says Service
 * Joining.
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionActivation = MBMSEvent_mBMSSubscriptionActivation satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionModification
 * @description
 * 
 * The target modified an MBMS subscription, from the UE or by an off-line
 * means. Sent as REPORT (table 9.1, table 9.4). Table 9.4's event-type cell
 * says to provide the MBMS Service Joining event type.
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionModification = _enum_for_MBMSEvent.mBMSSubscriptionModification satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionModification
 * @description
 * 
 * Subscription modification REPORT (table 9.4). Its event-type cell says
 * Service Joining.
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionModification = MBMSEvent_mBMSSubscriptionModification satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_mBMSSubscriptionTermination
 * @description
 * 
 * The target terminated an MBMS subscription, from the UE or by an off-line
 * means. Sent as REPORT (table 9.1, table 9.5). Table 9.5's event-type cell
 * says to provide the MBMS Service Joining event type. If a leave reason is
 * subscription expiry, this report is also generated (table 9.2).
 * @constant
 * @type {number}
 */
export
const MBMSEvent_mBMSSubscriptionTermination = _enum_for_MBMSEvent.mBMSSubscriptionTermination satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMSSubscriptionTermination
 * @description
 * 
 * Subscription termination REPORT (table 9.5). Its event-type cell says Service
 * Joining.
 * @constant
 * @type {number}
 */
export
const mBMSSubscriptionTermination = MBMSEvent_mBMSSubscriptionTermination satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSEvent_startofInterceptWithMBMSServiceActive
 * @description
 * 
 * Interception started while the UE had already joined an MBMS service. Sent as
 * BEGIN (table 9.1, table 9.7). Table 9.7's event-type cell says to provide the
 * MBMS Service Joining event type. If the BM-SC does not know that several
 * intercepts are active, the MF/DF builds this record from information it
 * retained, and does not send it to LEMFs already intercepting that target
 * (clause 9.5.1.3).
 * @constant
 * @type {number}
 */
export
const MBMSEvent_startofInterceptWithMBMSServiceActive = _enum_for_MBMSEvent.startofInterceptWithMBMSServiceActive satisfies MBMSEvent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startofInterceptWithMBMSServiceActive
 * @description
 * 
 * Start of intercept with a service active, BEGIN (table 9.7).
 * @constant
 * @type {number}
 */
export
const startofInterceptWithMBMSServiceActive = MBMSEvent_startofInterceptWithMBMSServiceActive satisfies MBMSEvent; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MBMSEvent: $.ASN1Decoder<MBMSEvent> = $._decodeEnumerated;
export const _encode_MBMSEvent: $.ASN1Encoder<MBMSEvent> = $._encodeEnumerated;


/* eslint-enable */
