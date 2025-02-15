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
  Charging_Item,
  _decode_Charging_Item,
  _encode_Charging_Item,
} from '../ISO8571-FTAM/Charging-Item.ta';
export {
  Charging_Item,
  _decode_Charging_Item,
  _encode_Charging_Item,
} from '../ISO8571-FTAM/Charging-Item.ta';

/* START_OF_SYMBOL_DEFINITION Charging */
/**
 * @summary Charging
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Charging  ::=
 *   [APPLICATION 9] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {resource-identifier  [0] IMPLICIT GraphicString,
 *                 charging-unit        [1] IMPLICIT GraphicString,
 *                 charging-value       [2] IMPLICIT INTEGER}
 * ```
 */
export type Charging = Charging_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Charging */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Charging */
let _cached_decoder_for_Charging: $.ASN1Decoder<Charging> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Charging */

/* START_OF_SYMBOL_DEFINITION _decode_Charging */
/**
 * @summary Decodes an ASN.1 element into a(n) Charging
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Charging} The decoded data structure.
 */
export function _decode_Charging(el: _Element) {
  if (!_cached_decoder_for_Charging) {
    _cached_decoder_for_Charging = $._decode_implicit<Charging>(() =>
      $._decodeSequenceOf<Charging_Item>(() => _decode_Charging_Item)
    );
  }
  return _cached_decoder_for_Charging(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Charging */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Charging */
let _cached_encoder_for_Charging: $.ASN1Encoder<Charging> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Charging */

/* START_OF_SYMBOL_DEFINITION _encode_Charging */
/**
 * @summary Encodes a(n) Charging into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Charging, encoded as an ASN.1 Element.
 */
export function _encode_Charging(
  value: Charging,
  elGetter: $.ASN1Encoder<Charging>
) {
  if (!_cached_encoder_for_Charging) {
    _cached_encoder_for_Charging = $._encode_implicit(
      _TagClass.application,
      9,
      () =>
        $._encodeSequenceOf<Charging_Item>(() => _encode_Charging_Item, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_Charging(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Charging */

/* eslint-enable */
