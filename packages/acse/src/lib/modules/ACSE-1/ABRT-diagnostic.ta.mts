/* eslint-disable */
import {
  ENUMERATED,
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

export enum _enum_for_ABRT_diagnostic {
  no_reason_given = 1,
  protocol_error = 2,
  authentication_mechanism_name_not_recognized = 3,
  authentication_mechanism_name_required = 4,
  authentication_failure = 5,
  authentication_required = 6,
}

/**
 * @summary ABRT_diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-diagnostic  ::=  ENUMERATED {
 *   no-reason-given(1), protocol-error(2),
 *   authentication-mechanism-name-not-recognized(3),
 *   authentication-mechanism-name-required(4), authentication-failure(5),
 *   authentication-required(6), ...
 *   }
 *  {number}
 */
export type ABRT_diagnostic = _enum_for_ABRT_diagnostic | ENUMERATED;

/**
 * @summary ABRT_diagnostic_no_reason_given
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_no_reason_given: ABRT_diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: ABRT_diagnostic = ABRT_diagnostic_no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_protocol_error
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_protocol_error: ABRT_diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_error
 * @constant
 * @type {number}
 */
export const protocol_error: ABRT_diagnostic = ABRT_diagnostic_protocol_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_not_recognized: ABRT_diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_not_recognized: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_required: ABRT_diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_required: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_failure
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_failure: ABRT_diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: ABRT_diagnostic = ABRT_diagnostic_authentication_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_required: ABRT_diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_required
 * @constant
 * @type {number}
 */
export const authentication_required: ABRT_diagnostic = ABRT_diagnostic_authentication_required; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ABRT_diagnostic = $._decodeEnumerated;


export const _encode_ABRT_diagnostic = $._encodeEnumerated;

