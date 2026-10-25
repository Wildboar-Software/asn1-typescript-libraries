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
 * @summary RefusalReason
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusalReason  ::=  INTEGER {
 *   facility-unavailable(0), facility-not-subscribed(1),
 *   parameter-unacceptable(2)}(0..ub-integer-options)
 * ```
 */
export type RefusalReason = INTEGER;

/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_unavailable = 0 satisfies RefusalReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const facility_unavailable = RefusalReason_facility_unavailable satisfies RefusalReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_not_subscribed = 1 satisfies RefusalReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const facility_not_subscribed = RefusalReason_facility_not_subscribed satisfies RefusalReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const RefusalReason_parameter_unacceptable = 2 satisfies RefusalReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const parameter_unacceptable = RefusalReason_parameter_unacceptable satisfies RefusalReason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RefusalReason = $._decodeInteger;


export const _encode_RefusalReason = $._encodeInteger;


/* eslint-enable */
