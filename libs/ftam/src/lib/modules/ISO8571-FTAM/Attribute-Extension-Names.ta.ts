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
  Attribute_Extension_Set_Name,
  _decode_Attribute_Extension_Set_Name,
  _encode_Attribute_Extension_Set_Name,
} from '../ISO8571-FTAM/Attribute-Extension-Set-Name.ta';
export {
  Attribute_Extension_Set_Name,
  _decode_Attribute_Extension_Set_Name,
  _encode_Attribute_Extension_Set_Name,
} from '../ISO8571-FTAM/Attribute-Extension-Set-Name.ta';

/* START_OF_SYMBOL_DEFINITION Attribute_Extension_Names */
/**
 * @summary Attribute_Extension_Names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extension-Names  ::=  SEQUENCE OF Attribute-Extension-Set-Name
 * ```
 */
export type Attribute_Extension_Names = Attribute_Extension_Set_Name[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Attribute_Extension_Names */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Names */
let _cached_decoder_for_Attribute_Extension_Names: $.ASN1Decoder<Attribute_Extension_Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Names */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Names */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extension_Names
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extension_Names} The decoded data structure.
 */
export function _decode_Attribute_Extension_Names(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extension_Names) {
    _cached_decoder_for_Attribute_Extension_Names = $._decodeSequenceOf<Attribute_Extension_Set_Name>(
      () => _decode_Attribute_Extension_Set_Name
    );
  }
  return _cached_decoder_for_Attribute_Extension_Names(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Names */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Names */
let _cached_encoder_for_Attribute_Extension_Names: $.ASN1Encoder<Attribute_Extension_Names> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Names */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Names */
/**
 * @summary Encodes a(n) Attribute_Extension_Names into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extension_Names, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extension_Names(
  value: Attribute_Extension_Names,
  elGetter: $.ASN1Encoder<Attribute_Extension_Names>
) {
  if (!_cached_encoder_for_Attribute_Extension_Names) {
    _cached_encoder_for_Attribute_Extension_Names = $._encodeSequenceOf<Attribute_Extension_Set_Name>(
      () => _encode_Attribute_Extension_Set_Name,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Extension_Names(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Names */

/* eslint-enable */
