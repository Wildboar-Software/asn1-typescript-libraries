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
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_EnforcementAction {
    denyWithResponse = 0,
    denyWithoutResponse = 1,
    abortAssociation = 2,
    denyWithFalseResponse = 3,
    allow = 4,
}

/**
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```
 *
 * @enum {number}
 */
export type EnforcementAction = _enum_for_EnforcementAction;

/**
 * @summary EnforcementAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnforcementAction  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3), allow(4)}
 * ```
 *
 * @enum {number}
 */
export const EnforcementAction = _enum_for_EnforcementAction;

/**
 * @summary EnforcementAction_denyWithResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithResponse
 * @constant
 * @type {number}
 */
export const denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_denyWithoutResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithoutResponse
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_abortAssociation
 * @constant
 * @type {number}
 */
export const EnforcementAction_abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortAssociation
 * @constant
 * @type {number}
 */
export const abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_allow
 * @constant
 * @type {number}
 */
export const EnforcementAction_allow: EnforcementAction =
    EnforcementAction.allow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow
 * @constant
 * @type {number}
 */
export const allow: EnforcementAction =
    EnforcementAction.allow; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EnforcementAction = $._decodeEnumerated;


export const _encode_EnforcementAction = $._encodeEnumerated;


/* eslint-enable */
