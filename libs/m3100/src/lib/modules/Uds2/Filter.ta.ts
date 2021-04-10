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
  Filter_Item,
  _decode_Filter_Item,
  _encode_Filter_Item,
} from '../Uds2/Filter-Item.ta';
export {
  Filter_Item,
  _decode_Filter_Item,
  _encode_Filter_Item,
} from '../Uds2/Filter-Item.ta';

/* START_OF_SYMBOL_DEFINITION Filter */
/**
 * @summary Filter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Filter  ::=
 *   SEQUENCE (SIZE (1..MAX)) OF
 *     CHOICE {assertion   Assertion,
 *             substrings  Substrings}
 * ```
 */
export type Filter = Filter_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Filter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Filter */
let _cached_decoder_for_Filter: $.ASN1Decoder<Filter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Filter */

/* START_OF_SYMBOL_DEFINITION _decode_Filter */
/**
 * @summary Decodes an ASN.1 element into a(n) Filter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Filter} The decoded data structure.
 */
export function _decode_Filter(el: _Element) {
  if (!_cached_decoder_for_Filter) {
    _cached_decoder_for_Filter = $._decodeSequenceOf<Filter_Item>(
      () => _decode_Filter_Item
    );
  }
  return _cached_decoder_for_Filter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Filter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Filter */
let _cached_encoder_for_Filter: $.ASN1Encoder<Filter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Filter */

/* START_OF_SYMBOL_DEFINITION _encode_Filter */
/**
 * @summary Encodes a(n) Filter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Filter, encoded as an ASN.1 Element.
 */
export function _encode_Filter(value: Filter, elGetter: $.ASN1Encoder<Filter>) {
  if (!_cached_encoder_for_Filter) {
    _cached_encoder_for_Filter = $._encodeSequenceOf<Filter_Item>(
      () => _encode_Filter_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Filter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Filter */

/* eslint-enable */
