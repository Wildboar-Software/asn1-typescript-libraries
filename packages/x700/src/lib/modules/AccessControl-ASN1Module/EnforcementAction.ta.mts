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
 * @summary EnforcementAction
 * @description
 *
 * Action taken by the access control enforcement function
 * (AEF) when a rule is satisfied. Attribute of `rule`;
 * default `denyWithResponse`. If `allow`, access is
 * permitted; otherwise this value is the denial response
 * returned to the initiator. On invalid initiator-bound ACI,
 * a specified `denyWithFalseResponse` is changed to abort
 * the association. If unspecified, default denial is a
 * matter of local policy; no-response or abort is
 * recommended for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.3.1.1, A.5.12.
 *
 * Values:
 * - `denyWithResponse` (0): return access-denied if the
 *   operation was confirmed-mode.
 * - `denyWithoutResponse` (1): return no response.
 * - `abortAssociation` (2): invoke ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): return incorrect
 *   management information if confirmed-mode.
 * - `allow` (4): grant access.
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
 * Action taken by the access control enforcement function
 * (AEF) when a rule is satisfied. Attribute of `rule`;
 * default `denyWithResponse`. If `allow`, access is
 * permitted; otherwise this value is the denial response
 * returned to the initiator. On invalid initiator-bound ACI,
 * a specified `denyWithFalseResponse` is changed to abort
 * the association. If unspecified, default denial is a
 * matter of local policy; no-response or abort is
 * recommended for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.3.1.1, A.5.12.
 *
 * Values:
 * - `denyWithResponse` (0): return access-denied if the
 *   operation was confirmed-mode.
 * - `denyWithoutResponse` (1): return no response.
 * - `abortAssociation` (2): invoke ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): return incorrect
 *   management information if confirmed-mode.
 * - `allow` (4): grant access.
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
 * Action taken by the access control enforcement function
 * (AEF) when a rule is satisfied. Attribute of `rule`;
 * default `denyWithResponse`. If `allow`, access is
 * permitted; otherwise this value is the denial response
 * returned to the initiator. On invalid initiator-bound ACI,
 * a specified `denyWithFalseResponse` is changed to abort
 * the association. If unspecified, default denial is a
 * matter of local policy; no-response or abort is
 * recommended for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.3.1.1, A.5.12.
 *
 * Values:
 * - `denyWithResponse` (0): return access-denied if the
 *   operation was confirmed-mode.
 * - `denyWithoutResponse` (1): return no response.
 * - `abortAssociation` (2): invoke ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): return incorrect
 *   management information if confirmed-mode.
 * - `allow` (4): grant access.
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
 * @description
 *
 * Return the access-denied error if the operation was
 * requested in confirmed mode. Default denial action and
 * default of `deny`. X.741 §7.4.6.1, A.5.12.
 *
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithResponse
 * @description
 *
 * Return the access-denied error if the operation was
 * requested in confirmed mode. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithResponse: EnforcementAction =
    EnforcementAction.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_denyWithoutResponse
 * @description
 *
 * Return no response to the initiator. Recommended (with
 * abort) for least privilege. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithoutResponse
 * @description
 *
 * Return no response to the initiator. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: EnforcementAction =
    EnforcementAction.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_abortAssociation
 * @description
 *
 * Invoke the ACSE A-ABORT procedure. Recommended (with
 * no-response) for least privilege. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const EnforcementAction_abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortAssociation
 * @description
 *
 * Invoke the ACSE A-ABORT procedure. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const abortAssociation: EnforcementAction =
    EnforcementAction.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_denyWithFalseResponse
 * @description
 *
 * Return incorrect management information if confirmed-mode.
 * On invalid initiator-bound ACI this is changed to abort
 * association. X.741 §7.4.6.1–§7.4.6.2.
 *
 * @constant
 * @type {number}
 */
export const EnforcementAction_denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithFalseResponse
 * @description
 *
 * Return incorrect management information if confirmed-mode.
 * X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: EnforcementAction =
    EnforcementAction.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EnforcementAction_allow
 * @description
 *
 * Grant access; the AEF permits the management operation.
 * Only on `EnforcementAction`, not on `DenialResponse`.
 * X.741 A.2.3, A.5.12.
 *
 * @constant
 * @type {number}
 */
export const EnforcementAction_allow: EnforcementAction =
    EnforcementAction.allow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allow
 * @description
 *
 * Grant access. X.741 A.2.3, A.5.12.
 *
 * @constant
 * @type {number}
 */
export const allow: EnforcementAction =
    EnforcementAction.allow; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EnforcementAction = $._decodeEnumerated;


export const _encode_EnforcementAction = $._encodeEnumerated;


/* eslint-enable */
