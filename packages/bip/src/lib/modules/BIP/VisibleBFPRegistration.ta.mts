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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';
export {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.mjs';

/* START_OF_SYMBOL_DEFINITION VisibleBFPRegistration */
/**
 * @summary VisibleBFPRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBFPRegistration  ::=  BioAPI-BFP-SCHEMA
 * ```
 */
export type VisibleBFPRegistration = BioAPI_BFP_SCHEMA; // DefinedType
/* END_OF_SYMBOL_DEFINITION VisibleBFPRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBFPRegistration */
let _cached_decoder_for_VisibleBFPRegistration: $.ASN1Decoder<VisibleBFPRegistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBFPRegistration */

/* START_OF_SYMBOL_DEFINITION _decode_VisibleBFPRegistration */
/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBFPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBFPRegistration} The decoded data structure.
 */
export function _decode_VisibleBFPRegistration(el: _Element) {
  if (!_cached_decoder_for_VisibleBFPRegistration) {
    _cached_decoder_for_VisibleBFPRegistration = _decode_BioAPI_BFP_SCHEMA;
  }
  return _cached_decoder_for_VisibleBFPRegistration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VisibleBFPRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBFPRegistration */
let _cached_encoder_for_VisibleBFPRegistration: $.ASN1Encoder<VisibleBFPRegistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBFPRegistration */

/* START_OF_SYMBOL_DEFINITION _encode_VisibleBFPRegistration */
/**
 * @summary Encodes a(n) VisibleBFPRegistration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBFPRegistration, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBFPRegistration(
  value: VisibleBFPRegistration,
  elGetter: $.ASN1Encoder<VisibleBFPRegistration>
) {
  if (!_cached_encoder_for_VisibleBFPRegistration) {
    _cached_encoder_for_VisibleBFPRegistration = _encode_BioAPI_BFP_SCHEMA;
  }
  return _cached_encoder_for_VisibleBFPRegistration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VisibleBFPRegistration */

/* eslint-enable */
