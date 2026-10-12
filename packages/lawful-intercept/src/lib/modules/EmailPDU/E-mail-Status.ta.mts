/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_mail_Status
 * @description
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
    status_unknown = 1,
    operation_failed = 2,
    operation_succeeded = 3,
}

/**
 * @summary E_mail_Status
 * @description
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
 * @constant
 * @type {number}
 */
export
const E_mail_Status_status_unknown: E_mail_Status = E_mail_Status.status_unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary status_unknown
 * @constant
 * @type {number}
 */
export
const status_unknown: E_mail_Status = E_mail_Status.status_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_failed
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_failed: E_mail_Status = E_mail_Status.operation_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_failed
 * @constant
 * @type {number}
 */
export
const operation_failed: E_mail_Status = E_mail_Status.operation_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary E_mail_Status_operation_succeeded
 * @constant
 * @type {number}
 */
export
const E_mail_Status_operation_succeeded: E_mail_Status = E_mail_Status.operation_succeeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_succeeded
 * @constant
 * @type {number}
 */
export
const operation_succeeded: E_mail_Status = E_mail_Status.operation_succeeded; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_E_mail_Status: $.ASN1Decoder<E_mail_Status> = $._decodeEnumerated;
export const _encode_E_mail_Status: $.ASN1Encoder<E_mail_Status> = $._encodeEnumerated;


/* eslint-enable */
