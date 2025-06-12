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
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta.js';
export {
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta.js';
import {
  ACReference,
  _decode_ACReference,
  _encode_ACReference,
} from '../SCVP-2009/ACReference.ta.js';
export {
  ACReference,
  _decode_ACReference,
  _encode_ACReference,
} from '../SCVP-2009/ACReference.ta.js';

/* START_OF_SYMBOL_DEFINITION CertReferences */
/**
 * @summary CertReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReferences  ::=  CHOICE {
 *     pkcRefs       [0] SEQUENCE SIZE (1..MAX) OF PKCReference,
 *     acRefs        [1] SEQUENCE SIZE (1..MAX) OF ACReference
 * }
 * ```
 */
export type CertReferences =
  | { pkcRefs: PKCReference[] } /* CHOICE_ALT_ROOT */
  | { acRefs: ACReference[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CertReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReferences */
let _cached_decoder_for_CertReferences: $.ASN1Decoder<CertReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReferences */

/* START_OF_SYMBOL_DEFINITION _decode_CertReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReferences} The decoded data structure.
 */
export function _decode_CertReferences(el: _Element) {
  if (!_cached_decoder_for_CertReferences) {
    _cached_decoder_for_CertReferences = $._decode_inextensible_choice<CertReferences>(
      {
        'CONTEXT 0': [
          'pkcRefs',
          $._decode_implicit<PKCReference[]>(() =>
            $._decodeSequenceOf<PKCReference>(() => _decode_PKCReference)
          ),
        ],
        'CONTEXT 1': [
          'acRefs',
          $._decode_implicit<ACReference[]>(() =>
            $._decodeSequenceOf<ACReference>(() => _decode_ACReference)
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_CertReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReferences */
let _cached_encoder_for_CertReferences: $.ASN1Encoder<CertReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReferences */

/* START_OF_SYMBOL_DEFINITION _encode_CertReferences */
/**
 * @summary Encodes a(n) CertReferences into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReferences, encoded as an ASN.1 Element.
 */
export function _encode_CertReferences(
  value: CertReferences,
  elGetter: $.ASN1Encoder<CertReferences>
) {
  if (!_cached_encoder_for_CertReferences) {
    _cached_encoder_for_CertReferences = $._encode_choice<CertReferences>(
      {
        pkcRefs: $._encode_implicit(
          _TagClass.context,
          0,
          () =>
            $._encodeSequenceOf<PKCReference>(
              () => _encode_PKCReference,
              $.BER
            ),
          $.BER
        ),
        acRefs: $._encode_implicit(
          _TagClass.context,
          1,
          () =>
            $._encodeSequenceOf<ACReference>(() => _encode_ACReference, $.BER),
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_CertReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReferences */

/* eslint-enable */
