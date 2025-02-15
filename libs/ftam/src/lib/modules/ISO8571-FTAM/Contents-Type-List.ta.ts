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
  Contents_Type_List_Item,
  _decode_Contents_Type_List_Item,
  _encode_Contents_Type_List_Item,
} from '../ISO8571-FTAM/Contents-Type-List-Item.ta';
export {
  Contents_Type_List_Item,
  _decode_Contents_Type_List_Item,
  _encode_Contents_Type_List_Item,
} from '../ISO8571-FTAM/Contents-Type-List-Item.ta';

/* START_OF_SYMBOL_DEFINITION Contents_Type_List */
/**
 * @summary Contents_Type_List
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-List  ::=
 *   [7] IMPLICIT
 *     SEQUENCE OF
 *       CHOICE {document-type-name    Document-Type-Name,
 *               abstract-Syntax-name  Abstract-Syntax-Name}
 * ```
 */
export type Contents_Type_List = Contents_Type_List_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Contents_Type_List */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_List */
let _cached_decoder_for_Contents_Type_List: $.ASN1Decoder<Contents_Type_List> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_List */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_List */
/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_List
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_List} The decoded data structure.
 */
export function _decode_Contents_Type_List(el: _Element) {
  if (!_cached_decoder_for_Contents_Type_List) {
    _cached_decoder_for_Contents_Type_List = $._decode_implicit<Contents_Type_List>(
      () =>
        $._decodeSequenceOf<Contents_Type_List_Item>(
          () => _decode_Contents_Type_List_Item
        )
    );
  }
  return _cached_decoder_for_Contents_Type_List(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_List */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_List */
let _cached_encoder_for_Contents_Type_List: $.ASN1Encoder<Contents_Type_List> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_List */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_List */
/**
 * @summary Encodes a(n) Contents_Type_List into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_List, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_List(
  value: Contents_Type_List,
  elGetter: $.ASN1Encoder<Contents_Type_List>
) {
  if (!_cached_encoder_for_Contents_Type_List) {
    _cached_encoder_for_Contents_Type_List = $._encode_implicit(
      _TagClass.context,
      7,
      () =>
        $._encodeSequenceOf<Contents_Type_List_Item>(
          () => _encode_Contents_Type_List_Item,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Contents_Type_List(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_List */

/* eslint-enable */
