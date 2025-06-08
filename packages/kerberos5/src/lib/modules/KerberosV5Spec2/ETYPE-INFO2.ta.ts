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
  ETYPE_INFO2_ENTRY,
  _decode_ETYPE_INFO2_ENTRY,
  _encode_ETYPE_INFO2_ENTRY,
} from '../KerberosV5Spec2/ETYPE-INFO2-ENTRY.ta';
export {
  ETYPE_INFO2_ENTRY,
  _decode_ETYPE_INFO2_ENTRY,
  _encode_ETYPE_INFO2_ENTRY,
} from '../KerberosV5Spec2/ETYPE-INFO2-ENTRY.ta';

/* START_OF_SYMBOL_DEFINITION ETYPE_INFO2 */
/**
 * @summary ETYPE_INFO2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ETYPE-INFO2              ::=  SEQUENCE SIZE (1..MAX) OF ETYPE-INFO2-ENTRY
 * ```
 */
export type ETYPE_INFO2 = ETYPE_INFO2_ENTRY[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ETYPE_INFO2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ETYPE_INFO2 */
let _cached_decoder_for_ETYPE_INFO2: $.ASN1Decoder<ETYPE_INFO2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ETYPE_INFO2 */

/* START_OF_SYMBOL_DEFINITION _decode_ETYPE_INFO2 */
/**
 * @summary Decodes an ASN.1 element into a(n) ETYPE_INFO2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ETYPE_INFO2} The decoded data structure.
 */
export function _decode_ETYPE_INFO2(el: _Element) {
  if (!_cached_decoder_for_ETYPE_INFO2) {
    _cached_decoder_for_ETYPE_INFO2 = $._decodeSequenceOf<ETYPE_INFO2_ENTRY>(
      () => _decode_ETYPE_INFO2_ENTRY
    );
  }
  return _cached_decoder_for_ETYPE_INFO2(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ETYPE_INFO2 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ETYPE_INFO2 */
let _cached_encoder_for_ETYPE_INFO2: $.ASN1Encoder<ETYPE_INFO2> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ETYPE_INFO2 */

/* START_OF_SYMBOL_DEFINITION _encode_ETYPE_INFO2 */
/**
 * @summary Encodes a(n) ETYPE_INFO2 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETYPE_INFO2, encoded as an ASN.1 Element.
 */
export function _encode_ETYPE_INFO2(
  value: ETYPE_INFO2,
  elGetter: $.ASN1Encoder<ETYPE_INFO2>
) {
  if (!_cached_encoder_for_ETYPE_INFO2) {
    _cached_encoder_for_ETYPE_INFO2 = $._encodeSequenceOf<ETYPE_INFO2_ENTRY>(
      () => _encode_ETYPE_INFO2_ENTRY,
      $.BER
    );
  }
  return _cached_encoder_for_ETYPE_INFO2(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ETYPE_INFO2 */

/* eslint-enable */
