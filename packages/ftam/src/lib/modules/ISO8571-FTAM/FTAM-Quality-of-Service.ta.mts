/* eslint-disable */
import {
  INTEGER,
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
 * @summary FTAM_Quality_of_Service
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FTAM-Quality-of-Service  ::=  [6] IMPLICIT INTEGER {
 *   no-recovery(0), class-1-recovery(1), class-2-recovery(2), class-3-recovery(3)
 * }
 * ```
 */
export type FTAM_Quality_of_Service = INTEGER;


/**
 * @summary FTAM_Quality_of_Service_no_recovery
 * @constant
 * @type {number}
 */
export const FTAM_Quality_of_Service_no_recovery: FTAM_Quality_of_Service = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_no_recovery
 * @constant
 * @type {number}
 */
export const no_recovery: FTAM_Quality_of_Service = FTAM_Quality_of_Service_no_recovery; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_1_recovery
 * @constant
 * @type {number}
 */
export const FTAM_Quality_of_Service_class_1_recovery: FTAM_Quality_of_Service = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_1_recovery
 * @constant
 * @type {number}
 */
export const class_1_recovery: FTAM_Quality_of_Service = FTAM_Quality_of_Service_class_1_recovery; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_2_recovery
 * @constant
 * @type {number}
 */
export const FTAM_Quality_of_Service_class_2_recovery: FTAM_Quality_of_Service = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_2_recovery
 * @constant
 * @type {number}
 */
export const class_2_recovery: FTAM_Quality_of_Service = FTAM_Quality_of_Service_class_2_recovery; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_3_recovery
 * @constant
 * @type {number}
 */
export const FTAM_Quality_of_Service_class_3_recovery: FTAM_Quality_of_Service = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary FTAM_Quality_of_Service_class_3_recovery
 * @constant
 * @type {number}
 */
export const class_3_recovery: FTAM_Quality_of_Service = FTAM_Quality_of_Service_class_3_recovery; /* SHORT_NAMED_INTEGER_VALUE */


let _cached_decoder_for_FTAM_Quality_of_Service: $.ASN1Decoder<FTAM_Quality_of_Service> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FTAM_Quality_of_Service
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FTAM_Quality_of_Service} The decoded data structure.
 */
export function _decode_FTAM_Quality_of_Service(el: _Element) {
  if (!_cached_decoder_for_FTAM_Quality_of_Service) {
    _cached_decoder_for_FTAM_Quality_of_Service = $._decode_implicit<FTAM_Quality_of_Service>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_FTAM_Quality_of_Service(el);
}


let _cached_encoder_for_FTAM_Quality_of_Service: $.ASN1Encoder<FTAM_Quality_of_Service> | null = null;


/**
 * @summary Encodes a(n) FTAM_Quality_of_Service into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FTAM_Quality_of_Service, encoded as an ASN.1 Element.
 */
export function _encode_FTAM_Quality_of_Service(
  value: FTAM_Quality_of_Service,
  elGetter: $.ASN1Encoder<FTAM_Quality_of_Service>
) {
  if (!_cached_encoder_for_FTAM_Quality_of_Service) {
    _cached_encoder_for_FTAM_Quality_of_Service = $._encode_implicit(
      _TagClass.context,
      6,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_FTAM_Quality_of_Service(value, elGetter);
}


/* eslint-enable */
