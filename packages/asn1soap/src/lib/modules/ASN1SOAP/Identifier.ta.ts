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
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta';
export { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta';

/* START_OF_SYMBOL_DEFINITION Identifier */
/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=  CHOICE {roid   RELATIVE-OID,
 *                        qName  QName
 * }
 * ```
 */
export type Identifier =
  | { roid: RELATIVE_OID } /* CHOICE_ALT_ROOT */
  | { qName: QName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */
let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identifier} The decoded data structure.
 */
export function _decode_Identifier(el: _Element) {
  if (!_cached_decoder_for_Identifier) {
    _cached_decoder_for_Identifier = $._decode_inextensible_choice<Identifier>({
      'CONTEXT 0': ['roid', $._decodeRelativeOID],
      'CONTEXT 1': ['qName', _decode_QName],
    });
  }
  return _cached_decoder_for_Identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */
let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Identifier */
/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Identifier(
  value: Identifier,
  elGetter: $.ASN1Encoder<Identifier>
) {
  if (!_cached_encoder_for_Identifier) {
    _cached_encoder_for_Identifier = $._encode_choice<Identifier>(
      {
        roid: $._encodeRelativeOID,
        qName: _encode_QName,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identifier */

/* eslint-enable */
