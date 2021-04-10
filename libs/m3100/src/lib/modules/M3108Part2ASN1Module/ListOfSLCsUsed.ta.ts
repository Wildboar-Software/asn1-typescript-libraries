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

/* START_OF_SYMBOL_DEFINITION ListOfSLCsUsed */
/**
 * @summary ListOfSLCsUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfSLCsUsed  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type ListOfSLCsUsed = ObjectInstance[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ListOfSLCsUsed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfSLCsUsed */
let _cached_decoder_for_ListOfSLCsUsed: $.ASN1Decoder<ListOfSLCsUsed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfSLCsUsed */

/* START_OF_SYMBOL_DEFINITION _decode_ListOfSLCsUsed */
/**
 * @summary Decodes an ASN.1 element into a(n) ListOfSLCsUsed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfSLCsUsed} The decoded data structure.
 */
export function _decode_ListOfSLCsUsed(el: _Element) {
  if (!_cached_decoder_for_ListOfSLCsUsed) {
    _cached_decoder_for_ListOfSLCsUsed = $._decodeSequenceOf<ObjectInstance>(
      () => _decode_ObjectInstance
    );
  }
  return _cached_decoder_for_ListOfSLCsUsed(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListOfSLCsUsed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfSLCsUsed */
let _cached_encoder_for_ListOfSLCsUsed: $.ASN1Encoder<ListOfSLCsUsed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfSLCsUsed */

/* START_OF_SYMBOL_DEFINITION _encode_ListOfSLCsUsed */
/**
 * @summary Encodes a(n) ListOfSLCsUsed into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfSLCsUsed, encoded as an ASN.1 Element.
 */
export function _encode_ListOfSLCsUsed(
  value: ListOfSLCsUsed,
  elGetter: $.ASN1Encoder<ListOfSLCsUsed>
) {
  if (!_cached_encoder_for_ListOfSLCsUsed) {
    _cached_encoder_for_ListOfSLCsUsed = $._encodeSequenceOf<ObjectInstance>(
      () => _encode_ObjectInstance,
      $.BER
    );
  }
  return _cached_encoder_for_ListOfSLCsUsed(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListOfSLCsUsed */

/* eslint-enable */
