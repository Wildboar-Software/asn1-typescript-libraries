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
import { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds2/Ub1024.ta';
export { Ub1024, _decode_Ub1024, _encode_Ub1024 } from '../Uds2/Ub1024.ta';

/* START_OF_SYMBOL_DEFINITION OrAddress */
/**
 * @summary OrAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrAddress  ::=  Ub1024
 * ```
 */
export type OrAddress = Ub1024; // DefinedType
/* END_OF_SYMBOL_DEFINITION OrAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrAddress */
let _cached_decoder_for_OrAddress: $.ASN1Decoder<OrAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrAddress */

/* START_OF_SYMBOL_DEFINITION _decode_OrAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) OrAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrAddress} The decoded data structure.
 */
export function _decode_OrAddress(el: _Element) {
  if (!_cached_decoder_for_OrAddress) {
    _cached_decoder_for_OrAddress = _decode_Ub1024;
  }
  return _cached_decoder_for_OrAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrAddress */
let _cached_encoder_for_OrAddress: $.ASN1Encoder<OrAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrAddress */

/* START_OF_SYMBOL_DEFINITION _encode_OrAddress */
/**
 * @summary Encodes a(n) OrAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrAddress, encoded as an ASN.1 Element.
 */
export function _encode_OrAddress(
  value: OrAddress,
  elGetter: $.ASN1Encoder<OrAddress>
) {
  if (!_cached_encoder_for_OrAddress) {
    _cached_encoder_for_OrAddress = _encode_Ub1024;
  }
  return _cached_encoder_for_OrAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrAddress */

/* eslint-enable */
