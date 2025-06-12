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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.js';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.js';

/* START_OF_SYMBOL_DEFINITION BioAPI_DB_MARKER_HANDLE */
/**
 * @summary BioAPI_DB_MARKER_HANDLE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-MARKER-HANDLE  ::=  UnsignedInt
 * ```
 */
export type BioAPI_DB_MARKER_HANDLE = UnsignedInt; // DefinedType
/* END_OF_SYMBOL_DEFINITION BioAPI_DB_MARKER_HANDLE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_MARKER_HANDLE */
let _cached_decoder_for_BioAPI_DB_MARKER_HANDLE: $.ASN1Decoder<BioAPI_DB_MARKER_HANDLE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DB_MARKER_HANDLE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_MARKER_HANDLE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DB_MARKER_HANDLE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DB_MARKER_HANDLE} The decoded data structure.
 */
export function _decode_BioAPI_DB_MARKER_HANDLE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DB_MARKER_HANDLE) {
    _cached_decoder_for_BioAPI_DB_MARKER_HANDLE = _decode_UnsignedInt;
  }
  return _cached_decoder_for_BioAPI_DB_MARKER_HANDLE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DB_MARKER_HANDLE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_MARKER_HANDLE */
let _cached_encoder_for_BioAPI_DB_MARKER_HANDLE: $.ASN1Encoder<BioAPI_DB_MARKER_HANDLE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DB_MARKER_HANDLE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_MARKER_HANDLE */
/**
 * @summary Encodes a(n) BioAPI_DB_MARKER_HANDLE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DB_MARKER_HANDLE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DB_MARKER_HANDLE(
  value: BioAPI_DB_MARKER_HANDLE,
  elGetter: $.ASN1Encoder<BioAPI_DB_MARKER_HANDLE>
) {
  if (!_cached_encoder_for_BioAPI_DB_MARKER_HANDLE) {
    _cached_encoder_for_BioAPI_DB_MARKER_HANDLE = _encode_UnsignedInt;
  }
  return _cached_encoder_for_BioAPI_DB_MARKER_HANDLE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DB_MARKER_HANDLE */

/* eslint-enable */
