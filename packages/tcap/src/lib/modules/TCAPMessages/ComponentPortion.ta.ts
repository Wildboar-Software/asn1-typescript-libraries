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
  Component,
  _decode_Component,
  _encode_Component,
} from '../TCAPMessages/Component.ta';
export {
  Component,
  _decode_Component,
  _encode_Component,
} from '../TCAPMessages/Component.ta';

/* START_OF_SYMBOL_DEFINITION ComponentPortion */
/**
 * @summary ComponentPortion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComponentPortion{OPERATION:Invokable, OPERATION:Returnable}  ::=
 *   [APPLICATION 12]
 *     SEQUENCE SIZE (1..MAX) OF Component{{Invokable}, {Returnable}}
 * ```
 */
export type ComponentPortion = Component[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ComponentPortion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentPortion */
let _cached_decoder_for_ComponentPortion: $.ASN1Decoder<ComponentPortion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComponentPortion */

/* START_OF_SYMBOL_DEFINITION _decode_ComponentPortion */
/**
 * @summary Decodes an ASN.1 element into a(n) ComponentPortion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentPortion} The decoded data structure.
 */
export function _decode_ComponentPortion(el: _Element) {
  if (!_cached_decoder_for_ComponentPortion) {
    _cached_decoder_for_ComponentPortion = $._decode_implicit<ComponentPortion>(
      () => $._decodeSequenceOf<Component>(() => _decode_Component)
    );
  }
  return _cached_decoder_for_ComponentPortion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComponentPortion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentPortion */
let _cached_encoder_for_ComponentPortion: $.ASN1Encoder<ComponentPortion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComponentPortion */

/* START_OF_SYMBOL_DEFINITION _encode_ComponentPortion */
/**
 * @summary Encodes a(n) ComponentPortion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentPortion, encoded as an ASN.1 Element.
 */
export function _encode_ComponentPortion(
  value: ComponentPortion,
  elGetter: $.ASN1Encoder<ComponentPortion>
) {
  if (!_cached_encoder_for_ComponentPortion) {
    _cached_encoder_for_ComponentPortion = $._encode_implicit(
      _TagClass.application,
      12,
      () => $._encodeSequenceOf<Component>(() => _encode_Component, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_ComponentPortion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComponentPortion */

/* eslint-enable */
