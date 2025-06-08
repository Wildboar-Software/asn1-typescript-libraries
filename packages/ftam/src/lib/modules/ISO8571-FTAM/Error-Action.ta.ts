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

/* START_OF_SYMBOL_DEFINITION Error_Action */
/**
 * @summary Error_Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Error-Action  ::=  INTEGER {terminate(0), continue(1)}
 * ```
 */
export type Error_Action = INTEGER;
/* END_OF_SYMBOL_DEFINITION Error_Action */

/* START_OF_SYMBOL_DEFINITION Error_Action_terminate */
/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const Error_Action_terminate: Error_Action = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Error_Action_terminate */

/* START_OF_SYMBOL_DEFINITION terminate */
/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const terminate: Error_Action = Error_Action_terminate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION terminate */

/* START_OF_SYMBOL_DEFINITION Error_Action_continue_ */
/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const Error_Action_continue_: Error_Action = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Error_Action_continue_ */

/* START_OF_SYMBOL_DEFINITION continue_ */
/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const continue_: Error_Action = Error_Action_continue_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION continue_ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Error_Action */
let _cached_decoder_for_Error_Action: $.ASN1Decoder<Error_Action> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Error_Action */

/* START_OF_SYMBOL_DEFINITION _decode_Error_Action */
/**
 * @summary Decodes an ASN.1 element into a(n) Error_Action
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Error_Action} The decoded data structure.
 */
export function _decode_Error_Action(el: _Element) {
  if (!_cached_decoder_for_Error_Action) {
    _cached_decoder_for_Error_Action = $._decodeInteger;
  }
  return _cached_decoder_for_Error_Action(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Error_Action */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Error_Action */
let _cached_encoder_for_Error_Action: $.ASN1Encoder<Error_Action> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Error_Action */

/* START_OF_SYMBOL_DEFINITION _encode_Error_Action */
/**
 * @summary Encodes a(n) Error_Action into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Error_Action, encoded as an ASN.1 Element.
 */
export function _encode_Error_Action(
  value: Error_Action,
  elGetter: $.ASN1Encoder<Error_Action>
) {
  if (!_cached_encoder_for_Error_Action) {
    _cached_encoder_for_Error_Action = $._encodeInteger;
  }
  return _cached_encoder_for_Error_Action(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Error_Action */

/* eslint-enable */
