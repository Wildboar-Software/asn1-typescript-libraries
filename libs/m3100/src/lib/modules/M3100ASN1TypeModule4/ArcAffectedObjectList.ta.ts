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

/* START_OF_SYMBOL_DEFINITION ArcAffectedObjectList */
/**
 * @summary ArcAffectedObjectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcAffectedObjectList  ::=  SET OF ObjectInstance
 * ```
 */
export type ArcAffectedObjectList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ArcAffectedObjectList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcAffectedObjectList */
let _cached_decoder_for_ArcAffectedObjectList: $.ASN1Decoder<ArcAffectedObjectList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcAffectedObjectList */

/* START_OF_SYMBOL_DEFINITION _decode_ArcAffectedObjectList */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcAffectedObjectList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcAffectedObjectList} The decoded data structure.
 */
export function _decode_ArcAffectedObjectList(el: _Element) {
  if (!_cached_decoder_for_ArcAffectedObjectList) {
    _cached_decoder_for_ArcAffectedObjectList = $._decodeSetOf<ObjectInstance>(
      () => _decode_ObjectInstance
    );
  }
  return _cached_decoder_for_ArcAffectedObjectList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcAffectedObjectList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcAffectedObjectList */
let _cached_encoder_for_ArcAffectedObjectList: $.ASN1Encoder<ArcAffectedObjectList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcAffectedObjectList */

/* START_OF_SYMBOL_DEFINITION _encode_ArcAffectedObjectList */
/**
 * @summary Encodes a(n) ArcAffectedObjectList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcAffectedObjectList, encoded as an ASN.1 Element.
 */
export function _encode_ArcAffectedObjectList(
  value: ArcAffectedObjectList,
  elGetter: $.ASN1Encoder<ArcAffectedObjectList>
) {
  if (!_cached_encoder_for_ArcAffectedObjectList) {
    _cached_encoder_for_ArcAffectedObjectList = $._encodeSetOf<ObjectInstance>(
      () => _encode_ObjectInstance,
      $.BER
    );
  }
  return _cached_encoder_for_ArcAffectedObjectList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcAffectedObjectList */

/* eslint-enable */
