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
  XMLStringWithNoCRLFHT,
  _decode_XMLStringWithNoCRLFHT,
  _encode_XMLStringWithNoCRLFHT,
} from '../XSD/XMLStringWithNoCRLFHT.ta.js';
export {
  XMLStringWithNoCRLFHT,
  _decode_XMLStringWithNoCRLFHT,
  _encode_XMLStringWithNoCRLFHT,
} from '../XSD/XMLStringWithNoCRLFHT.ta.js';

/* START_OF_SYMBOL_DEFINITION AnyURI */
/**
 * @summary AnyURI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyURI  ::=  XMLStringWithNoCRLFHT
 * (CONSTRAINED BY {
 *     / * The XMLStringWithNoCRLFHT shall be a valid URI as defined in IETF RFC
 *      2396.  Note that 2396 allows any valid IRI format without escaping
 *       non-ASCII characters.  Use of the IANA oid: URI/IRI scheme should be
 *       considered. * / } )
 * ```
 */
export type AnyURI = XMLStringWithNoCRLFHT; // DefinedType
/* END_OF_SYMBOL_DEFINITION AnyURI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AnyURI */
let _cached_decoder_for_AnyURI: $.ASN1Decoder<AnyURI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AnyURI */

/* START_OF_SYMBOL_DEFINITION _decode_AnyURI */
/**
 * @summary Decodes an ASN.1 element into a(n) AnyURI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyURI} The decoded data structure.
 */
export function _decode_AnyURI(el: _Element) {
  if (!_cached_decoder_for_AnyURI) {
    _cached_decoder_for_AnyURI = _decode_XMLStringWithNoCRLFHT;
  }
  return _cached_decoder_for_AnyURI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AnyURI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AnyURI */
let _cached_encoder_for_AnyURI: $.ASN1Encoder<AnyURI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AnyURI */

/* START_OF_SYMBOL_DEFINITION _encode_AnyURI */
/**
 * @summary Encodes a(n) AnyURI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyURI, encoded as an ASN.1 Element.
 */
export function _encode_AnyURI(value: AnyURI, elGetter: $.ASN1Encoder<AnyURI>) {
  if (!_cached_encoder_for_AnyURI) {
    _cached_encoder_for_AnyURI = _encode_XMLStringWithNoCRLFHT;
  }
  return _cached_encoder_for_AnyURI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AnyURI */

/* eslint-enable */
