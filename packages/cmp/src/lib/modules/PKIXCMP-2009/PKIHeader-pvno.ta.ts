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

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno */
/**
 * @summary PKIHeader_pvno
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIHeader-pvno ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKIHeader_pvno = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp1999 */
/**
 * @summary PKIHeader_pvno_cmp1999
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp1999: PKIHeader_pvno = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp1999 */

/* START_OF_SYMBOL_DEFINITION cmp1999 */
/**
 * @summary PKIHeader_pvno_cmp1999
 * @constant
 * @type {number}
 */
export const cmp1999: PKIHeader_pvno = PKIHeader_pvno_cmp1999; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cmp1999 */

/* START_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp2000 */
/**
 * @summary PKIHeader_pvno_cmp2000
 * @constant
 * @type {number}
 */
export const PKIHeader_pvno_cmp2000: PKIHeader_pvno = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIHeader_pvno_cmp2000 */

/* START_OF_SYMBOL_DEFINITION cmp2000 */
/**
 * @summary PKIHeader_pvno_cmp2000
 * @constant
 * @type {number}
 */
export const cmp2000: PKIHeader_pvno = PKIHeader_pvno_cmp2000; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cmp2000 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader_pvno */
let _cached_decoder_for_PKIHeader_pvno: $.ASN1Decoder<PKIHeader_pvno> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _decode_PKIHeader_pvno */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIHeader_pvno
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIHeader_pvno} The decoded data structure.
 */
export function _decode_PKIHeader_pvno(el: _Element) {
  if (!_cached_decoder_for_PKIHeader_pvno) {
    _cached_decoder_for_PKIHeader_pvno = $._decodeInteger;
  }
  return _cached_decoder_for_PKIHeader_pvno(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader_pvno */
let _cached_encoder_for_PKIHeader_pvno: $.ASN1Encoder<PKIHeader_pvno> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader_pvno */

/* START_OF_SYMBOL_DEFINITION _encode_PKIHeader_pvno */
/**
 * @summary Encodes a(n) PKIHeader_pvno into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIHeader_pvno, encoded as an ASN.1 Element.
 */
export function _encode_PKIHeader_pvno(
  value: PKIHeader_pvno,
  elGetter: $.ASN1Encoder<PKIHeader_pvno>
) {
  if (!_cached_encoder_for_PKIHeader_pvno) {
    _cached_encoder_for_PKIHeader_pvno = $._encodeInteger;
  }
  return _cached_encoder_for_PKIHeader_pvno(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIHeader_pvno */

/* eslint-enable */
