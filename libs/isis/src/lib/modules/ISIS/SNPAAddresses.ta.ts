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
  SNPAAddress,
  _decode_SNPAAddress,
  _encode_SNPAAddress,
} from '@wildboar/nlm/src/lib/modules/NLM/SNPAAddress.ta';

/* START_OF_SYMBOL_DEFINITION SNPAAddresses */
/**
 * @summary SNPAAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SNPAAddresses  ::=  SET OF SNPAAddress
 * ```
 */
export type SNPAAddresses = SNPAAddress[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddresses */
let _cached_decoder_for_SNPAAddresses: $.ASN1Decoder<SNPAAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_SNPAAddresses */
/**
 * @summary Decodes an ASN.1 element into a(n) SNPAAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SNPAAddresses} The decoded data structure.
 */
export function _decode_SNPAAddresses(el: _Element) {
  if (!_cached_decoder_for_SNPAAddresses) {
    _cached_decoder_for_SNPAAddresses = $._decodeSetOf<SNPAAddress>(
      () => _decode_SNPAAddress
    );
  }
  return _cached_decoder_for_SNPAAddresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddresses */
let _cached_encoder_for_SNPAAddresses: $.ASN1Encoder<SNPAAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SNPAAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_SNPAAddresses */
/**
 * @summary Encodes a(n) SNPAAddresses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SNPAAddresses, encoded as an ASN.1 Element.
 */
export function _encode_SNPAAddresses(
  value: SNPAAddresses,
  elGetter: $.ASN1Encoder<SNPAAddresses>
) {
  if (!_cached_encoder_for_SNPAAddresses) {
    _cached_encoder_for_SNPAAddresses = $._encodeSetOf<SNPAAddress>(
      () => _encode_SNPAAddress,
      $.BER
    );
  }
  return _cached_encoder_for_SNPAAddresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SNPAAddresses */

/* eslint-enable */
