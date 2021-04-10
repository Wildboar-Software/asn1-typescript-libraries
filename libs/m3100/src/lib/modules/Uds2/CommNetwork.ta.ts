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
  NetworkType,
  _enum_for_NetworkType,
  NetworkType_pstn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pstn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_umts /* IMPORTED_LONG_ENUMERATION_ITEM */,
  umts /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_internet /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internet /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_NetworkType,
  _encode_NetworkType,
} from '../Uds2/NetworkType.ta';
export {
  NetworkType,
  _enum_for_NetworkType,
  NetworkType_pstn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pstn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_umts /* IMPORTED_LONG_ENUMERATION_ITEM */,
  umts /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_internet /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internet /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_NetworkType,
  _encode_NetworkType,
} from '../Uds2/NetworkType.ta';

/* START_OF_SYMBOL_DEFINITION CommNetwork */
/**
 * @summary CommNetwork
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommNetwork  ::=  NetworkType
 * ```
 */
export type CommNetwork = NetworkType; // DefinedType
/* END_OF_SYMBOL_DEFINITION CommNetwork */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommNetwork */
let _cached_decoder_for_CommNetwork: $.ASN1Decoder<CommNetwork> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommNetwork */

/* START_OF_SYMBOL_DEFINITION _decode_CommNetwork */
/**
 * @summary Decodes an ASN.1 element into a(n) CommNetwork
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommNetwork} The decoded data structure.
 */
export function _decode_CommNetwork(el: _Element) {
  if (!_cached_decoder_for_CommNetwork) {
    _cached_decoder_for_CommNetwork = _decode_NetworkType;
  }
  return _cached_decoder_for_CommNetwork(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommNetwork */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommNetwork */
let _cached_encoder_for_CommNetwork: $.ASN1Encoder<CommNetwork> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommNetwork */

/* START_OF_SYMBOL_DEFINITION _encode_CommNetwork */
/**
 * @summary Encodes a(n) CommNetwork into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommNetwork, encoded as an ASN.1 Element.
 */
export function _encode_CommNetwork(
  value: CommNetwork,
  elGetter: $.ASN1Encoder<CommNetwork>
) {
  if (!_cached_encoder_for_CommNetwork) {
    _cached_encoder_for_CommNetwork = _encode_NetworkType;
  }
  return _cached_encoder_for_CommNetwork(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommNetwork */

/* eslint-enable */
