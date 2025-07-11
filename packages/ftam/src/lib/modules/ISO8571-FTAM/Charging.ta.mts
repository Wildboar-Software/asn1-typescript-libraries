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
  Charging_Item,
  _decode_Charging_Item,
  _encode_Charging_Item,
} from '../ISO8571-FTAM/Charging-Item.ta.mjs';

/**
 * @summary Charging
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Charging  ::=
 *   [APPLICATION 9] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {resource-identifier  [0] IMPLICIT GraphicString,
 *                 charging-unit        [1] IMPLICIT GraphicString,
 *                 charging-value       [2] IMPLICIT INTEGER}
 * ```
 */
export type Charging = Charging_Item[]; // SequenceOfType


let _cached_decoder_for_Charging: $.ASN1Decoder<Charging> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Charging
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Charging} The decoded data structure.
 */
export function _decode_Charging(el: _Element): Charging {
  if (!_cached_decoder_for_Charging) {
    _cached_decoder_for_Charging = $._decode_implicit<Charging>(() =>
      $._decodeSequenceOf<Charging_Item>(() => _decode_Charging_Item)
    );
  }
  return _cached_decoder_for_Charging(el);
}


let _cached_encoder_for_Charging: $.ASN1Encoder<Charging> | null = null;


/**
 * @summary Encodes a(n) Charging into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Charging, encoded as an ASN.1 Element.
 */
export function _encode_Charging(
  value: Charging,
  elGetter: $.ASN1Encoder<Charging>
): _Element {
  if (!_cached_encoder_for_Charging) {
    _cached_encoder_for_Charging = $._encode_implicit(
      _TagClass.application,
      9,
      () =>
        $._encodeSequenceOf<Charging_Item>(() => _encode_Charging_Item, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_Charging(value, elGetter);
}


/* eslint-enable */
