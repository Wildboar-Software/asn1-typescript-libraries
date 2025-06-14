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

/* START_OF_SYMBOL_DEFINITION _enum_for_ABRT_diagnostic */
export enum _enum_for_ABRT_diagnostic {
  no_reason_given = 1,
  protocol_error = 2,
  authentication_mechanism_name_not_recognized = 3,
  authentication_mechanism_name_required = 4,
  authentication_failure = 5,
  authentication_required = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ABRT_diagnostic */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic */
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
 * ```@enum {number}
 */
export type ABRT_diagnostic = _enum_for_ABRT_diagnostic | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_no_reason_given */
/**
 * @summary ABRT_diagnostic_no_reason_given
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_no_reason_given: ABRT_diagnostic = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_no_reason_given */

/* START_OF_SYMBOL_DEFINITION no_reason_given */
/**
 * @summary no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: ABRT_diagnostic = ABRT_diagnostic_no_reason_given; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reason_given */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_protocol_error */
/**
 * @summary ABRT_diagnostic_protocol_error
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_protocol_error: ABRT_diagnostic = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_protocol_error */

/* START_OF_SYMBOL_DEFINITION protocol_error */
/**
 * @summary protocol_error
 * @constant
 * @type {number}
 */
export const protocol_error: ABRT_diagnostic = ABRT_diagnostic_protocol_error; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protocol_error */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_mechanism_name_not_recognized */
/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_not_recognized: ABRT_diagnostic = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_mechanism_name_not_recognized */

/* START_OF_SYMBOL_DEFINITION authentication_mechanism_name_not_recognized */
/**
 * @summary authentication_mechanism_name_not_recognized
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_not_recognized: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_not_recognized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_mechanism_name_not_recognized */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_mechanism_name_required */
/**
 * @summary ABRT_diagnostic_authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_mechanism_name_required: ABRT_diagnostic = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_mechanism_name_required */

/* START_OF_SYMBOL_DEFINITION authentication_mechanism_name_required */
/**
 * @summary authentication_mechanism_name_required
 * @constant
 * @type {number}
 */
export const authentication_mechanism_name_required: ABRT_diagnostic = ABRT_diagnostic_authentication_mechanism_name_required; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_mechanism_name_required */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_failure */
/**
 * @summary ABRT_diagnostic_authentication_failure
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_failure: ABRT_diagnostic = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_failure */

/* START_OF_SYMBOL_DEFINITION authentication_failure */
/**
 * @summary authentication_failure
 * @constant
 * @type {number}
 */
export const authentication_failure: ABRT_diagnostic = ABRT_diagnostic_authentication_failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_failure */

/* START_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_required */
/**
 * @summary ABRT_diagnostic_authentication_required
 * @constant
 * @type {number}
 */
export const ABRT_diagnostic_authentication_required: ABRT_diagnostic = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_diagnostic_authentication_required */

/* START_OF_SYMBOL_DEFINITION authentication_required */
/**
 * @summary authentication_required
 * @constant
 * @type {number}
 */
export const authentication_required: ABRT_diagnostic = ABRT_diagnostic_authentication_required; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION authentication_required */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_diagnostic */
let _cached_decoder_for_ABRT_diagnostic: $.ASN1Decoder<ABRT_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_diagnostic */

/* START_OF_SYMBOL_DEFINITION _decode_ABRT_diagnostic */
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_diagnostic} The decoded data structure.
 */
export function _decode_ABRT_diagnostic(el: _Element) {
  if (!_cached_decoder_for_ABRT_diagnostic) {
    _cached_decoder_for_ABRT_diagnostic = $._decodeEnumerated;
  }
  return _cached_decoder_for_ABRT_diagnostic(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ABRT_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_diagnostic */
let _cached_encoder_for_ABRT_diagnostic: $.ASN1Encoder<ABRT_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_diagnostic */

/* START_OF_SYMBOL_DEFINITION _encode_ABRT_diagnostic */
/**
 * @summary Encodes a(n) ABRT_diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_diagnostic(
  value: ABRT_diagnostic,
  elGetter: $.ASN1Encoder<ABRT_diagnostic>
) {
  if (!_cached_encoder_for_ABRT_diagnostic) {
    _cached_encoder_for_ABRT_diagnostic = $._encodeEnumerated;
  }
  return _cached_encoder_for_ABRT_diagnostic(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ABRT_diagnostic */

/* eslint-enable */
