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
import {
  Associate_source_diagnostic_acse_service_user,
  _decode_Associate_source_diagnostic_acse_service_user,
  _encode_Associate_source_diagnostic_acse_service_user,
} from '../ACSE-1/Associate-source-diagnostic-acse-service-user.ta.mjs';
import {
  Associate_source_diagnostic_acse_service_provider,
  _decode_Associate_source_diagnostic_acse_service_provider,
  _encode_Associate_source_diagnostic_acse_service_provider,
} from '../ACSE-1/Associate-source-diagnostic-acse-service-provider.ta.mjs';

// Manually modified!
// For some reason, the integers were implicitly encoded.

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

let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<Associate_source_diagnostic> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic(el: _Element): Associate_source_diagnostic {
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

let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<Associate_source_diagnostic> | null = null;

/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic(
  value: Associate_source_diagnostic,
  elGetter: $.ASN1Encoder<Associate_source_diagnostic>
): _Element {
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


/* eslint-enable */
