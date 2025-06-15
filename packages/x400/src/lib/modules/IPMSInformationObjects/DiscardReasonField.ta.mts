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

/* START_OF_SYMBOL_DEFINITION _enum_for_DiscardReasonField */
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
 * ```@enum {number}
 */
export enum _enum_for_DiscardReasonField {
    ipm_expired = 0,
    ipm_obsoleted = 1,
    user_subscription_terminated = 2,
    not_used = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField */
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
 * ```@enum {number}
 */
export type DiscardReasonField = _enum_for_DiscardReasonField;
/* END_OF_SYMBOL_DEFINITION DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField */
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
 * ```@enum {number}
 */
export const DiscardReasonField = _enum_for_DiscardReasonField;
/* END_OF_SYMBOL_DEFINITION DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField_ipm_expired */
/**
 * @summary DiscardReasonField_ipm_expired
 * @constant
 * @type {number}
 */
export const DiscardReasonField_ipm_expired: DiscardReasonField =
    DiscardReasonField.ipm_expired; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DiscardReasonField_ipm_expired */

/* START_OF_SYMBOL_DEFINITION ipm_expired */
/**
 * @summary ipm_expired
 * @constant
 * @type {number}
 */
export const ipm_expired: DiscardReasonField =
    DiscardReasonField.ipm_expired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_expired */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField_ipm_obsoleted */
/**
 * @summary DiscardReasonField_ipm_obsoleted
 * @constant
 * @type {number}
 */
export const DiscardReasonField_ipm_obsoleted: DiscardReasonField =
    DiscardReasonField.ipm_obsoleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DiscardReasonField_ipm_obsoleted */

/* START_OF_SYMBOL_DEFINITION ipm_obsoleted */
/**
 * @summary ipm_obsoleted
 * @constant
 * @type {number}
 */
export const ipm_obsoleted: DiscardReasonField =
    DiscardReasonField.ipm_obsoleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_obsoleted */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField_user_subscription_terminated */
/**
 * @summary DiscardReasonField_user_subscription_terminated
 * @constant
 * @type {number}
 */
export const DiscardReasonField_user_subscription_terminated: DiscardReasonField =
    DiscardReasonField.user_subscription_terminated; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DiscardReasonField_user_subscription_terminated */

/* START_OF_SYMBOL_DEFINITION user_subscription_terminated */
/**
 * @summary user_subscription_terminated
 * @constant
 * @type {number}
 */
export const user_subscription_terminated: DiscardReasonField =
    DiscardReasonField.user_subscription_terminated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION user_subscription_terminated */

/* START_OF_SYMBOL_DEFINITION DiscardReasonField_not_used */
/**
 * @summary DiscardReasonField_not_used
 * @constant
 * @type {number}
 */
export const DiscardReasonField_not_used: DiscardReasonField =
    DiscardReasonField.not_used; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DiscardReasonField_not_used */

/* START_OF_SYMBOL_DEFINITION not_used */
/**
 * @summary not_used
 * @constant
 * @type {number}
 */
export const not_used: DiscardReasonField =
    DiscardReasonField.not_used; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION not_used */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardReasonField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION _decode_DiscardReasonField */
export const _decode_DiscardReasonField = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardReasonField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DiscardReasonField */

/* START_OF_SYMBOL_DEFINITION _encode_DiscardReasonField */
export const _encode_DiscardReasonField = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DiscardReasonField */

/* eslint-enable */
