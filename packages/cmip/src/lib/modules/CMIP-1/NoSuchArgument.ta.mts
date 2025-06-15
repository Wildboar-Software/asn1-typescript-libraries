/* eslint-disable */
import {
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
  NoSuchArgument_actionId,
  _decode_NoSuchArgument_actionId,
  _encode_NoSuchArgument_actionId,
} from '../CMIP-1/NoSuchArgument-actionId.ta.mjs';
import {
  NoSuchArgument_eventId,
  _decode_NoSuchArgument_eventId,
  _encode_NoSuchArgument_eventId,
} from '../CMIP-1/NoSuchArgument-eventId.ta.mjs';

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


let _cached_decoder_for_NoSuchArgument: $.ASN1Decoder<NoSuchArgument> | null = null;


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


let _cached_encoder_for_NoSuchArgument: $.ASN1Encoder<NoSuchArgument> | null = null;


/**
 * @summary Encodes a(n) NoSuchArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
