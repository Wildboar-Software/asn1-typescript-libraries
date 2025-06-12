/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import {
  Associate_source_diagnostic_acse_service_user,
  Associate_source_diagnostic_acse_service_user_null_ /* IMPORTED_LONG_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_application_context_name_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
  application_context_name_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  calling_AP_title_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  calling_AP_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  calling_AE_qualifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  calling_AE_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  called_AP_title_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  called_AP_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  called_AE_qualifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  called_AE_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
  authentication_mechanism_name_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required /* IMPORTED_LONG_NAMED_INTEGER */,
  authentication_mechanism_name_required /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_authentication_failure /* IMPORTED_LONG_NAMED_INTEGER */,
  authentication_failure /* IMPORTED_SHORT_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_user_authentication_required /* IMPORTED_LONG_NAMED_INTEGER */,
  authentication_required /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Associate_source_diagnostic_acse_service_user,
  _encode_Associate_source_diagnostic_acse_service_user,
} from '../ACSE-1/Associate-source-diagnostic-acse-service-user.ta.js';
import {
  Associate_source_diagnostic_acse_service_provider,
  Associate_source_diagnostic_acse_service_provider_null_ /* IMPORTED_LONG_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_provider_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */,
  Associate_source_diagnostic_acse_service_provider_no_common_acse_version /* IMPORTED_LONG_NAMED_INTEGER */,
  no_common_acse_version /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_Associate_source_diagnostic_acse_service_provider,
  _encode_Associate_source_diagnostic_acse_service_provider,
} from '../ACSE-1/Associate-source-diagnostic-acse-service-provider.ta.js';

// Manually modified!
// For some reason, the integers were implicitly encoded.

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic */
/**
 * @summary Associate_source_diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic  ::=  CHOICE {
 *   acse-service-user
 *     [1]  INTEGER {null(0), no-reason-given(1),
 *                   application-context-name-not-supported(2),
 *                   calling-AP-title-not-recognized(3),
 *                   calling-AP-invocation-identifier-not-recognized(4),
 *                   calling-AE-qualifier-not-recognized(5),
 *                   calling-AE-invocation-identifier-not-recognized(6),
 *                   called-AP-title-not-recognized(7),
 *                   called-AP-invocation-identifier-not-recognized(8),
 *                   called-AE-qualifier-not-recognized(9),
 *                   called-AE-invocation-identifier-not-recognized(10),
 *                   authentication-mechanism-name-not-recognized(11),
 *                   authentication-mechanism-name-required(12),
 *                   authentication-failure(13), authentication-required(14)}
 *                                                                     (0..14, ...),
 *   acse-service-provider
 *     [2]  INTEGER {null(0), no-reason-given(1), no-common-acse-version(2)}
 *                                                                     (0..2, ...)
 * }
 * ```
 */
export type Associate_source_diagnostic =
  | {
      acse_service_user: Associate_source_diagnostic_acse_service_user;
    } /* CHOICE_ALT_ROOT */
  | {
      acse_service_provider: Associate_source_diagnostic_acse_service_provider;
    } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */
let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic(el: _Element) {
  if (!_cached_decoder_for_Associate_source_diagnostic) {
    _cached_decoder_for_Associate_source_diagnostic = $._decode_inextensible_choice<Associate_source_diagnostic>(
      {
        'CONTEXT 1': [
          'acse_service_user',
          $._decode_explicit<Associate_source_diagnostic_acse_service_user>(
            () => _decode_Associate_source_diagnostic_acse_service_user
          ),
        ],
        'CONTEXT 2': [
          'acse_service_provider',
          $._decode_explicit<Associate_source_diagnostic_acse_service_provider>(
            () => _decode_Associate_source_diagnostic_acse_service_provider
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_Associate_source_diagnostic(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */
let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */
/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic(
  value: Associate_source_diagnostic,
  elGetter: $.ASN1Encoder<Associate_source_diagnostic>
) {
  if (!_cached_encoder_for_Associate_source_diagnostic) {
    _cached_encoder_for_Associate_source_diagnostic = $._encode_choice<Associate_source_diagnostic>(
      {
        acse_service_user: $._encode_explicit(
          _TagClass.context,
          1,
          () => _encode_Associate_source_diagnostic_acse_service_user,
          $.BER
        ),
        acse_service_provider: $._encode_explicit(
          _TagClass.context,
          2,
          () => _encode_Associate_source_diagnostic_acse_service_provider,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */

/* eslint-enable */
