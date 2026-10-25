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
 * @summary AutoActionRequestProblem
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§6).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionRequestProblem  ::=  INTEGER {
 *   unavailable-auto-action-type(0),
 *   auto-action-type-not-subscribed(1),
 *   -- 1994 extension
 *   not-willing-to-perform(2)}(0..ub-error-reasons)
 * ```
 */
export type AutoActionRequestProblem = INTEGER;

/**
 * @summary AutoActionRequestProblem_unavailable_auto_action_type
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_unavailable_auto_action_type = 0 satisfies AutoActionRequestProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AutoActionRequestProblem_unavailable_auto_action_type
 * @constant
 * @type {number}
 */
export const unavailable_auto_action_type = AutoActionRequestProblem_unavailable_auto_action_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AutoActionRequestProblem_auto_action_type_not_subscribed
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_auto_action_type_not_subscribed = 1 satisfies AutoActionRequestProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AutoActionRequestProblem_auto_action_type_not_subscribed
 * @constant
 * @type {number}
 */
export const auto_action_type_not_subscribed = AutoActionRequestProblem_auto_action_type_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AutoActionRequestProblem_not_willing_to_perform
 * @constant
 * @type {number}
 */
export const AutoActionRequestProblem_not_willing_to_perform = 2 satisfies AutoActionRequestProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AutoActionRequestProblem_not_willing_to_perform
 * @constant
 * @type {number}
 */
export const not_willing_to_perform = AutoActionRequestProblem_not_willing_to_perform; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AutoActionRequestProblem = $._decodeInteger;


export const _encode_AutoActionRequestProblem = $._encodeInteger;


/* eslint-enable */
