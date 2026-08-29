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
 * @summary DenialResponse
 * @description
 *
 * Denial response returned when access is denied by the
 * **default** rule (`defaultDenialResponse` on access
 * control rules). Same four denial values as
 * `EnforcementAction` without `allow`. Cor.2 removed the
 * erroneous `::= EnforcementAction` from this production.
 * ITU-T Rec. X.741 (04/95)
 * [§A.5.9](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.2, §7.4.6.1; Cor.2 (06/98)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-199806-I).
 *
 * Values:
 * - `denyWithResponse` (0): access-denied (confirmed).
 * - `denyWithoutResponse` (1): no response.
 * - `abortAssociation` (2): ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): incorrect information
 *   (confirmed).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DenialResponse {
    denyWithResponse = 0,
    denyWithoutResponse = 1,
    abortAssociation = 2,
    denyWithFalseResponse = 3,
}

/**
 * @summary DenialResponse
 * @description
 *
 * Denial response returned when access is denied by the
 * **default** rule (`defaultDenialResponse` on access
 * control rules). Same four denial values as
 * `EnforcementAction` without `allow`. Cor.2 removed the
 * erroneous `::= EnforcementAction` from this production.
 * ITU-T Rec. X.741 (04/95)
 * [§A.5.9](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.2, §7.4.6.1; Cor.2 (06/98)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-199806-I).
 *
 * Values:
 * - `denyWithResponse` (0): access-denied (confirmed).
 * - `denyWithoutResponse` (1): no response.
 * - `abortAssociation` (2): ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): incorrect information
 *   (confirmed).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export type DenialResponse = _enum_for_DenialResponse;

/**
 * @summary DenialResponse
 * @description
 *
 * Denial response returned when access is denied by the
 * **default** rule (`defaultDenialResponse` on access
 * control rules). Same four denial values as
 * `EnforcementAction` without `allow`. Cor.2 removed the
 * erroneous `::= EnforcementAction` from this production.
 * ITU-T Rec. X.741 (04/95)
 * [§A.5.9](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.2, §7.4.6.1; Cor.2 (06/98)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-199806-I).
 *
 * Values:
 * - `denyWithResponse` (0): access-denied (confirmed).
 * - `denyWithoutResponse` (1): no response.
 * - `abortAssociation` (2): ACSE A-ABORT.
 * - `denyWithFalseResponse` (3): incorrect information
 *   (confirmed).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export const DenialResponse = _enum_for_DenialResponse;

/**
 * @summary DenialResponse_denyWithResponse
 * @description
 *
 * Access-denied error (confirmed-mode). Used as the default
 * denial response of the default rule. X.741 §7.4.6.1,
 * A.5.9.
 *
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithResponse
 * @description
 *
 * Access-denied error (confirmed-mode). X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_denyWithoutResponse
 * @description
 *
 * No response returned to the initiator. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithoutResponse
 * @description
 *
 * No response returned to the initiator. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_abortAssociation
 * @description
 *
 * Invoke ACSE A-ABORT. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const DenialResponse_abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortAssociation
 * @description
 *
 * Invoke ACSE A-ABORT. X.741 §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_denyWithFalseResponse
 * @description
 *
 * Incorrect management information (confirmed-mode). X.741
 * §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithFalseResponse
 * @description
 *
 * Incorrect management information (confirmed-mode). X.741
 * §7.4.6.1.
 *
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DenialResponse = $._decodeEnumerated;


export const _encode_DenialResponse = $._encodeEnumerated;


/* eslint-enable */
