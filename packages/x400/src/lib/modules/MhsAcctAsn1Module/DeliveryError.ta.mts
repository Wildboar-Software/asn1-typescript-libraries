/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary DeliveryError
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryError  ::=  INTEGER {
 *   delivery-control-violation(1), control-violates-registration(2),
 *   security-error(3), --  has parameters
 *   unsupported-critical-function(4)}
 * ```
 */
export type DeliveryError = INTEGER;

/**
 * @summary DeliveryError_delivery_control_violation
 * @constant
 * @type {number}
 */
export const DeliveryError_delivery_control_violation = 1 satisfies DeliveryError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_delivery_control_violation
 * @constant
 * @type {number}
 */
export const delivery_control_violation = DeliveryError_delivery_control_violation satisfies DeliveryError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_control_violates_registration
 * @constant
 * @type {number}
 */
export const DeliveryError_control_violates_registration = 2 satisfies DeliveryError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_control_violates_registration
 * @constant
 * @type {number}
 */
export const control_violates_registration = DeliveryError_control_violates_registration satisfies DeliveryError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_security_error
 * @constant
 * @type {number}
 */
export const DeliveryError_security_error = 3 satisfies DeliveryError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_security_error
 * @constant
 * @type {number}
 */
export const security_error = DeliveryError_security_error satisfies DeliveryError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const DeliveryError_unsupported_critical_function = 4 satisfies DeliveryError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeliveryError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function = DeliveryError_unsupported_critical_function satisfies DeliveryError; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DeliveryError = $._decodeInteger;


export const _encode_DeliveryError = $._encodeInteger;


/* eslint-enable */
