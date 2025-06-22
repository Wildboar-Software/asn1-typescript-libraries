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
  Component,
  _decode_Component,
  _encode_Component,
} from '../TCAPMessages/Component.ta.mjs';
/**
 * @summary ComponentPortion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComponentPortion{OPERATION:Invokable, OPERATION:Returnable}  ::=
 *   [APPLICATION 12]
 *     SEQUENCE SIZE (1..MAX) OF Component{{Invokable}, {Returnable}}
 * ```
 */
export type ComponentPortion = Component[]; // SequenceOfType

let _cached_decoder_for_ComponentPortion: $.ASN1Decoder<ComponentPortion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentPortion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentPortion} The decoded data structure.
 */
export function _decode_ComponentPortion(el: _Element) {
  if (!_cached_decoder_for_ComponentPortion) {
    _cached_decoder_for_ComponentPortion = $._decode_implicit<ComponentPortion>(
      () => $._decodeSequenceOf<Component>(() => _decode_Component)
    );
  }
  return _cached_decoder_for_ComponentPortion(el);
}

let _cached_encoder_for_ComponentPortion: $.ASN1Encoder<ComponentPortion> | null = null;

/**
 * @summary Encodes a(n) ComponentPortion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentPortion, encoded as an ASN.1 Element.
 */
export function _encode_ComponentPortion(
  value: ComponentPortion,
  elGetter: $.ASN1Encoder<ComponentPortion>
) {
  if (!_cached_encoder_for_ComponentPortion) {
    _cached_encoder_for_ComponentPortion = $._encode_implicit(
      _TagClass.application,
      12,
      () => $._encodeSequenceOf<Component>(() => _encode_Component, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_ComponentPortion(value, elGetter);
}


/* eslint-enable */
