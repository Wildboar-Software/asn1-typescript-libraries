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

/* START_OF_SYMBOL_DEFINITION NameCompAlgSet */
/**
 * @summary NameCompAlgSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameCompAlgSet OBJECT IDENTIFIER ::= {
 *     id-nva-dnCompAlg
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type NameCompAlgSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION NameCompAlgSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameCompAlgSet */
let _cached_decoder_for_NameCompAlgSet: $.ASN1Decoder<NameCompAlgSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameCompAlgSet */

/* START_OF_SYMBOL_DEFINITION _decode_NameCompAlgSet */
export function _decode_NameCompAlgSet(el: _Element) {
  if (!_cached_decoder_for_NameCompAlgSet) {
    _cached_decoder_for_NameCompAlgSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_NameCompAlgSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameCompAlgSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameCompAlgSet */
let _cached_encoder_for_NameCompAlgSet: $.ASN1Encoder<NameCompAlgSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameCompAlgSet */

/* START_OF_SYMBOL_DEFINITION _encode_NameCompAlgSet */
export function _encode_NameCompAlgSet(
  value: NameCompAlgSet,
  elGetter: $.ASN1Encoder<NameCompAlgSet>
) {
  if (!_cached_encoder_for_NameCompAlgSet) {
    _cached_encoder_for_NameCompAlgSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_NameCompAlgSet(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_NameCompAlgSet */

/* eslint-enable */
