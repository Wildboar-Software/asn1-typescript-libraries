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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION DeliveryError */
/**
 * @summary DeliveryError
 * @description
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
/* END_OF_SYMBOL_DEFINITION DeliveryError */

/* START_OF_SYMBOL_DEFINITION DeliveryError_delivery_control_violation */
/**
 * @summary DeliveryError_delivery_control_violation
 * @constant
 * @type {number}
 */
export const DeliveryError_delivery_control_violation: DeliveryError = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryError_delivery_control_violation */

/* START_OF_SYMBOL_DEFINITION delivery_control_violation */
/**
 * @summary DeliveryError_delivery_control_violation
 * @constant
 * @type {number}
 */
export const delivery_control_violation: DeliveryError = DeliveryError_delivery_control_violation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_control_violation */

/* START_OF_SYMBOL_DEFINITION DeliveryError_control_violates_registration */
/**
 * @summary DeliveryError_control_violates_registration
 * @constant
 * @type {number}
 */
export const DeliveryError_control_violates_registration: DeliveryError = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryError_control_violates_registration */

/* START_OF_SYMBOL_DEFINITION control_violates_registration */
/**
 * @summary DeliveryError_control_violates_registration
 * @constant
 * @type {number}
 */
export const control_violates_registration: DeliveryError = DeliveryError_control_violates_registration; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION control_violates_registration */

/* START_OF_SYMBOL_DEFINITION DeliveryError_security_error */
/**
 * @summary DeliveryError_security_error
 * @constant
 * @type {number}
 */
export const DeliveryError_security_error: DeliveryError = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryError_security_error */

/* START_OF_SYMBOL_DEFINITION security_error */
/**
 * @summary DeliveryError_security_error
 * @constant
 * @type {number}
 */
export const security_error: DeliveryError = DeliveryError_security_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_error */

/* START_OF_SYMBOL_DEFINITION DeliveryError_unsupported_critical_function */
/**
 * @summary DeliveryError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const DeliveryError_unsupported_critical_function: DeliveryError = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryError_unsupported_critical_function */

/* START_OF_SYMBOL_DEFINITION unsupported_critical_function */
/**
 * @summary DeliveryError_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function: DeliveryError = DeliveryError_unsupported_critical_function; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupported_critical_function */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryError */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryError */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryError */
export const _decode_DeliveryError = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryError */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryError */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryError */
export const _encode_DeliveryError = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryError */

/* eslint-enable */
