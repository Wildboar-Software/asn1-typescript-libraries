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
import * as $ from '@wildboar/asn1/functional';
import {
  SessionConnectionIdentifier,
  _decode_SessionConnectionIdentifier,
  _encode_SessionConnectionIdentifier,
} from '../Reliable-Transfer-APDU/SessionConnectionIdentifier.ta.mjs';

/**
 * @summary ConnectionData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionData  ::=  CHOICE {
 *   open     [0]  OPEN.&Type, -- RTSE user data
 *
 *   -- this alternative is encoded as [0] IMPLICIT NULL
 *   -- in the case of absence of RTSE user data,
 *   recover  [1] IMPLICIT SessionConnectionIdentifier
 * }
 * ```
 */
export type ConnectionData =
  | { open: _Element } /* CHOICE_ALT_ROOT */
  | { recover: SessionConnectionIdentifier } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ConnectionData: $.ASN1Decoder<ConnectionData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionData} The decoded data structure.
 */
export function _decode_ConnectionData(el: _Element) {
  if (!_cached_decoder_for_ConnectionData) {
    _cached_decoder_for_ConnectionData = $._decode_inextensible_choice<ConnectionData>(
      {
        'CONTEXT 0': ['open', $._decode_explicit<_Element>(() => $._decodeAny)],
        'CONTEXT 1': [
          'recover',
          $._decode_implicit<SessionConnectionIdentifier>(
            () => _decode_SessionConnectionIdentifier
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_ConnectionData(el);
}


let _cached_encoder_for_ConnectionData: $.ASN1Encoder<ConnectionData> | null = null;


/**
 * @summary Encodes a(n) ConnectionData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionData, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionData(
  value: ConnectionData,
  elGetter: $.ASN1Encoder<ConnectionData>
) {
  if (!_cached_encoder_for_ConnectionData) {
    _cached_encoder_for_ConnectionData = $._encode_choice<ConnectionData>(
      {
        open: $._encode_explicit(
          _TagClass.context,
          0,
          () => $._encodeAny,
          $.BER
        ),
        recover: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_SessionConnectionIdentifier,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ConnectionData(value, elGetter);
}


/* eslint-enable */
