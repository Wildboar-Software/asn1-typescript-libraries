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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceError_errorClass_service_preempt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-service-preempt ::= INTEGER {
 *     other (0),
 *     timeout (1),
 *     deadlock (2),
 *     cancel (3)
 * } (0..3)
 * ```
 */
export
type ServiceError_errorClass_service_preempt = INTEGER;

/**
 * @summary ServiceError_errorClass_service_preempt_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_other: ServiceError_errorClass_service_preempt = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_timeout
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_timeout: ServiceError_errorClass_service_preempt = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_timeout
 * @constant
 * @type {number}
 */
export
const timeout: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_timeout; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_deadlock
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_deadlock: ServiceError_errorClass_service_preempt = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_deadlock
 * @constant
 * @type {number}
 */
export
const deadlock: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_deadlock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_cancel
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_preempt_cancel: ServiceError_errorClass_service_preempt = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_preempt_cancel
 * @constant
 * @type {number}
 */
export
const cancel: ServiceError_errorClass_service_preempt = ServiceError_errorClass_service_preempt_cancel; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_service_preempt = (el: _Element): ServiceError_errorClass_service_preempt => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("ServiceError_errorClass_service_preempt violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ServiceError_errorClass_service_preempt = $._encodeInteger;


/* eslint-enable */
