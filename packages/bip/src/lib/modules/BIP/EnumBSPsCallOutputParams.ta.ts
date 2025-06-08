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
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';
export {
  BioAPI_BSP_SCHEMA,
  _decode_BioAPI_BSP_SCHEMA,
  _encode_BioAPI_BSP_SCHEMA,
} from '../BIP/BioAPI-BSP-SCHEMA.ta';

/* START_OF_SYMBOL_DEFINITION EnumBSPsCallOutputParams */
/**
 * @summary EnumBSPsCallOutputParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnumBSPsCallOutputParams  ::=  SEQUENCE OF BioAPI-BSP-SCHEMA
 * ```
 */
export type EnumBSPsCallOutputParams = BioAPI_BSP_SCHEMA[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION EnumBSPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnumBSPsCallOutputParams */
let _cached_decoder_for_EnumBSPsCallOutputParams: $.ASN1Decoder<EnumBSPsCallOutputParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnumBSPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _decode_EnumBSPsCallOutputParams */
/**
 * @summary Decodes an ASN.1 element into a(n) EnumBSPsCallOutputParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnumBSPsCallOutputParams} The decoded data structure.
 */
export function _decode_EnumBSPsCallOutputParams(el: _Element) {
  if (!_cached_decoder_for_EnumBSPsCallOutputParams) {
    _cached_decoder_for_EnumBSPsCallOutputParams = $._decodeSequenceOf<BioAPI_BSP_SCHEMA>(
      () => _decode_BioAPI_BSP_SCHEMA
    );
  }
  return _cached_decoder_for_EnumBSPsCallOutputParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnumBSPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnumBSPsCallOutputParams */
let _cached_encoder_for_EnumBSPsCallOutputParams: $.ASN1Encoder<EnumBSPsCallOutputParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnumBSPsCallOutputParams */

/* START_OF_SYMBOL_DEFINITION _encode_EnumBSPsCallOutputParams */
/**
 * @summary Encodes a(n) EnumBSPsCallOutputParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnumBSPsCallOutputParams, encoded as an ASN.1 Element.
 */
export function _encode_EnumBSPsCallOutputParams(
  value: EnumBSPsCallOutputParams,
  elGetter: $.ASN1Encoder<EnumBSPsCallOutputParams>
) {
  if (!_cached_encoder_for_EnumBSPsCallOutputParams) {
    _cached_encoder_for_EnumBSPsCallOutputParams = $._encodeSequenceOf<BioAPI_BSP_SCHEMA>(
      () => _encode_BioAPI_BSP_SCHEMA,
      $.BER
    );
  }
  return _cached_encoder_for_EnumBSPsCallOutputParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnumBSPsCallOutputParams */

/* eslint-enable */
