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
  ComServiceType,
  _enum_for_ComServiceType,
  ComServiceType_voice /* IMPORTED_LONG_ENUMERATION_ITEM */,
  voice /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_fax /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_textPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  textPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_videoPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  videoPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_publicPhoneBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicPhoneBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_switchBoard /* IMPORTED_LONG_ENUMERATION_ITEM */,
  switchBoard /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_pager /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pager /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_e_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  e_mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_web /* IMPORTED_LONG_ENUMERATION_ITEM */,
  web /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ComServiceType,
  _encode_ComServiceType,
} from '../Uds/ComServiceType.ta';
export {
  ComServiceType,
  _enum_for_ComServiceType,
  ComServiceType_voice /* IMPORTED_LONG_ENUMERATION_ITEM */,
  voice /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_fax /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_textPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  textPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_videoPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  videoPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_publicPhoneBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicPhoneBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_switchBoard /* IMPORTED_LONG_ENUMERATION_ITEM */,
  switchBoard /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_pager /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pager /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_e_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  e_mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_web /* IMPORTED_LONG_ENUMERATION_ITEM */,
  web /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ComServiceType,
  _encode_ComServiceType,
} from '../Uds/ComServiceType.ta';

/* START_OF_SYMBOL_DEFINITION ComServiceTypes */
/**
 * @summary ComServiceTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComServiceTypes  ::=  SEQUENCE OF ComServiceType
 * ```
 */
export type ComServiceTypes = ComServiceType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ComServiceTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ComServiceTypes */
let _cached_decoder_for_ComServiceTypes: $.ASN1Decoder<ComServiceTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ComServiceTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ComServiceTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) ComServiceTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComServiceTypes} The decoded data structure.
 */
export function _decode_ComServiceTypes(el: _Element) {
  if (!_cached_decoder_for_ComServiceTypes) {
    _cached_decoder_for_ComServiceTypes = $._decodeSequenceOf<ComServiceType>(
      () => _decode_ComServiceType
    );
  }
  return _cached_decoder_for_ComServiceTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ComServiceTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ComServiceTypes */
let _cached_encoder_for_ComServiceTypes: $.ASN1Encoder<ComServiceTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ComServiceTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ComServiceTypes */
/**
 * @summary Encodes a(n) ComServiceTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComServiceTypes, encoded as an ASN.1 Element.
 */
export function _encode_ComServiceTypes(
  value: ComServiceTypes,
  elGetter: $.ASN1Encoder<ComServiceTypes>
) {
  if (!_cached_encoder_for_ComServiceTypes) {
    _cached_encoder_for_ComServiceTypes = $._encodeSequenceOf<ComServiceType>(
      () => _encode_ComServiceType,
      $.BER
    );
  }
  return _cached_encoder_for_ComServiceTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ComServiceTypes */

/* eslint-enable */
