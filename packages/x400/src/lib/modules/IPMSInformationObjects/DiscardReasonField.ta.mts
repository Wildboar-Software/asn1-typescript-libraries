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
 * @summary DiscardReasonField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReasonField  ::=  ENUMERATED {
 *   ipm-expired(0), ipm-obsoleted(1), user-subscription-terminated(2),
 *   not-used(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DiscardReasonField {
    ipm_expired = 0,
    ipm_obsoleted = 1,
    user_subscription_terminated = 2,
    not_used = 3,
}

/**
 * @summary DiscardReasonField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReasonField  ::=  ENUMERATED {
 *   ipm-expired(0), ipm-obsoleted(1), user-subscription-terminated(2),
 *   not-used(3)}
 * ```
 *
 * @enum {number}
 */
export type DiscardReasonField = _enum_for_DiscardReasonField;

/**
 * @summary DiscardReasonField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReasonField  ::=  ENUMERATED {
 *   ipm-expired(0), ipm-obsoleted(1), user-subscription-terminated(2),
 *   not-used(3)}
 * ```
 *
 * @enum {number}
 */
export const DiscardReasonField = _enum_for_DiscardReasonField;

/**
 * @summary DiscardReasonField_ipm_expired
 * @constant
 * @type {number}
 */
export const DiscardReasonField_ipm_expired: DiscardReasonField =
    DiscardReasonField.ipm_expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm_expired
 * @constant
 * @type {number}
 */
export const ipm_expired: DiscardReasonField =
    DiscardReasonField.ipm_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiscardReasonField_ipm_obsoleted
 * @constant
 * @type {number}
 */
export const DiscardReasonField_ipm_obsoleted: DiscardReasonField =
    DiscardReasonField.ipm_obsoleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ipm_obsoleted
 * @constant
 * @type {number}
 */
export const ipm_obsoleted: DiscardReasonField =
    DiscardReasonField.ipm_obsoleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiscardReasonField_user_subscription_terminated
 * @constant
 * @type {number}
 */
export const DiscardReasonField_user_subscription_terminated: DiscardReasonField =
    DiscardReasonField.user_subscription_terminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_subscription_terminated
 * @constant
 * @type {number}
 */
export const user_subscription_terminated: DiscardReasonField =
    DiscardReasonField.user_subscription_terminated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiscardReasonField_not_used
 * @constant
 * @type {number}
 */
export const DiscardReasonField_not_used: DiscardReasonField =
    DiscardReasonField.not_used; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_used
 * @constant
 * @type {number}
 */
export const not_used: DiscardReasonField =
    DiscardReasonField.not_used; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DiscardReasonField = $._decodeEnumerated;


export const _encode_DiscardReasonField = $._encodeEnumerated;


/* eslint-enable */
