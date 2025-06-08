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

/* START_OF_SYMBOL_DEFINITION Sap2Addresses */
/**
 * @summary Sap2Addresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap2Addresses  ::=  SET OF OCTET STRING
 * ```
 */
export type Sap2Addresses = OCTET_STRING[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Sap2Addresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap2Addresses */
let _cached_decoder_for_Sap2Addresses: $.ASN1Decoder<Sap2Addresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap2Addresses */

/* START_OF_SYMBOL_DEFINITION _decode_Sap2Addresses */
/**
 * @summary Decodes an ASN.1 element into a(n) Sap2Addresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sap2Addresses} The decoded data structure.
 */
export function _decode_Sap2Addresses(el: _Element) {
  if (!_cached_decoder_for_Sap2Addresses) {
    _cached_decoder_for_Sap2Addresses = $._decodeSetOf<OCTET_STRING>(
      () => $._decodeOctetString
    );
  }
  return _cached_decoder_for_Sap2Addresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Sap2Addresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap2Addresses */
let _cached_encoder_for_Sap2Addresses: $.ASN1Encoder<Sap2Addresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap2Addresses */

/* START_OF_SYMBOL_DEFINITION _encode_Sap2Addresses */
/**
 * @summary Encodes a(n) Sap2Addresses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap2Addresses, encoded as an ASN.1 Element.
 */
export function _encode_Sap2Addresses(
  value: Sap2Addresses,
  elGetter: $.ASN1Encoder<Sap2Addresses>
) {
  if (!_cached_encoder_for_Sap2Addresses) {
    _cached_encoder_for_Sap2Addresses = $._encodeSetOf<OCTET_STRING>(
      () => $._encodeOctetString,
      $.BER
    );
  }
  return _cached_encoder_for_Sap2Addresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Sap2Addresses */

/* eslint-enable */
