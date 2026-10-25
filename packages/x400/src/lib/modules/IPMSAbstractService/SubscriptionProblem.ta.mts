/* eslint-disable */
import {
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
 * @summary SubscriptionProblem
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriptionProblem  ::=  ENUMERATED {
 *   ipms-eos-not-subscribed(0), mts-eos-not-subscribed(1)}
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
 */
export const SubscriptionProblem = _enum_for_SubscriptionProblem;

/**
 * @summary SubscriptionProblem_ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_ipms_eos_not_subscribed =
    SubscriptionProblem.ipms_eos_not_subscribed satisfies SubscriptionProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipms_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const ipms_eos_not_subscribed =
    SubscriptionProblem.ipms_eos_not_subscribed satisfies SubscriptionProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SubscriptionProblem_mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const SubscriptionProblem_mts_eos_not_subscribed =
    SubscriptionProblem.mts_eos_not_subscribed satisfies SubscriptionProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mts_eos_not_subscribed
 * @constant
 * @type {number}
 */
export const mts_eos_not_subscribed =
    SubscriptionProblem.mts_eos_not_subscribed satisfies SubscriptionProblem; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_SubscriptionProblem(el: _Element): SubscriptionProblem {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case SubscriptionProblem.ipms_eos_not_subscribed: return SubscriptionProblem.ipms_eos_not_subscribed;
        case SubscriptionProblem.mts_eos_not_subscribed: return SubscriptionProblem.mts_eos_not_subscribed;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for SubscriptionProblem.',
                el,
            );
    }
}


export const _encode_SubscriptionProblem: $.ASN1Encoder<SubscriptionProblem> = $._encodeEnumerated as $.ASN1Encoder<SubscriptionProblem>;


/* eslint-enable */
