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
  AddrRestrictionType,
  _enum_for_AddrRestrictionType,
  AddrRestrictionType_public /* IMPORTED_LONG_ENUMERATION_ITEM */,
  public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_secret /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secret /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_call_screen /* IMPORTED_LONG_ENUMERATION_ITEM */,
  call_screen /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_no_marketing /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_marketing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_complete_only /* IMPORTED_LONG_ENUMERATION_ITEM */,
  complete_only /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrRestrictionType,
  _encode_AddrRestrictionType,
} from '../Uds/AddrRestrictionType.ta';
export {
  AddrRestrictionType,
  _enum_for_AddrRestrictionType,
  AddrRestrictionType_public /* IMPORTED_LONG_ENUMERATION_ITEM */,
  public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_secret /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secret /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_call_screen /* IMPORTED_LONG_ENUMERATION_ITEM */,
  call_screen /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_no_marketing /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_marketing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_complete_only /* IMPORTED_LONG_ENUMERATION_ITEM */,
  complete_only /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrRestrictionType,
  _encode_AddrRestrictionType,
} from '../Uds/AddrRestrictionType.ta';

/* START_OF_SYMBOL_DEFINITION AddrRestriction */
/**
 * @summary AddrRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrRestriction  ::=  AddrRestrictionType
 * ```
 */
export type AddrRestriction = AddrRestrictionType; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestriction */
let _cached_decoder_for_AddrRestriction: $.ASN1Decoder<AddrRestriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestriction */

/* START_OF_SYMBOL_DEFINITION _decode_AddrRestriction */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrRestriction} The decoded data structure.
 */
export function _decode_AddrRestriction(el: _Element) {
  if (!_cached_decoder_for_AddrRestriction) {
    _cached_decoder_for_AddrRestriction = _decode_AddrRestrictionType;
  }
  return _cached_decoder_for_AddrRestriction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestriction */
let _cached_encoder_for_AddrRestriction: $.ASN1Encoder<AddrRestriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestriction */

/* START_OF_SYMBOL_DEFINITION _encode_AddrRestriction */
/**
 * @summary Encodes a(n) AddrRestriction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrRestriction, encoded as an ASN.1 Element.
 */
export function _encode_AddrRestriction(
  value: AddrRestriction,
  elGetter: $.ASN1Encoder<AddrRestriction>
) {
  if (!_cached_encoder_for_AddrRestriction) {
    _cached_encoder_for_AddrRestriction = _encode_AddrRestrictionType;
  }
  return _cached_encoder_for_AddrRestriction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrRestriction */

/* eslint-enable */
