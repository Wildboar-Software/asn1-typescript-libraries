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
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';
export { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';

/* START_OF_SYMBOL_DEFINITION IDREF */
/**
 * @summary IDREF
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDREF  ::=  NCName
 * ```
 */
export type IDREF = NCName; // DefinedType
/* END_OF_SYMBOL_DEFINITION IDREF */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IDREF */
let _cached_decoder_for_IDREF: $.ASN1Decoder<IDREF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IDREF */

/* START_OF_SYMBOL_DEFINITION _decode_IDREF */
/**
 * @summary Decodes an ASN.1 element into a(n) IDREF
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDREF} The decoded data structure.
 */
export function _decode_IDREF(el: _Element) {
  if (!_cached_decoder_for_IDREF) {
    _cached_decoder_for_IDREF = _decode_NCName;
  }
  return _cached_decoder_for_IDREF(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IDREF */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IDREF */
let _cached_encoder_for_IDREF: $.ASN1Encoder<IDREF> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IDREF */

/* START_OF_SYMBOL_DEFINITION _encode_IDREF */
/**
 * @summary Encodes a(n) IDREF into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDREF, encoded as an ASN.1 Element.
 */
export function _encode_IDREF(value: IDREF, elGetter: $.ASN1Encoder<IDREF>) {
  if (!_cached_encoder_for_IDREF) {
    _cached_encoder_for_IDREF = _encode_NCName;
  }
  return _cached_encoder_for_IDREF(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IDREF */

/* eslint-enable */
