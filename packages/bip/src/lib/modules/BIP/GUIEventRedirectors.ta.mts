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
  GUIEventRedirector,
  _decode_GUIEventRedirector,
  _encode_GUIEventRedirector,
} from '../BIP/GUIEventRedirector.ta.mjs';
export {
  GUIEventRedirector,
  _decode_GUIEventRedirector,
  _encode_GUIEventRedirector,
} from '../BIP/GUIEventRedirector.ta.mjs';

/* START_OF_SYMBOL_DEFINITION GUIEventRedirectors */
/**
 * @summary GUIEventRedirectors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventRedirectors  ::=  SET OF redirector GUIEventRedirector
 * ```
 */
export type GUIEventRedirectors = GUIEventRedirector[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION GUIEventRedirectors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIEventRedirectors */
let _cached_decoder_for_GUIEventRedirectors: $.ASN1Decoder<GUIEventRedirectors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIEventRedirectors */

/* START_OF_SYMBOL_DEFINITION _decode_GUIEventRedirectors */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventRedirectors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventRedirectors} The decoded data structure.
 */
export function _decode_GUIEventRedirectors(el: _Element) {
  if (!_cached_decoder_for_GUIEventRedirectors) {
    _cached_decoder_for_GUIEventRedirectors = $._decodeSetOf<GUIEventRedirector>(
      () => _decode_GUIEventRedirector
    );
  }
  return _cached_decoder_for_GUIEventRedirectors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIEventRedirectors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIEventRedirectors */
let _cached_encoder_for_GUIEventRedirectors: $.ASN1Encoder<GUIEventRedirectors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIEventRedirectors */

/* START_OF_SYMBOL_DEFINITION _encode_GUIEventRedirectors */
/**
 * @summary Encodes a(n) GUIEventRedirectors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventRedirectors, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventRedirectors(
  value: GUIEventRedirectors,
  elGetter: $.ASN1Encoder<GUIEventRedirectors>
) {
  if (!_cached_encoder_for_GUIEventRedirectors) {
    _cached_encoder_for_GUIEventRedirectors = $._encodeSetOf<GUIEventRedirector>(
      () => _encode_GUIEventRedirector,
      $.BER
    );
  }
  return _cached_encoder_for_GUIEventRedirectors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIEventRedirectors */

/* eslint-enable */
