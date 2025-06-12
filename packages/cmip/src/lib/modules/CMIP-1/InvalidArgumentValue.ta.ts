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
  ActionInfo,
  _decode_ActionInfo,
  _encode_ActionInfo,
} from '../CMIP-1/ActionInfo.ta.js';
export {
  ActionInfo,
  _decode_ActionInfo,
  _encode_ActionInfo,
} from '../CMIP-1/ActionInfo.ta.js';
import {
  InvalidArgumentValue_eventValue,
  _decode_InvalidArgumentValue_eventValue,
  _encode_InvalidArgumentValue_eventValue,
} from '../CMIP-1/InvalidArgumentValue-eventValue.ta.js';
export {
  InvalidArgumentValue_eventValue,
  _decode_InvalidArgumentValue_eventValue,
  _encode_InvalidArgumentValue_eventValue,
} from '../CMIP-1/InvalidArgumentValue-eventValue.ta.js';

/* START_OF_SYMBOL_DEFINITION InvalidArgumentValue */
/**
 * @summary InvalidArgumentValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidArgumentValue  ::=  CHOICE {
 *   actionValue  [0] IMPLICIT ActionInfo,
 *   eventValue
 *     [1] IMPLICIT SEQUENCE {eventType  CMIP-EVENT.&id({EventSet}),
 *                            eventInfo
 *                              [8]  CMIP-EVENT.&Value
 *                                     ({EventSet}{@.eventType}) OPTIONAL
 *   }
 * }
 * ```
 */
export type InvalidArgumentValue =
  | { actionValue: ActionInfo } /* CHOICE_ALT_ROOT */
  | { eventValue: InvalidArgumentValue_eventValue } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION InvalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidArgumentValue */
let _cached_decoder_for_InvalidArgumentValue: $.ASN1Decoder<InvalidArgumentValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION _decode_InvalidArgumentValue */
/**
 * @summary Decodes an ASN.1 element into a(n) InvalidArgumentValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidArgumentValue} The decoded data structure.
 */
export function _decode_InvalidArgumentValue(el: _Element) {
  if (!_cached_decoder_for_InvalidArgumentValue) {
    _cached_decoder_for_InvalidArgumentValue = $._decode_inextensible_choice<InvalidArgumentValue>(
      {
        'CONTEXT 0': [
          'actionValue',
          $._decode_implicit<ActionInfo>(() => _decode_ActionInfo),
        ],
        'CONTEXT 1': [
          'eventValue',
          $._decode_implicit<InvalidArgumentValue_eventValue>(
            () => _decode_InvalidArgumentValue_eventValue
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_InvalidArgumentValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidArgumentValue */
let _cached_encoder_for_InvalidArgumentValue: $.ASN1Encoder<InvalidArgumentValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidArgumentValue */

/* START_OF_SYMBOL_DEFINITION _encode_InvalidArgumentValue */
/**
 * @summary Encodes a(n) InvalidArgumentValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidArgumentValue, encoded as an ASN.1 Element.
 */
export function _encode_InvalidArgumentValue(
  value: InvalidArgumentValue,
  elGetter: $.ASN1Encoder<InvalidArgumentValue>
) {
  if (!_cached_encoder_for_InvalidArgumentValue) {
    _cached_encoder_for_InvalidArgumentValue = $._encode_choice<InvalidArgumentValue>(
      {
        actionValue: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_ActionInfo,
          $.BER
        ),
        eventValue: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_InvalidArgumentValue_eventValue,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_InvalidArgumentValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvalidArgumentValue */

/* eslint-enable */
