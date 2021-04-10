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

/* START_OF_SYMBOL_DEFINITION _enum_for_ArcState */
/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export enum _enum_for_ArcState {
  alm = 0,
  nalm = 1,
  nalmQualifiedInhibit = 2,
  nalmTimedInhibit = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ArcState */

/* START_OF_SYMBOL_DEFINITION ArcState */
/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export type ArcState = _enum_for_ArcState;
/* END_OF_SYMBOL_DEFINITION ArcState */

/* START_OF_SYMBOL_DEFINITION ArcState */
/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export const ArcState = _enum_for_ArcState;
/* END_OF_SYMBOL_DEFINITION ArcState */

/* START_OF_SYMBOL_DEFINITION ArcState_alm */
/**
 * @summary ArcState_alm
 * @constant
 * @type {number}
 */
export const ArcState_alm: ArcState =
  ArcState.alm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcState_alm */

/* START_OF_SYMBOL_DEFINITION alm */
/**
 * @summary alm
 * @constant
 * @type {number}
 */
export const alm: ArcState = ArcState.alm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alm */

/* START_OF_SYMBOL_DEFINITION ArcState_nalm */
/**
 * @summary ArcState_nalm
 * @constant
 * @type {number}
 */
export const ArcState_nalm: ArcState =
  ArcState.nalm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcState_nalm */

/* START_OF_SYMBOL_DEFINITION nalm */
/**
 * @summary nalm
 * @constant
 * @type {number}
 */
export const nalm: ArcState = ArcState.nalm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalm */

/* START_OF_SYMBOL_DEFINITION ArcState_nalmQualifiedInhibit */
/**
 * @summary ArcState_nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmQualifiedInhibit: ArcState =
  ArcState.nalmQualifiedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcState_nalmQualifiedInhibit */

/* START_OF_SYMBOL_DEFINITION nalmQualifiedInhibit */
/**
 * @summary nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const nalmQualifiedInhibit: ArcState =
  ArcState.nalmQualifiedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmQualifiedInhibit */

/* START_OF_SYMBOL_DEFINITION ArcState_nalmTimedInhibit */
/**
 * @summary ArcState_nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmTimedInhibit: ArcState =
  ArcState.nalmTimedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ArcState_nalmTimedInhibit */

/* START_OF_SYMBOL_DEFINITION nalmTimedInhibit */
/**
 * @summary nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const nalmTimedInhibit: ArcState =
  ArcState.nalmTimedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nalmTimedInhibit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcState */
let _cached_decoder_for_ArcState: $.ASN1Decoder<ArcState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcState */

/* START_OF_SYMBOL_DEFINITION _decode_ArcState */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcState} The decoded data structure.
 */
export function _decode_ArcState(el: _Element) {
  if (!_cached_decoder_for_ArcState) {
    _cached_decoder_for_ArcState = $._decodeEnumerated;
  }
  return _cached_decoder_for_ArcState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcState */
let _cached_encoder_for_ArcState: $.ASN1Encoder<ArcState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcState */

/* START_OF_SYMBOL_DEFINITION _encode_ArcState */
/**
 * @summary Encodes a(n) ArcState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcState, encoded as an ASN.1 Element.
 */
export function _encode_ArcState(
  value: ArcState,
  elGetter: $.ASN1Encoder<ArcState>
) {
  if (!_cached_encoder_for_ArcState) {
    _cached_encoder_for_ArcState = $._encodeEnumerated;
  }
  return _cached_encoder_for_ArcState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcState */

/* eslint-enable */
