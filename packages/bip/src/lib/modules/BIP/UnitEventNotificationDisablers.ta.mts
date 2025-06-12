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
  UnitEventNotificationDisabler,
  _decode_UnitEventNotificationDisabler,
  _encode_UnitEventNotificationDisabler,
} from '../BIP/UnitEventNotificationDisabler.ta.mjs';
export {
  UnitEventNotificationDisabler,
  _decode_UnitEventNotificationDisabler,
  _encode_UnitEventNotificationDisabler,
} from '../BIP/UnitEventNotificationDisabler.ta.mjs';

/* START_OF_SYMBOL_DEFINITION UnitEventNotificationDisablers */
/**
 * @summary UnitEventNotificationDisablers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEventNotificationDisablers  ::=
 *   SET OF disabler UnitEventNotificationDisabler
 * ```
 */
export type UnitEventNotificationDisablers = UnitEventNotificationDisabler[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION UnitEventNotificationDisablers */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventNotificationDisablers */
let _cached_decoder_for_UnitEventNotificationDisablers: $.ASN1Decoder<UnitEventNotificationDisablers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitEventNotificationDisablers */

/* START_OF_SYMBOL_DEFINITION _decode_UnitEventNotificationDisablers */
/**
 * @summary Decodes an ASN.1 element into a(n) UnitEventNotificationDisablers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEventNotificationDisablers} The decoded data structure.
 */
export function _decode_UnitEventNotificationDisablers(el: _Element) {
  if (!_cached_decoder_for_UnitEventNotificationDisablers) {
    _cached_decoder_for_UnitEventNotificationDisablers = $._decodeSetOf<UnitEventNotificationDisabler>(
      () => _decode_UnitEventNotificationDisabler
    );
  }
  return _cached_decoder_for_UnitEventNotificationDisablers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnitEventNotificationDisablers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventNotificationDisablers */
let _cached_encoder_for_UnitEventNotificationDisablers: $.ASN1Encoder<UnitEventNotificationDisablers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitEventNotificationDisablers */

/* START_OF_SYMBOL_DEFINITION _encode_UnitEventNotificationDisablers */
/**
 * @summary Encodes a(n) UnitEventNotificationDisablers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventNotificationDisablers, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventNotificationDisablers(
  value: UnitEventNotificationDisablers,
  elGetter: $.ASN1Encoder<UnitEventNotificationDisablers>
) {
  if (!_cached_encoder_for_UnitEventNotificationDisablers) {
    _cached_encoder_for_UnitEventNotificationDisablers = $._encodeSetOf<UnitEventNotificationDisabler>(
      () => _encode_UnitEventNotificationDisabler,
      $.BER
    );
  }
  return _cached_encoder_for_UnitEventNotificationDisablers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnitEventNotificationDisablers */

/* eslint-enable */
