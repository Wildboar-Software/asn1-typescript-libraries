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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.js';
export {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta.js';

/* START_OF_SYMBOL_DEFINITION VisibleBSPRegistration */
/**
 * @summary VisibleBSPRegistration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleBSPRegistration  ::=  BioAPI-BSP-SCHEMA
 * ```
 */
export type VisibleBSPRegistration = BioAPI_BSP_SCHEMA; // DefinedType
/* END_OF_SYMBOL_DEFINITION VisibleBSPRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBSPRegistration */
let _cached_decoder_for_VisibleBSPRegistration: $.ASN1Decoder<VisibleBSPRegistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VisibleBSPRegistration */

/* START_OF_SYMBOL_DEFINITION _decode_VisibleBSPRegistration */
/**
 * @summary Decodes an ASN.1 element into a(n) VisibleBSPRegistration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleBSPRegistration} The decoded data structure.
 */
export function _decode_VisibleBSPRegistration(el: _Element) {
  if (!_cached_decoder_for_VisibleBSPRegistration) {
    _cached_decoder_for_VisibleBSPRegistration = _decode_BioAPI_BSP_SCHEMA;
  }
  return _cached_decoder_for_VisibleBSPRegistration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VisibleBSPRegistration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBSPRegistration */
let _cached_encoder_for_VisibleBSPRegistration: $.ASN1Encoder<VisibleBSPRegistration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VisibleBSPRegistration */

/* START_OF_SYMBOL_DEFINITION _encode_VisibleBSPRegistration */
/**
 * @summary Encodes a(n) VisibleBSPRegistration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleBSPRegistration, encoded as an ASN.1 Element.
 */
export function _encode_VisibleBSPRegistration(
  value: VisibleBSPRegistration,
  elGetter: $.ASN1Encoder<VisibleBSPRegistration>
) {
  if (!_cached_encoder_for_VisibleBSPRegistration) {
    _cached_encoder_for_VisibleBSPRegistration = _encode_BioAPI_BSP_SCHEMA;
  }
  return _cached_encoder_for_VisibleBSPRegistration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VisibleBSPRegistration */

/* eslint-enable */
