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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export enum _enum_for_SubscriptionProblem {
    ipms_eos_not_subscribed = 0,
    mts_eos_not_subscribed = 1,
}

/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export type SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```@enum {number}
 */
export const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_ipms_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.ipms_eos_not_subscribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const ipms_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.ipms_eos_not_subscribed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_mts_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.mts_eos_not_subscribed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const mts_eos_not_subscribed: SubscriptionProblem =
    SubscriptionProblem.mts_eos_not_subscribed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SubscriptionProblem = $._decodeEnumerated;


export const _encode_SubscriptionProblem = $._encodeEnumerated;


/* eslint-enable */
