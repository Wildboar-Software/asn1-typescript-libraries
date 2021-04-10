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

/* START_OF_SYMBOL_DEFINITION RedirectHoldingTime_Permitted */
/**
 * @summary RedirectHoldingTime_Permitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectHoldingTime-Permitted  ::=  INTEGER(1..65535)
 * ```
 */
export type RedirectHoldingTime_Permitted = INTEGER;
/* END_OF_SYMBOL_DEFINITION RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime_Permitted */
let _cached_decoder_for_RedirectHoldingTime_Permitted: $.ASN1Decoder<RedirectHoldingTime_Permitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime_Permitted */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectHoldingTime_Permitted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectHoldingTime_Permitted} The decoded data structure.
 */
export function _decode_RedirectHoldingTime_Permitted(el: _Element) {
  if (!_cached_decoder_for_RedirectHoldingTime_Permitted) {
    _cached_decoder_for_RedirectHoldingTime_Permitted = $._decodeInteger;
  }
  return _cached_decoder_for_RedirectHoldingTime_Permitted(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime_Permitted */
let _cached_encoder_for_RedirectHoldingTime_Permitted: $.ASN1Encoder<RedirectHoldingTime_Permitted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectHoldingTime_Permitted */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime_Permitted */
/**
 * @summary Encodes a(n) RedirectHoldingTime_Permitted into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectHoldingTime_Permitted, encoded as an ASN.1 Element.
 */
export function _encode_RedirectHoldingTime_Permitted(
  value: RedirectHoldingTime_Permitted,
  elGetter: $.ASN1Encoder<RedirectHoldingTime_Permitted>
) {
  if (!_cached_encoder_for_RedirectHoldingTime_Permitted) {
    _cached_encoder_for_RedirectHoldingTime_Permitted = $._encodeInteger;
  }
  return _cached_encoder_for_RedirectHoldingTime_Permitted(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectHoldingTime_Permitted */

/* eslint-enable */
