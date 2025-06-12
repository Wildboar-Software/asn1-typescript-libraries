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
} from '../BIP/BioAPI-BFP-SCHEMA.ta.js';
export {
  BioAPI_BFP_SCHEMA,
  _decode_BioAPI_BFP_SCHEMA,
  _encode_BioAPI_BFP_SCHEMA,
} from '../BIP/BioAPI-BFP-SCHEMA.ta.js';

/* START_OF_SYMBOL_DEFINITION EnumBFPsCallOutputParams */
/**
 * @summary EnumBFPsCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnumBFPsCallOutputParams  ::=  SEQUENCE OF BioAPI-BFP-SCHEMA
 * ```
 */
export type EnumBFPsCallOutputParams = BioAPI_BFP_SCHEMA[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION EnumBFPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnumBFPsCallOutputParams */
let _cached_decoder_for_EnumBFPsCallOutputParams: $.ASN1Decoder<EnumBFPsCallOutputParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnumBFPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _decode_EnumBFPsCallOutputParams */
/**
 * @summary Decodes an ASN.1 element into a(n) EnumBFPsCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnumBFPsCallOutputParams} The decoded data structure.
 */
export function _decode_EnumBFPsCallOutputParams(el: _Element) {
  if (!_cached_decoder_for_EnumBFPsCallOutputParams) {
    _cached_decoder_for_EnumBFPsCallOutputParams = $._decodeSequenceOf<BioAPI_BFP_SCHEMA>(
      () => _decode_BioAPI_BFP_SCHEMA
    );
  }
  return _cached_decoder_for_EnumBFPsCallOutputParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnumBFPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnumBFPsCallOutputParams */
let _cached_encoder_for_EnumBFPsCallOutputParams: $.ASN1Encoder<EnumBFPsCallOutputParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnumBFPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _encode_EnumBFPsCallOutputParams */
/**
 * @summary Encodes a(n) EnumBFPsCallOutputParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnumBFPsCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_EnumBFPsCallOutputParams(
  value: EnumBFPsCallOutputParams,
  elGetter: $.ASN1Encoder<EnumBFPsCallOutputParams>
) {
  if (!_cached_encoder_for_EnumBFPsCallOutputParams) {
    _cached_encoder_for_EnumBFPsCallOutputParams = $._encodeSequenceOf<BioAPI_BFP_SCHEMA>(
      () => _encode_BioAPI_BFP_SCHEMA,
      $.BER
    );
  }
  return _cached_encoder_for_EnumBFPsCallOutputParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnumBFPsCallOutputParams */

/* eslint-enable */
