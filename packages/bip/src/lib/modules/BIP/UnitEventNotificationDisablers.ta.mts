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
 * Conceptual table present in all endpoints. Defined to aid
 * specification of framework behaviour; abstract values do not
 * occur in any BIP message and are never encoded. Added,
 * updated, or deleted by `BioAPI_EnableEventNotifications` or
 * an `enableEventNotifications` request; also deleted when the
 * corresponding `MasterEndpoints` row is deleted. ITU-T Rec.
 * X.1083 (11/2007)
 * [§18.7](https://www.itu.int/rec/T-REC-X.1083-200711-I).
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
