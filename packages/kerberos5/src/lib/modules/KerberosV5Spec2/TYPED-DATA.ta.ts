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
  TYPED_DATA_Item,
  _decode_TYPED_DATA_Item,
  _encode_TYPED_DATA_Item,
} from '../KerberosV5Spec2/TYPED-DATA-Item.ta';
export {
  TYPED_DATA_Item,
  _decode_TYPED_DATA_Item,
  _encode_TYPED_DATA_Item,
} from '../KerberosV5Spec2/TYPED-DATA-Item.ta';

/* START_OF_SYMBOL_DEFINITION TYPED_DATA */
/**
 * @summary TYPED_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TYPED-DATA       ::=  SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *         data-type       [0] Int32,
 *         data-value      [1] OCTET STRING OPTIONAL
 * }
 * ```
 */
export type TYPED_DATA = TYPED_DATA_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TYPED_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TYPED_DATA */
let _cached_decoder_for_TYPED_DATA: $.ASN1Decoder<TYPED_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TYPED_DATA */

/* START_OF_SYMBOL_DEFINITION _decode_TYPED_DATA */
/**
 * @summary Decodes an ASN.1 element into a(n) TYPED_DATA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TYPED_DATA} The decoded data structure.
 */
export function _decode_TYPED_DATA(el: _Element) {
  if (!_cached_decoder_for_TYPED_DATA) {
    _cached_decoder_for_TYPED_DATA = $._decodeSequenceOf<TYPED_DATA_Item>(
      () => _decode_TYPED_DATA_Item
    );
  }
  return _cached_decoder_for_TYPED_DATA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TYPED_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TYPED_DATA */
let _cached_encoder_for_TYPED_DATA: $.ASN1Encoder<TYPED_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TYPED_DATA */

/* START_OF_SYMBOL_DEFINITION _encode_TYPED_DATA */
/**
 * @summary Encodes a(n) TYPED_DATA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TYPED_DATA, encoded as an ASN.1 Element.
 */
export function _encode_TYPED_DATA(
  value: TYPED_DATA,
  elGetter: $.ASN1Encoder<TYPED_DATA>
) {
  if (!_cached_encoder_for_TYPED_DATA) {
    _cached_encoder_for_TYPED_DATA = $._encodeSequenceOf<TYPED_DATA_Item>(
      () => _encode_TYPED_DATA_Item,
      $.BER
    );
  }
  return _cached_encoder_for_TYPED_DATA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TYPED_DATA */

/* eslint-enable */
