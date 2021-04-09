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
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta';
export {
  KerberosFlags,
  _decode_KerberosFlags,
  _encode_KerberosFlags,
} from '../KerberosV5Spec2/KerberosFlags.ta';

/* START_OF_SYMBOL_DEFINITION TicketFlags */
/**
 * @summary TicketFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TicketFlags      ::=  KerberosFlags
 * ```
 */
export type TicketFlags = KerberosFlags; // DefinedType
/* END_OF_SYMBOL_DEFINITION TicketFlags */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TicketFlags */
let _cached_decoder_for_TicketFlags: $.ASN1Decoder<TicketFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TicketFlags */

/* START_OF_SYMBOL_DEFINITION _decode_TicketFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) TicketFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TicketFlags} The decoded data structure.
 */
export function _decode_TicketFlags(el: _Element) {
  if (!_cached_decoder_for_TicketFlags) {
    _cached_decoder_for_TicketFlags = _decode_KerberosFlags;
  }
  return _cached_decoder_for_TicketFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TicketFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TicketFlags */
let _cached_encoder_for_TicketFlags: $.ASN1Encoder<TicketFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TicketFlags */

/* START_OF_SYMBOL_DEFINITION _encode_TicketFlags */
/**
 * @summary Encodes a(n) TicketFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TicketFlags, encoded as an ASN.1 Element.
 */
export function _encode_TicketFlags(
  value: TicketFlags,
  elGetter: $.ASN1Encoder<TicketFlags>
) {
  if (!_cached_encoder_for_TicketFlags) {
    _cached_encoder_for_TicketFlags = _encode_KerberosFlags;
  }
  return _cached_encoder_for_TicketFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TicketFlags */

/* eslint-enable */
