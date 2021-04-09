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
import {
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta';
export {
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta';
import {
  ACReference,
  _decode_ACReference,
  _encode_ACReference,
} from '../SCVP-2009/ACReference.ta';
export {
  ACReference,
  _decode_ACReference,
  _encode_ACReference,
} from '../SCVP-2009/ACReference.ta';

/* START_OF_SYMBOL_DEFINITION CertReference */
/**
 * @summary CertReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReference ::=  CHOICE {
 *
 *     pkc               PKCReference,
 *     ac                ACReference
 * }
 * ```
 */
export type CertReference =
  | { pkc: PKCReference } /* CHOICE_ALT_ROOT */
  | { ac: ACReference } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CertReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReference */
let _cached_decoder_for_CertReference: $.ASN1Decoder<CertReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReference */

/* START_OF_SYMBOL_DEFINITION _decode_CertReference */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReference} The decoded data structure.
 */
export function _decode_CertReference(el: _Element) {
  if (!_cached_decoder_for_CertReference) {
    _cached_decoder_for_CertReference = $._decode_inextensible_choice<CertReference>(
      {
        'CONTEXT 0': ['pkc', _decode_PKCReference],
        'CONTEXT 1': ['pkc', _decode_PKCReference],
        'CONTEXT 2': ['ac', _decode_ACReference],
        'CONTEXT 3': ['ac', _decode_ACReference],
      }
    );
  }
  return _cached_decoder_for_CertReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReference */
let _cached_encoder_for_CertReference: $.ASN1Encoder<CertReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReference */

/* START_OF_SYMBOL_DEFINITION _encode_CertReference */
/**
 * @summary Encodes a(n) CertReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReference, encoded as an ASN.1 Element.
 */
export function _encode_CertReference(
  value: CertReference,
  elGetter: $.ASN1Encoder<CertReference>
) {
  if (!_cached_encoder_for_CertReference) {
    _cached_encoder_for_CertReference = $._encode_choice<CertReference>(
      {
        pkc: _encode_PKCReference,
        ac: _encode_ACReference,
      },
      $.BER
    );
  }
  return _cached_encoder_for_CertReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReference */

/* eslint-enable */
