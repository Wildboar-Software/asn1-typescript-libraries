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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  INTEGER {busy(0), unavailable(1), unwilling-to-perform(2)
 * }(0..ub-error-reasons)
 * ```
 */
export type ServiceProblem = INTEGER;

/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy: ServiceProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const busy: ServiceProblem = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const unavailable: ServiceProblem = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwilling_to_perform: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const unwilling_to_perform: ServiceProblem = ServiceProblem_unwilling_to_perform; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceProblem = $._decodeInteger;


export const _encode_ServiceProblem = $._encodeInteger;


/* eslint-enable */
