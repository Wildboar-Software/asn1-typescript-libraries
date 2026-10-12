/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Status {
    unknown = 0,
    not_applicable = 1,
    operation_failed = 2,
    operation_succeeded = 3,
    operation_cancelled = 4,
    operation_started = 5,
    operation_lost = 6,
}

/**
 * @summary Messaging_Status
 * @description
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
 * @constant
 * @type {number}
 */
export
const Messaging_Status_unknown: Messaging_Status = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Status = Messaging_Status_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_not_applicable
 * @constant
 * @type {number}
 */
export
const Messaging_Status_not_applicable: Messaging_Status = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_applicable
 * @constant
 * @type {number}
 */
export
const not_applicable: Messaging_Status = Messaging_Status_not_applicable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_failed
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_failed: Messaging_Status = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_failed
 * @constant
 * @type {number}
 */
export
const operation_failed: Messaging_Status = Messaging_Status_operation_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_succeeded
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_succeeded: Messaging_Status = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_succeeded
 * @constant
 * @type {number}
 */
export
const operation_succeeded: Messaging_Status = Messaging_Status_operation_succeeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_cancelled
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_cancelled: Messaging_Status = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_cancelled
 * @constant
 * @type {number}
 */
export
const operation_cancelled: Messaging_Status = Messaging_Status_operation_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_started
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_started: Messaging_Status = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_started
 * @constant
 * @type {number}
 */
export
const operation_started: Messaging_Status = Messaging_Status_operation_started; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Status_operation_lost
 * @constant
 * @type {number}
 */
export
const Messaging_Status_operation_lost: Messaging_Status = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_lost
 * @constant
 * @type {number}
 */
export
const operation_lost: Messaging_Status = Messaging_Status_operation_lost; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Messaging_Status: $.ASN1Decoder<Messaging_Status> = $._decodeEnumerated;
export const _encode_Messaging_Status: $.ASN1Encoder<Messaging_Status> = $._encodeEnumerated;


/* eslint-enable */
