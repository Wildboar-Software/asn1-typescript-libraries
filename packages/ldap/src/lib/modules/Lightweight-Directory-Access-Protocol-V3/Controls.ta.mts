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
  Control,
  _decode_Control,
  _encode_Control,
} from '../Lightweight-Directory-Access-Protocol-V3/Control.ta.mjs';

/**
 * @summary Controls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Controls  ::=  SEQUENCE OF control Control
 * ```
 */
export type Controls = Control[]; // SequenceOfType


let _cached_decoder_for_Controls: $.ASN1Decoder<Controls> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Controls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Controls} The decoded data structure.
 */
export function _decode_Controls(el: _Element): Controls {
  if (!_cached_decoder_for_Controls) {
    _cached_decoder_for_Controls = $._decodeSequenceOf<Control>(
      () => _decode_Control
    );
  }
  return _cached_decoder_for_Controls(el);
}


let _cached_encoder_for_Controls: $.ASN1Encoder<Controls> | null = null;


/**
 * @summary Encodes a(n) Controls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Controls, encoded as an ASN.1 Element.
 */
export function _encode_Controls(
  value: Controls,
  elGetter: $.ASN1Encoder<Controls>
): _Element {
  if (!_cached_encoder_for_Controls) {
    _cached_encoder_for_Controls = $._encodeSequenceOf<Control>(
      () => _encode_Control,
      $.BER
    );
  }
  return _cached_encoder_for_Controls(value, elGetter);
}


/* eslint-enable */
