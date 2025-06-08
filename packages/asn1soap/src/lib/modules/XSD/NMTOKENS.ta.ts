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
import { NMTOKEN, _decode_NMTOKEN, _encode_NMTOKEN } from '../XSD/NMTOKEN.ta';
export { NMTOKEN, _decode_NMTOKEN, _encode_NMTOKEN } from '../XSD/NMTOKEN.ta';

/* START_OF_SYMBOL_DEFINITION NMTOKENS */
/**
 * @summary NMTOKENS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NMTOKENS  ::=  SEQUENCE (SIZE(1..MAX)) OF NMTOKEN
 * ```
 */
export type NMTOKENS = NMTOKEN[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION NMTOKENS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NMTOKENS */
let _cached_decoder_for_NMTOKENS: $.ASN1Decoder<NMTOKENS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NMTOKENS */

/* START_OF_SYMBOL_DEFINITION _decode_NMTOKENS */
/**
 * @summary Decodes an ASN.1 element into a(n) NMTOKENS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NMTOKENS} The decoded data structure.
 */
export function _decode_NMTOKENS(el: _Element) {
  if (!_cached_decoder_for_NMTOKENS) {
    _cached_decoder_for_NMTOKENS = $._decodeSequenceOf<NMTOKEN>(
      () => _decode_NMTOKEN
    );
  }
  return _cached_decoder_for_NMTOKENS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NMTOKENS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NMTOKENS */
let _cached_encoder_for_NMTOKENS: $.ASN1Encoder<NMTOKENS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NMTOKENS */

/* START_OF_SYMBOL_DEFINITION _encode_NMTOKENS */
/**
 * @summary Encodes a(n) NMTOKENS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NMTOKENS, encoded as an ASN.1 Element.
 */
export function _encode_NMTOKENS(
  value: NMTOKENS,
  elGetter: $.ASN1Encoder<NMTOKENS>
) {
  if (!_cached_encoder_for_NMTOKENS) {
    _cached_encoder_for_NMTOKENS = $._encodeSequenceOf<NMTOKEN>(
      () => _encode_NMTOKEN,
      $.BER
    );
  }
  return _cached_encoder_for_NMTOKENS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NMTOKENS */

/* eslint-enable */
