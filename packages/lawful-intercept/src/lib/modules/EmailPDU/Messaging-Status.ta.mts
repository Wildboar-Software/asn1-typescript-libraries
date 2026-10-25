/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @description
 *
 * Status of the unified-messaging operation reported in a `MessagingIRI`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 */
export
enum _enum_for_Messaging_Status {
    /**
     * The status is unknown. The example is a raw event that the mediation
     * function could not interpret.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    unknown = 0,
    /**
     * A separate status does not apply because the outcome is implicit, for
     * example a login or a mailbox lock.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    not_applicable = 1,
    /**
     * The operation failed, for example a refused login.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    operation_failed = 2,
    /**
     * The operation succeeded, for example a voicemail message was deleted.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    operation_succeeded = 3,
    /**
     * The user cancelled the operation in progress, for example they listened
     * to only part of a voicemail.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    operation_cancelled = 4,
    /**
     * The operation has started and its outcome is not yet known, for example a
     * message deposit has begun.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    operation_started = 5,
    /**
     * The operation started, but the outcome was lost. The example is a
     * mediator that lost track of the operation.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
     */
    operation_lost = 6,
}

/**
 * @summary Messaging_Status
 * @description
 *
 * Status of the unified-messaging operation reported in a `MessagingIRI`.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Status  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     not-applicable(1),
 *     operation-failed(2),
 *     operation-succeeded(3),
 *     operation-cancelled(4),
 *     operation-started(5),
 *     ...,
 *     operation-lost(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Status = _enum_for_Messaging_Status | ENUMERATED;

/**
 * @summary Messaging_Status_unknown
 * @description
 *
 * The status is unknown. The example is a raw event that the mediation function
 * could not interpret.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_unknown = _enum_for_Messaging_Status.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * The status is unknown. The example is a raw event that the mediation function
 * could not interpret.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const unknown = Messaging_Status_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_not_applicable
 * @description
 *
 * A separate status does not apply because the outcome is implicit, for example
 * a login or a mailbox lock.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_not_applicable = _enum_for_Messaging_Status.not_applicable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_applicable
 * @description
 *
 * A separate status does not apply because the outcome is implicit, for example
 * a login or a mailbox lock.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const not_applicable = Messaging_Status_not_applicable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_failed
 * @description
 *
 * The operation failed, for example a refused login.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_failed = _enum_for_Messaging_Status.operation_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_failed
 * @description
 *
 * The operation failed, for example a refused login.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const operation_failed = Messaging_Status_operation_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_succeeded
 * @description
 *
 * The operation succeeded, for example a voicemail message was deleted.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_succeeded = _enum_for_Messaging_Status.operation_succeeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_succeeded
 * @description
 *
 * The operation succeeded, for example a voicemail message was deleted.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const operation_succeeded = Messaging_Status_operation_succeeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_cancelled
 * @description
 *
 * The user cancelled the operation in progress, for example they listened to
 * only part of a voicemail.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_cancelled = _enum_for_Messaging_Status.operation_cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_cancelled
 * @description
 *
 * The user cancelled the operation in progress, for example they listened to
 * only part of a voicemail.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const operation_cancelled = Messaging_Status_operation_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_started
 * @description
 *
 * The operation has started and its outcome is not yet known, for example a
 * message deposit has begun.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_started = _enum_for_Messaging_Status.operation_started; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_started
 * @description
 *
 * The operation has started and its outcome is not yet known, for example a
 * message deposit has begun.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const operation_started = Messaging_Status_operation_started; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_lost
 * @description
 *
 * The operation started, but the outcome was lost. The example is a mediator
 * that lost track of the operation.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_lost = _enum_for_Messaging_Status.operation_lost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_lost
 * @description
 *
 * The operation started, but the outcome was lost. The example is a mediator
 * that lost track of the operation.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.0.
 *
 * @constant
 * @type {number}
 */
export
const operation_lost = Messaging_Status_operation_lost; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Status: $.ASN1Decoder<Messaging_Status> = $._decodeEnumerated;
export const _encode_Messaging_Status: $.ASN1Encoder<Messaging_Status> = $._encodeEnumerated;


/* eslint-enable */
