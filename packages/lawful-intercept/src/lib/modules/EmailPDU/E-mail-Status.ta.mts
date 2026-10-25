/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_mail_Status
 * @description
 *
 * Outcome of the email operation, as far as the intercept can tell.
 *
 * Use success when the message reached the termination point of the action.
 * Table 4: send and receive terminate when the recipient mailbox has received
 * the message; download and partial download terminate when that retrieval has
 * succeeded. Use unknown when the equipment does not understand or does not
 * monitor that termination point, and the operation was not found to have
 * failed. Use failed when an error code or some other indication shows failure.
 *
 * IMAP4 table C.2: tagged `OK` is success and tagged `NO` is failed. `BAD` is
 * not mapped.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_E_mail_Status {
    /**
     * The termination point is not understood or not monitored, and the
     * operation was not determined to be a failure. Clause 7.7 calls this
     * UNKNOWN.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.7.
     */
    status_unknown = 1,
    /**
     * The application operation failed, for example by an error code. Clause
     * 7.7 calls this FAILED. IMAP4 tagged `NO` maps here (table C.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
     */
    operation_failed = 2,
    /**
     * The message reached the termination point in table 4. Clause 7.7 calls
     * this SUCCESS. IMAP4 tagged `OK` maps here (table C.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
     */
    operation_succeeded = 3,
}

/**
 * @summary E_mail_Status
 * @description
 *
 * Outcome of the email operation, as far as the intercept can tell.
 *
 * Use success when the message reached the termination point of the action.
 * Table 4: send and receive terminate when the recipient mailbox has received
 * the message; download and partial download terminate when that retrieval has
 * succeeded. Use unknown when the equipment does not understand or does not
 * monitor that termination point, and the operation was not found to have
 * failed. Use failed when an error code or some other indication shows failure.
 *
 * IMAP4 table C.2: tagged `OK` is success and tagged `NO` is failed. `BAD` is
 * not mapped.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type E_mail_Status = _enum_for_E_mail_Status;

/**
 * @summary E_mail_Status
 * @description
 *
 * Outcome of the email operation, as far as the intercept can tell.
 *
 * Use success when the message reached the termination point of the action.
 * Table 4: send and receive terminate when the recipient mailbox has received
 * the message; download and partial download terminate when that retrieval has
 * succeeded. Use unknown when the equipment does not understand or does not
 * monitor that termination point, and the operation was not found to have
 * failed. Use failed when an error code or some other indication shows failure.
 *
 * IMAP4 table C.2: tagged `OK` is success and tagged `NO` is failed. `BAD` is
 * not mapped.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Status  ::=  ENUMERATED
 * {
 *     status-unknown(1),
 *     operation-failed(2),
 *     operation-succeeded(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const E_mail_Status = _enum_for_E_mail_Status;

/**
 * @summary E_mail_Status_status_unknown
 * @description
 *
 * The termination point is not understood or not monitored, and the operation
 * was not determined to be a failure. Clause 7.7 calls this UNKNOWN.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.7.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Status_status_unknown = E_mail_Status.status_unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary status_unknown
 * @description
 *
 * The termination point is not understood or not monitored, and the operation
 * was not determined to be a failure. Clause 7.7 calls this UNKNOWN.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 7.7.
 *
 * @constant
 * @type {number}
 */
export
const status_unknown = E_mail_Status.status_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_failed
 * @description
 *
 * The application operation failed, for example by an error code. Clause 7.7
 * calls this FAILED. IMAP4 tagged `NO` maps here (table C.2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_failed = E_mail_Status.operation_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_failed
 * @description
 *
 * The application operation failed, for example by an error code. Clause 7.7
 * calls this FAILED. IMAP4 tagged `NO` maps here (table C.2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 *
 * @constant
 * @type {number}
 */
export
const operation_failed = E_mail_Status.operation_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_succeeded
 * @description
 *
 * The message reached the termination point in table 4. Clause 7.7 calls this
 * SUCCESS. IMAP4 tagged `OK` maps here (table C.2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 *
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_succeeded = E_mail_Status.operation_succeeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_succeeded
 * @description
 *
 * The message reached the termination point in table 4. Clause 7.7 calls this
 * SUCCESS. IMAP4 tagged `OK` maps here (table C.2).
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.7 and C.2.
 *
 * @constant
 * @type {number}
 */
export
const operation_succeeded = E_mail_Status.operation_succeeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Status: $.ASN1Decoder<E_mail_Status> = $._decodeEnumerated;
export const _encode_E_mail_Status: $.ASN1Encoder<E_mail_Status> = $._encodeEnumerated;


/* eslint-enable */
