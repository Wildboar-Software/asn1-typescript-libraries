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
  Scope_Item,
  _decode_Scope_Item,
  _encode_Scope_Item,
} from '../ISO8571-FTAM/Scope-Item.ta';
export {
  Scope_Item,
  _decode_Scope_Item,
  _encode_Scope_Item,
} from '../ISO8571-FTAM/Scope-Item.ta';

/* START_OF_SYMBOL_DEFINITION Scope */
/**
 * @summary Scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope  ::=
 *   [APPLICATION 28] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {root-directory   [0]  Pathname-Attribute OPTIONAL,
 *                 retrieval-scope  [1] IMPLICIT INTEGER {child(0), all(1)}
 *     }
 * ```
 */
export type Scope = Scope_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Scope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope */
let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope */

/* START_OF_SYMBOL_DEFINITION _decode_Scope */
/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope} The decoded data structure.
 */
export function _decode_Scope(el: _Element) {
  if (!_cached_decoder_for_Scope) {
    _cached_decoder_for_Scope = $._decode_implicit<Scope>(() =>
      $._decodeSequenceOf<Scope_Item>(() => _decode_Scope_Item)
    );
  }
  return _cached_decoder_for_Scope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope */
let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope */

/* START_OF_SYMBOL_DEFINITION _encode_Scope */
/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope(value: Scope, elGetter: $.ASN1Encoder<Scope>) {
  if (!_cached_encoder_for_Scope) {
    _cached_encoder_for_Scope = $._encode_implicit(
      _TagClass.application,
      28,
      () => $._encodeSequenceOf<Scope_Item>(() => _encode_Scope_Item, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_Scope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scope */

/* eslint-enable */
