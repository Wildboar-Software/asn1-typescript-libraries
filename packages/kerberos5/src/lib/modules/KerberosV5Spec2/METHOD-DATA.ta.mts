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
  PA_DATA,
  _decode_PA_DATA,
  _encode_PA_DATA,
} from '../KerberosV5Spec2/PA-DATA.ta.mjs';
export {
  PA_DATA,
  _decode_PA_DATA,
  _encode_PA_DATA,
} from '../KerberosV5Spec2/PA-DATA.ta.mjs';

/* START_OF_SYMBOL_DEFINITION METHOD_DATA */
/**
 * @summary METHOD_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * METHOD-DATA      ::=  SEQUENCE OF PA-DATA
 * ```
 */
export type METHOD_DATA = PA_DATA[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION METHOD_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_METHOD_DATA */
let _cached_decoder_for_METHOD_DATA: $.ASN1Decoder<METHOD_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_METHOD_DATA */

/* START_OF_SYMBOL_DEFINITION _decode_METHOD_DATA */
/**
 * @summary Decodes an ASN.1 element into a(n) METHOD_DATA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {METHOD_DATA} The decoded data structure.
 */
export function _decode_METHOD_DATA(el: _Element) {
  if (!_cached_decoder_for_METHOD_DATA) {
    _cached_decoder_for_METHOD_DATA = $._decodeSequenceOf<PA_DATA>(
      () => _decode_PA_DATA
    );
  }
  return _cached_decoder_for_METHOD_DATA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_METHOD_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_METHOD_DATA */
let _cached_encoder_for_METHOD_DATA: $.ASN1Encoder<METHOD_DATA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_METHOD_DATA */

/* START_OF_SYMBOL_DEFINITION _encode_METHOD_DATA */
/**
 * @summary Encodes a(n) METHOD_DATA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The METHOD_DATA, encoded as an ASN.1 Element.
 */
export function _encode_METHOD_DATA(
  value: METHOD_DATA,
  elGetter: $.ASN1Encoder<METHOD_DATA>
) {
  if (!_cached_encoder_for_METHOD_DATA) {
    _cached_encoder_for_METHOD_DATA = $._encodeSequenceOf<PA_DATA>(
      () => _encode_PA_DATA,
      $.BER
    );
  }
  return _cached_encoder_for_METHOD_DATA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_METHOD_DATA */

/* eslint-enable */
