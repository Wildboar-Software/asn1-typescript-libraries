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
import { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';
export { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';

/* START_OF_SYMBOL_DEFINITION DmdName */
/**
 * @summary DmdName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DmdName  ::=  Ub64
 * ```
 */
export type DmdName = Ub64; // DefinedType
/* END_OF_SYMBOL_DEFINITION DmdName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DmdName */
let _cached_decoder_for_DmdName: $.ASN1Decoder<DmdName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DmdName */

/* START_OF_SYMBOL_DEFINITION _decode_DmdName */
/**
 * @summary Decodes an ASN.1 element into a(n) DmdName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DmdName} The decoded data structure.
 */
export function _decode_DmdName(el: _Element) {
  if (!_cached_decoder_for_DmdName) {
    _cached_decoder_for_DmdName = _decode_Ub64;
  }
  return _cached_decoder_for_DmdName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DmdName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DmdName */
let _cached_encoder_for_DmdName: $.ASN1Encoder<DmdName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DmdName */

/* START_OF_SYMBOL_DEFINITION _encode_DmdName */
/**
 * @summary Encodes a(n) DmdName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DmdName, encoded as an ASN.1 Element.
 */
export function _encode_DmdName(
  value: DmdName,
  elGetter: $.ASN1Encoder<DmdName>
) {
  if (!_cached_encoder_for_DmdName) {
    _cached_encoder_for_DmdName = _encode_Ub64;
  }
  return _cached_encoder_for_DmdName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DmdName */

/* eslint-enable */
