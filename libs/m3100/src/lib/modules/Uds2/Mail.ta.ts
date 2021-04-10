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
import { Ub256, _decode_Ub256, _encode_Ub256 } from '../Uds2/Ub256.ta';
export { Ub256, _decode_Ub256, _encode_Ub256 } from '../Uds2/Ub256.ta';

/* START_OF_SYMBOL_DEFINITION Mail */
/**
 * @summary Mail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mail  ::=  Ub256
 * ```
 */
export type Mail = Ub256; // DefinedType
/* END_OF_SYMBOL_DEFINITION Mail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mail */
let _cached_decoder_for_Mail: $.ASN1Decoder<Mail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mail */

/* START_OF_SYMBOL_DEFINITION _decode_Mail */
/**
 * @summary Decodes an ASN.1 element into a(n) Mail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mail} The decoded data structure.
 */
export function _decode_Mail(el: _Element) {
  if (!_cached_decoder_for_Mail) {
    _cached_decoder_for_Mail = _decode_Ub256;
  }
  return _cached_decoder_for_Mail(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Mail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mail */
let _cached_encoder_for_Mail: $.ASN1Encoder<Mail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mail */

/* START_OF_SYMBOL_DEFINITION _encode_Mail */
/**
 * @summary Encodes a(n) Mail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mail, encoded as an ASN.1 Element.
 */
export function _encode_Mail(value: Mail, elGetter: $.ASN1Encoder<Mail>) {
  if (!_cached_encoder_for_Mail) {
    _cached_encoder_for_Mail = _encode_Ub256;
  }
  return _cached_encoder_for_Mail(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Mail */

/* eslint-enable */
