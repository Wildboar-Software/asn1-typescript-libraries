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
import { Name, _decode_Name, _encode_Name } from '../XSD/Name.ta';
export { Name, _decode_Name, _encode_Name } from '../XSD/Name.ta';

/* START_OF_SYMBOL_DEFINITION NCName */
/**
 * @summary NCName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NCName  ::=  Name
 *     (CONSTRAINED BY {
 *                  / * The Name shall be an NCName as defined in W3C XML Namespaces, 2 * / } )
 * ```
 */
export type NCName = Name; // DefinedType
/* END_OF_SYMBOL_DEFINITION NCName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NCName */
let _cached_decoder_for_NCName: $.ASN1Decoder<NCName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NCName */

/* START_OF_SYMBOL_DEFINITION _decode_NCName */
/**
 * @summary Decodes an ASN.1 element into a(n) NCName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NCName} The decoded data structure.
 */
export function _decode_NCName(el: _Element) {
  if (!_cached_decoder_for_NCName) {
    _cached_decoder_for_NCName = _decode_Name;
  }
  return _cached_decoder_for_NCName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NCName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NCName */
let _cached_encoder_for_NCName: $.ASN1Encoder<NCName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NCName */

/* START_OF_SYMBOL_DEFINITION _encode_NCName */
/**
 * @summary Encodes a(n) NCName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCName, encoded as an ASN.1 Element.
 */
export function _encode_NCName(value: NCName, elGetter: $.ASN1Encoder<NCName>) {
  if (!_cached_encoder_for_NCName) {
    _cached_encoder_for_NCName = _encode_Name;
  }
  return _cached_encoder_for_NCName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NCName */

/* eslint-enable */
