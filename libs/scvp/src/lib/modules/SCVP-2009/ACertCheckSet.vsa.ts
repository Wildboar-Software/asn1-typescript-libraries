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

/* START_OF_SYMBOL_DEFINITION ACertCheckSet */
/**
 * @summary ACertCheckSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACertCheckSet OBJECT IDENTIFIER ::= {
 *     id-stc-build-aa-path | id-stc-build-valid-aa-path |
 *     id-stc-build-status-checked-aa-path |
 *     id-stc-status-check-ac-and-build-status-checked-aa-path
 * }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type ACertCheckSet = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION ACertCheckSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ACertCheckSet */
let _cached_decoder_for_ACertCheckSet: $.ASN1Decoder<ACertCheckSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ACertCheckSet */

/* START_OF_SYMBOL_DEFINITION _decode_ACertCheckSet */
export function _decode_ACertCheckSet(el: _Element) {
  if (!_cached_decoder_for_ACertCheckSet) {
    _cached_decoder_for_ACertCheckSet = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_ACertCheckSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ACertCheckSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ACertCheckSet */
let _cached_encoder_for_ACertCheckSet: $.ASN1Encoder<ACertCheckSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ACertCheckSet */

/* START_OF_SYMBOL_DEFINITION _encode_ACertCheckSet */
export function _encode_ACertCheckSet(
  value: ACertCheckSet,
  elGetter: $.ASN1Encoder<ACertCheckSet>
) {
  if (!_cached_encoder_for_ACertCheckSet) {
    _cached_encoder_for_ACertCheckSet = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_ACertCheckSet(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_ACertCheckSet */

/* eslint-enable */
