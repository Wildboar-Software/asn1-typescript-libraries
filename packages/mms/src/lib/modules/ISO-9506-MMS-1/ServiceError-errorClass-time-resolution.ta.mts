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
 * @summary ServiceError_errorClass_time_resolution
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-time-resolution ::= INTEGER {
 *     other (0),
 *     unsupportable-time-resolution (1)
 * } (0..1)
 * ```
 */
export
type ServiceError_errorClass_time_resolution = INTEGER;

/**
 * @summary ServiceError_errorClass_time_resolution_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_time_resolution_other: ServiceError_errorClass_time_resolution = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_time_resolution_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_time_resolution = ServiceError_errorClass_time_resolution_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_time_resolution_unsupportable_time_resolution
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_time_resolution_unsupportable_time_resolution: ServiceError_errorClass_time_resolution = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_time_resolution_unsupportable_time_resolution
 * @constant
 * @type {number}
 */
export
const unsupportable_time_resolution: ServiceError_errorClass_time_resolution = ServiceError_errorClass_time_resolution_unsupportable_time_resolution; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_time_resolution = (el: _Element): ServiceError_errorClass_time_resolution => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("ServiceError_errorClass_time_resolution violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ServiceError_errorClass_time_resolution = $._encodeInteger;


/* eslint-enable */
