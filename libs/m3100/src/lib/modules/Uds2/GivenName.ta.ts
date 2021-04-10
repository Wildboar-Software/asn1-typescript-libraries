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

/* START_OF_SYMBOL_DEFINITION GivenName */
/**
 * @summary GivenName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GivenName  ::=  Ub64
 * ```
 */
export type GivenName = Ub64; // DefinedType
/* END_OF_SYMBOL_DEFINITION GivenName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GivenName */
let _cached_decoder_for_GivenName: $.ASN1Decoder<GivenName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GivenName */

/* START_OF_SYMBOL_DEFINITION _decode_GivenName */
/**
 * @summary Decodes an ASN.1 element into a(n) GivenName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GivenName} The decoded data structure.
 */
export function _decode_GivenName(el: _Element) {
  if (!_cached_decoder_for_GivenName) {
    _cached_decoder_for_GivenName = _decode_Ub64;
  }
  return _cached_decoder_for_GivenName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GivenName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GivenName */
let _cached_encoder_for_GivenName: $.ASN1Encoder<GivenName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GivenName */

/* START_OF_SYMBOL_DEFINITION _encode_GivenName */
/**
 * @summary Encodes a(n) GivenName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GivenName, encoded as an ASN.1 Element.
 */
export function _encode_GivenName(
  value: GivenName,
  elGetter: $.ASN1Encoder<GivenName>
) {
  if (!_cached_encoder_for_GivenName) {
    _cached_encoder_for_GivenName = _encode_Ub64;
  }
  return _cached_encoder_for_GivenName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GivenName */

/* eslint-enable */
