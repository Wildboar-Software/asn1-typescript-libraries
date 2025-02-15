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
  NoSuchArgument_actionId,
  _decode_NoSuchArgument_actionId,
  _encode_NoSuchArgument_actionId,
} from '../CMIP-1/NoSuchArgument-actionId.ta';
export {
  NoSuchArgument_actionId,
  _decode_NoSuchArgument_actionId,
  _encode_NoSuchArgument_actionId,
} from '../CMIP-1/NoSuchArgument-actionId.ta';
import {
  NoSuchArgument_eventId,
  _decode_NoSuchArgument_eventId,
  _encode_NoSuchArgument_eventId,
} from '../CMIP-1/NoSuchArgument-eventId.ta';
export {
  NoSuchArgument_eventId,
  _decode_NoSuchArgument_eventId,
  _encode_NoSuchArgument_eventId,
} from '../CMIP-1/NoSuchArgument-eventId.ta';

/* START_OF_SYMBOL_DEFINITION NoSuchArgument */
/**
 * @summary NoSuchArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchArgument  ::=  CHOICE {
 *   actionId
 *     [0] IMPLICIT SEQUENCE {managedObjectClass  ObjectClass OPTIONAL,
 *                            actionType          CMIP-ACTION.&id({ActionSet})
 *   },
 *   eventId
 *     [1] IMPLICIT SEQUENCE {managedObjectClass  ObjectClass OPTIONAL,
 *                            eventType           CMIP-EVENT.&id({EventSet})
 *   }
 * }
 * ```
 */
export type NoSuchArgument =
  | { actionId: NoSuchArgument_actionId } /* CHOICE_ALT_ROOT */
  | { eventId: NoSuchArgument_eventId } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION NoSuchArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument */
let _cached_decoder_for_NoSuchArgument: $.ASN1Decoder<NoSuchArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchArgument} The decoded data structure.
 */
export function _decode_NoSuchArgument(el: _Element) {
  if (!_cached_decoder_for_NoSuchArgument) {
    _cached_decoder_for_NoSuchArgument = $._decode_inextensible_choice<NoSuchArgument>(
      {
        'CONTEXT 0': [
          'actionId',
          $._decode_implicit<NoSuchArgument_actionId>(
            () => _decode_NoSuchArgument_actionId
          ),
        ],
        'CONTEXT 1': [
          'eventId',
          $._decode_implicit<NoSuchArgument_eventId>(
            () => _decode_NoSuchArgument_eventId
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_NoSuchArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument */
let _cached_encoder_for_NoSuchArgument: $.ASN1Encoder<NoSuchArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchArgument */
/**
 * @summary Encodes a(n) NoSuchArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchArgument, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchArgument(
  value: NoSuchArgument,
  elGetter: $.ASN1Encoder<NoSuchArgument>
) {
  if (!_cached_encoder_for_NoSuchArgument) {
    _cached_encoder_for_NoSuchArgument = $._encode_choice<NoSuchArgument>(
      {
        actionId: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_NoSuchArgument_actionId,
          $.BER
        ),
        eventId: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_NoSuchArgument_eventId,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_NoSuchArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchArgument */

/* eslint-enable */
