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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  UDPTLPacket_error_recovery_fec_info,
  _decode_UDPTLPacket_error_recovery_fec_info,
  _encode_UDPTLPacket_error_recovery_fec_info,
} from '../T38/UDPTLPacket-error-recovery-fec-info.ta.mjs';

/**
 * @summary UDPTLPacket_error_recovery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UDPTLPacket-error-recovery ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UDPTLPacket_error_recovery =
  | { secondary_ifp_packets: _Element[] } /* CHOICE_ALT_ROOT */
  | { fec_info: UDPTLPacket_error_recovery_fec_info } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_UDPTLPacket_error_recovery: $.ASN1Decoder<UDPTLPacket_error_recovery> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UDPTLPacket_error_recovery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UDPTLPacket_error_recovery} The decoded data structure.
 */
export function _decode_UDPTLPacket_error_recovery(el: _Element) {
  if (!_cached_decoder_for_UDPTLPacket_error_recovery) {
    _cached_decoder_for_UDPTLPacket_error_recovery = $._decode_inextensible_choice<UDPTLPacket_error_recovery>(
      {
        'CONTEXT 0': [
          'secondary_ifp_packets',
          $._decodeSequenceOf<_Element>(() => $._decodeAny),
        ],
        'CONTEXT 1': ['fec_info', _decode_UDPTLPacket_error_recovery_fec_info],
      }
    );
  }
  return _cached_decoder_for_UDPTLPacket_error_recovery(el);
}


let _cached_encoder_for_UDPTLPacket_error_recovery: $.ASN1Encoder<UDPTLPacket_error_recovery> | null = null;


/**
 * @summary Encodes a(n) UDPTLPacket_error_recovery into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPTLPacket_error_recovery, encoded as an ASN.1 Element.
 */
export function _encode_UDPTLPacket_error_recovery(
  value: UDPTLPacket_error_recovery,
  elGetter: $.ASN1Encoder<UDPTLPacket_error_recovery>
) {
  if (!_cached_encoder_for_UDPTLPacket_error_recovery) {
    _cached_encoder_for_UDPTLPacket_error_recovery = $._encode_choice<UDPTLPacket_error_recovery>(
      {
        secondary_ifp_packets: $._encodeSequenceOf<_Element>(
          () => $._encodeAny,
          $.BER
        ),
        fec_info: _encode_UDPTLPacket_error_recovery_fec_info,
      },
      $.BER
    );
  }
  return _cached_encoder_for_UDPTLPacket_error_recovery(value, elGetter);
}


/* eslint-enable */
