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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user */
/**
 * @summary Associate_source_diagnostic_acse_service_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-acse-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_acse_service_user = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_null_ */
/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_null_: Associate_source_diagnostic_acse_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_null_ */

/* START_OF_SYMBOL_DEFINITION null_ */
/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export const null_: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION null_ */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_no_reason_given */
/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_no_reason_given: Associate_source_diagnostic_acse_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_no_reason_given */

/* START_OF_SYMBOL_DEFINITION no_reason_given */
/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reason_given */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_application_context_name_not_supported */
/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_application_context_name_not_supported */

/* START_OF_SYMBOL_DEFINITION application_context_name_not_supported */
/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION application_context_name_not_supported */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized */

/* START_OF_SYMBOL_DEFINITION calling_AP_title_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION calling_AP_title_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION calling_AP_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION calling_AP_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION calling_AE_qualifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION calling_AE_qualifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION calling_AE_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION calling_AE_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized */

/* START_OF_SYMBOL_DEFINITION called_AP_title_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_AP_title_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION called_AP_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_AP_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION called_AE_qualifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_AE_qualifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION called_AE_invocation_identifier_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_AE_invocation_identifier_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized: Associate_source_diagnostic_acse_service_user = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized */

/* START_OF_SYMBOL_DEFINITION authentication_mechanism_name_not_recognized */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_mechanism_name_not_recognized */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required: Associate_source_diagnostic_acse_service_user = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required */

/* START_OF_SYMBOL_DEFINITION authentication_mechanism_name_required */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_required: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_mechanism_name_required; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_mechanism_name_required */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_failure */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_failure: Associate_source_diagnostic_acse_service_user = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_failure */

/* START_OF_SYMBOL_DEFINITION authentication_failure */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_failure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_failure */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_required */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_authentication_required: Associate_source_diagnostic_acse_service_user = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_user_authentication_required */

/* START_OF_SYMBOL_DEFINITION authentication_required */
/**
 * @summary Associate_source_diagnostic_acse_service_user_authentication_required
 * @constant
 * @type {number}
 */
export const authentication_required: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_authentication_required; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_required */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_acse_service_user */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Decoder<Associate_source_diagnostic_acse_service_user> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_acse_service_user */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_acse_service_user */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_user
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_acse_service_user} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_acse_service_user(
  el: _Element
) {
  if (!_cached_decoder_for_Associate_source_diagnostic_acse_service_user) {
    _cached_decoder_for_Associate_source_diagnostic_acse_service_user =
      $._decodeInteger;
  }
  return _cached_decoder_for_Associate_source_diagnostic_acse_service_user(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_acse_service_user */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_acse_service_user */
let _cached_encoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_acse_service_user */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_acse_service_user */
/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_user into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_user, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_acse_service_user(
  value: Associate_source_diagnostic_acse_service_user,
  elGetter: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user>
) {
  if (!_cached_encoder_for_Associate_source_diagnostic_acse_service_user) {
    _cached_encoder_for_Associate_source_diagnostic_acse_service_user =
      $._encodeInteger;
  }
  return _cached_encoder_for_Associate_source_diagnostic_acse_service_user(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_acse_service_user */

/* eslint-enable */
