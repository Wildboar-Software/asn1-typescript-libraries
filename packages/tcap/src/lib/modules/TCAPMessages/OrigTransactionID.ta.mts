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

/* START_OF_SYMBOL_DEFINITION OrigTransactionID */
/**
 * @summary OrigTransactionID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrigTransactionID  ::=  [APPLICATION 8]  OCTET STRING(SIZE (1..4))
 * ```
 */
export type OrigTransactionID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION OrigTransactionID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrigTransactionID */
let _cached_decoder_for_OrigTransactionID: $.ASN1Decoder<OrigTransactionID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrigTransactionID */

/* START_OF_SYMBOL_DEFINITION _decode_OrigTransactionID */
/**
 * @summary Decodes an ASN.1 element into a(n) OrigTransactionID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrigTransactionID} The decoded data structure.
 */
export function _decode_OrigTransactionID(el: _Element) {
  if (!_cached_decoder_for_OrigTransactionID) {
    _cached_decoder_for_OrigTransactionID = $._decode_implicit<OrigTransactionID>(
      () => $._decodeOctetString
    );
  }
  return _cached_decoder_for_OrigTransactionID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrigTransactionID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrigTransactionID */
let _cached_encoder_for_OrigTransactionID: $.ASN1Encoder<OrigTransactionID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrigTransactionID */

/* START_OF_SYMBOL_DEFINITION _encode_OrigTransactionID */
/**
 * @summary Encodes a(n) OrigTransactionID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrigTransactionID, encoded as an ASN.1 Element.
 */
export function _encode_OrigTransactionID(
  value: OrigTransactionID,
  elGetter: $.ASN1Encoder<OrigTransactionID>
) {
  if (!_cached_encoder_for_OrigTransactionID) {
    _cached_encoder_for_OrigTransactionID = $._encode_implicit(
      _TagClass.application,
      8,
      () => $._encodeOctetString,
      $.BER
    );
  }
  return _cached_encoder_for_OrigTransactionID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrigTransactionID */

/* eslint-enable */
