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
  Pathname,
  _decode_Pathname,
  _encode_Pathname,
} from '../ISO8571-FTAM/Pathname.ta';
export {
  Pathname,
  _decode_Pathname,
  _encode_Pathname,
} from '../ISO8571-FTAM/Pathname.ta';

/* START_OF_SYMBOL_DEFINITION Pathname_Attribute */
/**
 * @summary Pathname_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pathname-Attribute  ::=  CHOICE {
 *   incomplete-pathname  [0] IMPLICIT Pathname,
 *   complete-pathname    [APPLICATION 23] IMPLICIT Pathname
 * }
 * ```
 */
export type Pathname_Attribute =
  | { incomplete_pathname: Pathname } /* CHOICE_ALT_ROOT */
  | { complete_pathname: Pathname } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Pathname_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Pathname_Attribute */
let _cached_decoder_for_Pathname_Attribute: $.ASN1Decoder<Pathname_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Pathname_Attribute */

/* START_OF_SYMBOL_DEFINITION _decode_Pathname_Attribute */
/**
 * @summary Decodes an ASN.1 element into a(n) Pathname_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pathname_Attribute} The decoded data structure.
 */
export function _decode_Pathname_Attribute(el: _Element) {
  if (!_cached_decoder_for_Pathname_Attribute) {
    _cached_decoder_for_Pathname_Attribute = $._decode_inextensible_choice<Pathname_Attribute>(
      {
        'CONTEXT 0': [
          'incomplete_pathname',
          $._decode_implicit<Pathname>(() => _decode_Pathname),
        ],
        'APPLICATION 23': [
          'complete_pathname',
          $._decode_implicit<Pathname>(() => _decode_Pathname),
        ],
      }
    );
  }
  return _cached_decoder_for_Pathname_Attribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Pathname_Attribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Pathname_Attribute */
let _cached_encoder_for_Pathname_Attribute: $.ASN1Encoder<Pathname_Attribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Pathname_Attribute */

/* START_OF_SYMBOL_DEFINITION _encode_Pathname_Attribute */
/**
 * @summary Encodes a(n) Pathname_Attribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pathname_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Pathname_Attribute(
  value: Pathname_Attribute,
  elGetter: $.ASN1Encoder<Pathname_Attribute>
) {
  if (!_cached_encoder_for_Pathname_Attribute) {
    _cached_encoder_for_Pathname_Attribute = $._encode_choice<Pathname_Attribute>(
      {
        incomplete_pathname: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Pathname,
          $.BER
        ),
        complete_pathname: $._encode_implicit(
          _TagClass.application,
          23,
          () => _encode_Pathname,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Pathname_Attribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Pathname_Attribute */

/* eslint-enable */
