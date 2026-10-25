/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Disposition of a unified-messaging message, reported as a property of the
 * event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Property_Message_Status {
    /**
     * The message status cannot be determined.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    indeterminate = 0,
    /**
     * The message expired.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    expired = 1,
    /**
     * The message was retrieved.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    retrieved = 2,
    /**
     * The message was rejected.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    rejected = 3,
    /**
     * The message was deferred.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    deferred = 4,
    /**
     * The message was forwarded.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    forwarded = 5,
    /**
     * The terminating party did not recognize the message.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    unrecognized = 6,
    /**
     * The message did not reach the terminating party.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    unreachable = 7,
    /**
     * The message was read.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    read = 8,
    /**
     * The message was deleted without being read.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    deleted_without_being_read = 9,
    /**
     * The terminating party did not meet the delivery condition.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
     */
    delivery_condition_not_met = 10,
}

/**
 * @summary Messaging_Property_Message_Status
 * @description
 *
 * Disposition of a unified-messaging message, reported as a property of the
 * event.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Property-Message-Status  ::=  ENUMERATED
 * {
 *     indeterminate(0),
 *     expired(1),
 *     retrieved(2),
 *     rejected(3),
 *     deferred(4),
 *     forwarded(5),
 *     unrecognized(6),
 *     unreachable(7),
 *     read(8),
 *     deleted-without-being-read(9),
 *     delivery-condition-not-met(10),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Property_Message_Status = _enum_for_Messaging_Property_Message_Status | ENUMERATED;

/**
 * @summary Messaging_Property_Message_Status_indeterminate
 * @description
 *
 * The message status cannot be determined.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_indeterminate: _enum_for_Messaging_Property_Message_Status.indeterminate = _enum_for_Messaging_Property_Message_Status.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @description
 *
 * The message status cannot be determined.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const indeterminate: _enum_for_Messaging_Property_Message_Status.indeterminate = Messaging_Property_Message_Status_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_expired
 * @description
 *
 * The message expired.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_expired: _enum_for_Messaging_Property_Message_Status.expired = _enum_for_Messaging_Property_Message_Status.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @description
 *
 * The message expired.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const expired: _enum_for_Messaging_Property_Message_Status.expired = Messaging_Property_Message_Status_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_retrieved
 * @description
 *
 * The message was retrieved.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_retrieved: _enum_for_Messaging_Property_Message_Status.retrieved = _enum_for_Messaging_Property_Message_Status.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @description
 *
 * The message was retrieved.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const retrieved: _enum_for_Messaging_Property_Message_Status.retrieved = Messaging_Property_Message_Status_retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_rejected
 * @description
 *
 * The message was rejected.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_rejected: _enum_for_Messaging_Property_Message_Status.rejected = _enum_for_Messaging_Property_Message_Status.rejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @description
 *
 * The message was rejected.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const rejected: _enum_for_Messaging_Property_Message_Status.rejected = Messaging_Property_Message_Status_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_deferred
 * @description
 *
 * The message was deferred.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_deferred: _enum_for_Messaging_Property_Message_Status.deferred = _enum_for_Messaging_Property_Message_Status.deferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @description
 *
 * The message was deferred.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const deferred: _enum_for_Messaging_Property_Message_Status.deferred = Messaging_Property_Message_Status_deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_forwarded
 * @description
 *
 * The message was forwarded.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_forwarded: _enum_for_Messaging_Property_Message_Status.forwarded = _enum_for_Messaging_Property_Message_Status.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @description
 *
 * The message was forwarded.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const forwarded: _enum_for_Messaging_Property_Message_Status.forwarded = Messaging_Property_Message_Status_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_unrecognized
 * @description
 *
 * The terminating party did not recognize the message.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_unrecognized: _enum_for_Messaging_Property_Message_Status.unrecognized = _enum_for_Messaging_Property_Message_Status.unrecognized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized
 * @description
 *
 * The terminating party did not recognize the message.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const unrecognized: _enum_for_Messaging_Property_Message_Status.unrecognized = Messaging_Property_Message_Status_unrecognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_unreachable
 * @description
 *
 * The message did not reach the terminating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_unreachable: _enum_for_Messaging_Property_Message_Status.unreachable = _enum_for_Messaging_Property_Message_Status.unreachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @description
 *
 * The message did not reach the terminating party.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const unreachable: _enum_for_Messaging_Property_Message_Status.unreachable = Messaging_Property_Message_Status_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_read
 * @description
 *
 * The message was read.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_read: _enum_for_Messaging_Property_Message_Status.read = _enum_for_Messaging_Property_Message_Status.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @description
 *
 * The message was read.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const read: _enum_for_Messaging_Property_Message_Status.read = Messaging_Property_Message_Status_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_deleted_without_being_read
 * @description
 *
 * The message was deleted without being read.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_deleted_without_being_read: _enum_for_Messaging_Property_Message_Status.deleted_without_being_read = _enum_for_Messaging_Property_Message_Status.deleted_without_being_read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted_without_being_read
 * @description
 *
 * The message was deleted without being read.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const deleted_without_being_read: _enum_for_Messaging_Property_Message_Status.deleted_without_being_read = Messaging_Property_Message_Status_deleted_without_being_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Property_Message_Status_delivery_condition_not_met
 * @description
 *
 * The terminating party did not meet the delivery condition.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Property_Message_Status_delivery_condition_not_met: _enum_for_Messaging_Property_Message_Status.delivery_condition_not_met = _enum_for_Messaging_Property_Message_Status.delivery_condition_not_met; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_condition_not_met
 * @description
 *
 * The terminating party did not meet the delivery condition.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.7.
 *
 * @constant
 * @type {number}
 */
export
const delivery_condition_not_met: _enum_for_Messaging_Property_Message_Status.delivery_condition_not_met = Messaging_Property_Message_Status_delivery_condition_not_met; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Property_Message_Status: $.ASN1Decoder<Messaging_Property_Message_Status> = $._decodeEnumerated;
export const _encode_Messaging_Property_Message_Status: $.ASN1Encoder<Messaging_Property_Message_Status> = $._encodeEnumerated;


/* eslint-enable */
