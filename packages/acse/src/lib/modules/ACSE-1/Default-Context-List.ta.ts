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
  Default_Context_List_Item,
  _decode_Default_Context_List_Item,
  _encode_Default_Context_List_Item,
} from '../ACSE-1/Default-Context-List-Item.ta';
export {
  Default_Context_List_Item,
  _decode_Default_Context_List_Item,
  _encode_Default_Context_List_Item,
} from '../ACSE-1/Default-Context-List-Item.ta';

/* START_OF_SYMBOL_DEFINITION Default_Context_List */
/**
 * @summary Default_Context_List
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-Context-List  ::=
 *   SEQUENCE OF
 *     SEQUENCE {abstract-syntax-name  [0] IMPLICIT Abstract-syntax-name OPTIONAL,
 *               transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name
 *     }
 * ```
 */
export type Default_Context_List = Default_Context_List_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Default_Context_List */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Default_Context_List */
let _cached_decoder_for_Default_Context_List: $.ASN1Decoder<Default_Context_List> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Default_Context_List */

/* START_OF_SYMBOL_DEFINITION _decode_Default_Context_List */
/**
 * @summary Decodes an ASN.1 element into a(n) Default_Context_List
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_Context_List} The decoded data structure.
 */
export function _decode_Default_Context_List(el: _Element) {
  if (!_cached_decoder_for_Default_Context_List) {
    _cached_decoder_for_Default_Context_List = $._decodeSequenceOf<Default_Context_List_Item>(
      () => _decode_Default_Context_List_Item
    );
  }
  return _cached_decoder_for_Default_Context_List(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Default_Context_List */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Default_Context_List */
let _cached_encoder_for_Default_Context_List: $.ASN1Encoder<Default_Context_List> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Default_Context_List */

/* START_OF_SYMBOL_DEFINITION _encode_Default_Context_List */
/**
 * @summary Encodes a(n) Default_Context_List into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_Context_List, encoded as an ASN.1 Element.
 */
export function _encode_Default_Context_List(
  value: Default_Context_List,
  elGetter: $.ASN1Encoder<Default_Context_List>
) {
  if (!_cached_encoder_for_Default_Context_List) {
    _cached_encoder_for_Default_Context_List = $._encodeSequenceOf<Default_Context_List_Item>(
      () => _encode_Default_Context_List_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Default_Context_List(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Default_Context_List */

/* eslint-enable */
