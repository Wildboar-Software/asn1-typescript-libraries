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
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/BaseManagedObjectId.ta.mjs';

/**
 * @summary ProviderObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProviderObjects  ::=  SET OF BaseManagedObjectId
 * ```
 */
export type ProviderObjects = BaseManagedObjectId[]; // SetOfType

let _cached_decoder_for_ProviderObjects: $.ASN1Decoder<ProviderObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProviderObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProviderObjects} The decoded data structure.
 */
export function _decode_ProviderObjects(el: _Element): ProviderObjects {
  if (!_cached_decoder_for_ProviderObjects) {
    _cached_decoder_for_ProviderObjects = $._decodeSetOf<BaseManagedObjectId>(
      () => _decode_BaseManagedObjectId
    );
  }
  return _cached_decoder_for_ProviderObjects(el);
}

let _cached_encoder_for_ProviderObjects: $.ASN1Encoder<ProviderObjects> | null = null;

/**
 * @summary Encodes a(n) ProviderObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProviderObjects, encoded as an ASN.1 Element.
 */
export function _encode_ProviderObjects(
  value: ProviderObjects,
  elGetter: $.ASN1Encoder<ProviderObjects>
): _Element {
  if (!_cached_encoder_for_ProviderObjects) {
    _cached_encoder_for_ProviderObjects = $._encodeSetOf<BaseManagedObjectId>(
      () => _encode_BaseManagedObjectId,
      $.BER
    );
  }
  return _cached_encoder_for_ProviderObjects(value, elGetter);
}


/* eslint-enable */
