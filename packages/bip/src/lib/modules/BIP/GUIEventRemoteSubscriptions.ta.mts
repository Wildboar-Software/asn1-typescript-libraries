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
  GUIEventRemoteSubscription,
  _decode_GUIEventRemoteSubscription,
  _encode_GUIEventRemoteSubscription,
} from '../BIP/GUIEventRemoteSubscription.ta.mjs';

/**
 * @summary GUIEventRemoteSubscriptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventRemoteSubscriptions  ::=  SET OF subscription GUIEventRemoteSubscription
 * ```
 */
export type GUIEventRemoteSubscriptions = GUIEventRemoteSubscription[]; // SetOfType


let _cached_decoder_for_GUIEventRemoteSubscriptions: $.ASN1Decoder<GUIEventRemoteSubscriptions> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventRemoteSubscriptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventRemoteSubscriptions} The decoded data structure.
 */
export function _decode_GUIEventRemoteSubscriptions(el: _Element) {
  if (!_cached_decoder_for_GUIEventRemoteSubscriptions) {
    _cached_decoder_for_GUIEventRemoteSubscriptions = $._decodeSetOf<GUIEventRemoteSubscription>(
      () => _decode_GUIEventRemoteSubscription
    );
  }
  return _cached_decoder_for_GUIEventRemoteSubscriptions(el);
}


let _cached_encoder_for_GUIEventRemoteSubscriptions: $.ASN1Encoder<GUIEventRemoteSubscriptions> | null = null;


/**
 * @summary Encodes a(n) GUIEventRemoteSubscriptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventRemoteSubscriptions, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventRemoteSubscriptions(
  value: GUIEventRemoteSubscriptions,
  elGetter: $.ASN1Encoder<GUIEventRemoteSubscriptions>
) {
  if (!_cached_encoder_for_GUIEventRemoteSubscriptions) {
    _cached_encoder_for_GUIEventRemoteSubscriptions = $._encodeSetOf<GUIEventRemoteSubscription>(
      () => _encode_GUIEventRemoteSubscription,
      $.BER
    );
  }
  return _cached_encoder_for_GUIEventRemoteSubscriptions(value, elGetter);
}


/* eslint-enable */
