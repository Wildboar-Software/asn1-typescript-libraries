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
  UnitEventNotificationDisabler,
  _decode_UnitEventNotificationDisabler,
  _encode_UnitEventNotificationDisabler,
} from '../BIP/UnitEventNotificationDisabler.ta.mjs';

/**
 * @summary UnitEventNotificationDisablers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitEventNotificationDisablers  ::=
 *   SET OF disabler UnitEventNotificationDisabler
 * ```
 */
export type UnitEventNotificationDisablers = UnitEventNotificationDisabler[]; // SetOfType


let _cached_decoder_for_UnitEventNotificationDisablers: $.ASN1Decoder<UnitEventNotificationDisablers> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnitEventNotificationDisablers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitEventNotificationDisablers} The decoded data structure.
 */
export function _decode_UnitEventNotificationDisablers(el: _Element): UnitEventNotificationDisablers {
  if (!_cached_decoder_for_UnitEventNotificationDisablers) {
    _cached_decoder_for_UnitEventNotificationDisablers = $._decodeSetOf<UnitEventNotificationDisabler>(
      () => _decode_UnitEventNotificationDisabler
    );
  }
  return _cached_decoder_for_UnitEventNotificationDisablers(el);
}


let _cached_encoder_for_UnitEventNotificationDisablers: $.ASN1Encoder<UnitEventNotificationDisablers> | null = null;


/**
 * @summary Encodes a(n) UnitEventNotificationDisablers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitEventNotificationDisablers, encoded as an ASN.1 Element.
 */
export function _encode_UnitEventNotificationDisablers(
  value: UnitEventNotificationDisablers,
  elGetter: $.ASN1Encoder<UnitEventNotificationDisablers>
): _Element {
  if (!_cached_encoder_for_UnitEventNotificationDisablers) {
    _cached_encoder_for_UnitEventNotificationDisablers = $._encodeSetOf<UnitEventNotificationDisabler>(
      () => _encode_UnitEventNotificationDisabler,
      $.BER
    );
  }
  return _cached_encoder_for_UnitEventNotificationDisablers(value, elGetter);
}


/* eslint-enable */
