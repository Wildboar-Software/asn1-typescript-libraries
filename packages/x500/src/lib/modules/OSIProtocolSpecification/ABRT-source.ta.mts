/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const acse_service_user: ABRT_source = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const acse_service_provider: ABRT_source = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ABRT_source = $._decodeInteger;


export const _encode_ABRT_source = $._encodeInteger;


/* eslint-enable */
