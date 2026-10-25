/* eslint-disable */
import {
  type ENUMERATED,
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

export const _enum_for_ABRT_diagnostic = {
  no_reason_given: 1,
  protocol_error: 2,
  authentication_mechanism_name_not_recognized: 3,
  authentication_mechanism_name_required: 4,
  authentication_failure: 5,
  authentication_required: 6,
} as const;

export type _enum_for_ABRT_diagnostic =
  (typeof _enum_for_ABRT_diagnostic)[keyof typeof _enum_for_ABRT_diagnostic];

/**
 * @summary ABRT_diagnostic
 * @description
 *
 * A-ABORT Diagnostic (Authentication FU; omit if only Kernel).
 * `no-reason-given` (1), `protocol-error` (2),
 * `authentication-mechanism-name-not-recognized` (3),
 * `authentication-mechanism-name-required` (4),
 * `authentication-failure` (5), `authentication-required` (6). Annex B
 * password mechanism uses 3, 4, and 5. ITU-T Rec. X.217 (1995)
 * §9.3.1.2; X.227 bis (1998) Annex B.
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
 * ```
 *
 * @enum {number}
 */
export type ABRT_diagnostic = _enum_for_ABRT_diagnostic | ENUMERATED;

/**
 * @summary ABRT_diagnostic_no_reason_given
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_no_reason_given: 1 = _enum_for_ABRT_diagnostic.no_reason_given; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: 1 = ABRT_diagnostic_no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_protocol_error
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_protocol_error: 2 = _enum_for_ABRT_diagnostic.protocol_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_error
 * @constant
 * @type {number}
 */
export const protocol_error: 2 = ABRT_diagnostic_protocol_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_not_recognized: 3 = _enum_for_ABRT_diagnostic.authentication_mechanism_name_not_recognized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_not_recognized: 3 = ABRT_diagnostic_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_required: 4 = _enum_for_ABRT_diagnostic.authentication_mechanism_name_required; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_required: 4 = ABRT_diagnostic_authentication_mechanism_name_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_failure
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_failure: 5 = _enum_for_ABRT_diagnostic.authentication_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: 5 = ABRT_diagnostic_authentication_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ABRT_diagnostic_authentication_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_required: 6 = _enum_for_ABRT_diagnostic.authentication_required; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authentication_required
 * @constant
 * @type {number}
 */
export const authentication_required: 6 = ABRT_diagnostic_authentication_required; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ABRT_diagnostic: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_ABRT_diagnostic: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
