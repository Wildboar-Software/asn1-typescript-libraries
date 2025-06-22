/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NonDeliveryReasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryReasonCode  ::=  INTEGER {
 *   transfer-failure(0), unable-to-transfer(1), conversion-not-performed(2),
 *   physical-rendition-not-performed(3), physical-delivery-not-performed(4),
 *   restricted-delivery(5), directory-operation-unsuccessful(6),
 *   deferred-delivery-not-performed(7), transfer-failure-for-security-reason(8)
 * }(0..ub-reason-codes)
 * ```
 */
export type NonDeliveryReasonCode = INTEGER;

/**
 * @summary NonDeliveryReasonCode_transfer_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_transfer_failure: NonDeliveryReasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_transfer_failure
 * @constant
 * @type {number}
 */
export const transfer_failure: NonDeliveryReasonCode = NonDeliveryReasonCode_transfer_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_unable_to_transfer
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_unable_to_transfer: NonDeliveryReasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_unable_to_transfer
 * @constant
 * @type {number}
 */
export const unable_to_transfer: NonDeliveryReasonCode = NonDeliveryReasonCode_unable_to_transfer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_conversion_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_conversion_not_performed: NonDeliveryReasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_conversion_not_performed
 * @constant
 * @type {number}
 */
export const conversion_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_conversion_not_performed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_physical_rendition_not_performed: NonDeliveryReasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_physical_rendition_not_performed
 * @constant
 * @type {number}
 */
export const physical_rendition_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_physical_rendition_not_performed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_physical_delivery_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_physical_delivery_not_performed: NonDeliveryReasonCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_physical_delivery_not_performed
 * @constant
 * @type {number}
 */
export const physical_delivery_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_physical_delivery_not_performed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_restricted_delivery
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_restricted_delivery: NonDeliveryReasonCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_restricted_delivery
 * @constant
 * @type {number}
 */
export const restricted_delivery: NonDeliveryReasonCode = NonDeliveryReasonCode_restricted_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_directory_operation_unsuccessful
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_directory_operation_unsuccessful: NonDeliveryReasonCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_directory_operation_unsuccessful
 * @constant
 * @type {number}
 */
export const directory_operation_unsuccessful: NonDeliveryReasonCode = NonDeliveryReasonCode_directory_operation_unsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_deferred_delivery_not_performed
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_deferred_delivery_not_performed: NonDeliveryReasonCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_deferred_delivery_not_performed
 * @constant
 * @type {number}
 */
export const deferred_delivery_not_performed: NonDeliveryReasonCode = NonDeliveryReasonCode_deferred_delivery_not_performed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_transfer_failure_for_security_reason
 * @constant
 * @type {number}
 */
export const NonDeliveryReasonCode_transfer_failure_for_security_reason: NonDeliveryReasonCode = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryReasonCode_transfer_failure_for_security_reason
 * @constant
 * @type {number}
 */
export const transfer_failure_for_security_reason: NonDeliveryReasonCode = NonDeliveryReasonCode_transfer_failure_for_security_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NonDeliveryReasonCode = $._decodeInteger;


export const _encode_NonDeliveryReasonCode = $._encodeInteger;


/* eslint-enable */
