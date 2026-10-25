/* eslint-disable */
import {
  type INTEGER,
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
 * @summary Associate_source_diagnostic_acse_service_user
 * @description
 *
 * Diagnostic when Result source is ACSE service-user: `null` (0, ACPM
 * fills this if the response omitted Diagnostic), `no-reason-given`
 * (1), `application-context-name-not-supported` (2), calling/called
 * AP-title, AP-invocation-identifier, AE-qualifier, and
 * AE-invocation-identifier not-recognized (3–10), and authentication
 * mechanism-name not-recognized / required, authentication-failure,
 * authentication-required (11–14). ITU-T Rec. X.217 (1995) §9.1.1.21;
 * X.217 bis (1998) §8.1.1.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-acse-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_acse_service_user = INTEGER;

/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_null_: 0 = 0 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export const null_: 0 = Associate_source_diagnostic_acse_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_no_reason_given: 1 = 1 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: 1 = Associate_source_diagnostic_acse_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: 2 = 2 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const application_context_name_not_supported: 2 = Associate_source_diagnostic_acse_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized: 3 = 3 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AP_title_not_recognized: 3 = Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized: 4 = 4 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AP_invocation_identifier_not_recognized: 4 = Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized: 5 = 5 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AE_qualifier_not_recognized: 5 = Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized: 6 = 6 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AE_invocation_identifier_not_recognized: 6 = Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized: 7 = 7 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const called_AP_title_not_recognized: 7 = Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized: 8 = 8 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AP_invocation_identifier_not_recognized: 8 = Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized: 9 = 9 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AE_qualifier_not_recognized: 9 = Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized: 10 = 10 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AE_invocation_identifier_not_recognized: 10 = Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized: 11 = 11 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_not_recognized: 11 = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required: 12 = 12 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_required: 12 = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_failure: 13 = 13 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: 13 = Associate_source_diagnostic_acse_service_user_authentication_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_required: 14 = 14 satisfies Associate_source_diagnostic_acse_service_user; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export const authentication_required: 14 = Associate_source_diagnostic_acse_service_user_authentication_required; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Decoder<Associate_source_diagnostic_acse_service_user> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_user
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_acse_service_user} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_acse_service_user(
  el: _Element
): Associate_source_diagnostic_acse_service_user {
  if (!_cached_decoder_for_Associate_source_diagnostic_acse_service_user) {
    _cached_decoder_for_Associate_source_diagnostic_acse_service_user =
      $._decodeInteger;
  }
  return _cached_decoder_for_Associate_source_diagnostic_acse_service_user(el);
}

let _cached_encoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user> | null = null;

/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_user into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_user, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_acse_service_user(
  value: Associate_source_diagnostic_acse_service_user,
  elGetter: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user>
): _Element {
  if (!_cached_encoder_for_Associate_source_diagnostic_acse_service_user) {
    _cached_encoder_for_Associate_source_diagnostic_acse_service_user =
      $._encodeInteger;
  }
  return _cached_encoder_for_Associate_source_diagnostic_acse_service_user(
    value,
    elGetter
  );
}


/* eslint-enable */
