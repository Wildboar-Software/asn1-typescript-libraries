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

/* START_OF_SYMBOL_DEFINITION DateTime */
/**
 * @summary DateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTime  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Midnight=Start"))
 * (CONSTRAINED BY {/ *The time-zone shall be in the range -14 to +14* /})
 * (CONSTRAINED BY {/ *The seconds and fractions of a second shall be less
 *                    than 60 (no leap seconds supported, in accordance with
 *                    W3C XML Schema 1.0 Part 2, 3.2.7)* /})
 * (CONSTRAINED BY {/ *The type is constrained to "Time=HMSFn" for any n* /})
 * ```
 */
export type DateTime = TIME; // TimeType
/* END_OF_SYMBOL_DEFINITION DateTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTime */
let _cached_decoder_for_DateTime: $.ASN1Decoder<DateTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTime */

/* START_OF_SYMBOL_DEFINITION _decode_DateTime */
/**
 * @summary Decodes an ASN.1 element into a(n) DateTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateTime} The decoded data structure.
 */
export function _decode_DateTime(el: _Element) {
  if (!_cached_decoder_for_DateTime) {
    _cached_decoder_for_DateTime = $._decodeTime;
  }
  return _cached_decoder_for_DateTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DateTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTime */
let _cached_encoder_for_DateTime: $.ASN1Encoder<DateTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTime */

/* START_OF_SYMBOL_DEFINITION _encode_DateTime */
/**
 * @summary Encodes a(n) DateTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateTime, encoded as an ASN.1 Element.
 */
export function _encode_DateTime(
  value: DateTime,
  elGetter: $.ASN1Encoder<DateTime>
) {
  if (!_cached_encoder_for_DateTime) {
    _cached_encoder_for_DateTime = $._encodeTime;
  }
  return _cached_encoder_for_DateTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DateTime */

/* eslint-enable */
