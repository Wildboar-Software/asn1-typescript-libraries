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

/* START_OF_SYMBOL_DEFINITION EndpointIRI */
/**
 * @summary EndpointIRI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndpointIRI  ::=
 *   VisibleString
 *     (CONSTRAINED BY {
 *         --The string shall conform to the "absolute-IRI" grammar
 *         --defined in IETF RFC 3987--
 *        })
 * ```
 */
export type EndpointIRI = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndpointIRI */
let _cached_decoder_for_EndpointIRI: $.ASN1Decoder<EndpointIRI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _decode_EndpointIRI */
/**
 * @summary Decodes an ASN.1 element into a(n) EndpointIRI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndpointIRI} The decoded data structure.
 */
export function _decode_EndpointIRI(el: _Element) {
  if (!_cached_decoder_for_EndpointIRI) {
    _cached_decoder_for_EndpointIRI = $._decodeVisibleString;
  }
  return _cached_decoder_for_EndpointIRI(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndpointIRI */
let _cached_encoder_for_EndpointIRI: $.ASN1Encoder<EndpointIRI> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _encode_EndpointIRI */
/**
 * @summary Encodes a(n) EndpointIRI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndpointIRI, encoded as an ASN.1 Element.
 */
export function _encode_EndpointIRI(
  value: EndpointIRI,
  elGetter: $.ASN1Encoder<EndpointIRI>
) {
  if (!_cached_encoder_for_EndpointIRI) {
    _cached_encoder_for_EndpointIRI = $._encodeVisibleString;
  }
  return _cached_encoder_for_EndpointIRI(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndpointIRI */

/* eslint-enable */
