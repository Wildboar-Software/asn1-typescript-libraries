/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ABRT_source
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-source  ::=  INTEGER {
 *   acse-service-user     (0),
 *   acse-service-provider (1) }
 * ```
 */
export type ABRT_source = INTEGER;

/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_user = 0 satisfies ABRT_source; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const acse_service_user = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_provider = 1 satisfies ABRT_source; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const acse_service_provider = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ABRT_source = $._decodeInteger;


export const _encode_ABRT_source = $._encodeInteger;


/* eslint-enable */
