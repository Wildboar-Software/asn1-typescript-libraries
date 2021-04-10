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
  CommsAddress,
  _decode_CommsAddress,
  _encode_CommsAddress,
} from '../Uds/CommsAddress.ta';
export {
  CommsAddress,
  _decode_CommsAddress,
  _encode_CommsAddress,
} from '../Uds/CommsAddress.ta';

/* START_OF_SYMBOL_DEFINITION Family */
/**
 * @summary Family
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Family  ::=  CHOICE {commsAddress  CommsAddress
 * }
 * ```
 */
export type Family = { commsAddress: CommsAddress } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Family */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Family */
let _cached_decoder_for_Family: $.ASN1Decoder<Family> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Family */

/* START_OF_SYMBOL_DEFINITION _decode_Family */
/**
 * @summary Decodes an ASN.1 element into a(n) Family
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Family} The decoded data structure.
 */
export function _decode_Family(el: _Element) {
  if (!_cached_decoder_for_Family) {
    _cached_decoder_for_Family = $._decode_inextensible_choice<Family>({
      'CONTEXT 0': ['commsAddress', _decode_CommsAddress],
    });
  }
  return _cached_decoder_for_Family(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Family */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Family */
let _cached_encoder_for_Family: $.ASN1Encoder<Family> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Family */

/* START_OF_SYMBOL_DEFINITION _encode_Family */
/**
 * @summary Encodes a(n) Family into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Family, encoded as an ASN.1 Element.
 */
export function _encode_Family(value: Family, elGetter: $.ASN1Encoder<Family>) {
  if (!_cached_encoder_for_Family) {
    _cached_encoder_for_Family = $._encode_choice<Family>(
      {
        commsAddress: _encode_CommsAddress,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Family(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Family */

/* eslint-enable */
