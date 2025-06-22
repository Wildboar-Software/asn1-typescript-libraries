/* eslint-disable */
import {
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
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TimeDifference_sign {
    positive = 0,
    negative = 1,
}

/**
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type TimeDifference_sign = _enum_for_TimeDifference_sign;

/**
 * @summary TimeDifference_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeDifference-sign ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const TimeDifference_sign = _enum_for_TimeDifference_sign;

/**
 * @summary TimeDifference_sign_positive
 * @constant
 * @type {number}
 */
export const TimeDifference_sign_positive: TimeDifference_sign =
    TimeDifference_sign.positive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary positive
 * @constant
 * @type {number}
 */
export const positive: TimeDifference_sign =
    TimeDifference_sign.positive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TimeDifference_sign_negative
 * @constant
 * @type {number}
 */
export const TimeDifference_sign_negative: TimeDifference_sign =
    TimeDifference_sign.negative; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary negative
 * @constant
 * @type {number}
 */
export const negative: TimeDifference_sign =
    TimeDifference_sign.negative; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TimeDifference_sign = $._decodeEnumerated;


export const _encode_TimeDifference_sign = $._encodeEnumerated;


/* eslint-enable */
