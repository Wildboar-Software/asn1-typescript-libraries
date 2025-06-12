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
  HashValue,
  _decode_HashValue,
  _encode_HashValue,
} from '../SCVP-2009/HashValue.ta.js';
export {
  HashValue,
  _decode_HashValue,
  _encode_HashValue,
} from '../SCVP-2009/HashValue.ta.js';
import {
  CVRequest,
  _decode_CVRequest,
  _encode_CVRequest,
} from '../SCVP-2009/CVRequest.ta.js';
export {
  CVRequest,
  _decode_CVRequest,
  _encode_CVRequest,
} from '../SCVP-2009/CVRequest.ta.js';

/* START_OF_SYMBOL_DEFINITION RequestReference */
/**
 * @summary RequestReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestReference  ::=  CHOICE {
 *     requestHash   [0] HashValue, -- hash of CVRequest
 *     fullRequest   [1] CVRequest }
 * ```
 */
export type RequestReference =
  | { requestHash: HashValue } /* CHOICE_ALT_ROOT */
  | { fullRequest: CVRequest } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RequestReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestReference */
let _cached_decoder_for_RequestReference: $.ASN1Decoder<RequestReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestReference */

/* START_OF_SYMBOL_DEFINITION _decode_RequestReference */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestReference} The decoded data structure.
 */
export function _decode_RequestReference(el: _Element) {
  if (!_cached_decoder_for_RequestReference) {
    _cached_decoder_for_RequestReference = $._decode_inextensible_choice<RequestReference>(
      {
        'CONTEXT 0': [
          'requestHash',
          $._decode_implicit<HashValue>(() => _decode_HashValue),
        ],
        'CONTEXT 1': [
          'fullRequest',
          $._decode_implicit<CVRequest>(() => _decode_CVRequest),
        ],
      }
    );
  }
  return _cached_decoder_for_RequestReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestReference */
let _cached_encoder_for_RequestReference: $.ASN1Encoder<RequestReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestReference */

/* START_OF_SYMBOL_DEFINITION _encode_RequestReference */
/**
 * @summary Encodes a(n) RequestReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReference, encoded as an ASN.1 Element.
 */
export function _encode_RequestReference(
  value: RequestReference,
  elGetter: $.ASN1Encoder<RequestReference>
) {
  if (!_cached_encoder_for_RequestReference) {
    _cached_encoder_for_RequestReference = $._encode_choice<RequestReference>(
      {
        requestHash: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_HashValue,
          $.BER
        ),
        fullRequest: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_CVRequest,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_RequestReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestReference */

/* eslint-enable */
