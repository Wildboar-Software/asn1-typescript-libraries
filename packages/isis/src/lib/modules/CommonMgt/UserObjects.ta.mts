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
 * @summary UserObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserObjects  ::=  SET OF BaseManagedObjectId
 * ```
 */
export type UserObjects = BaseManagedObjectId[]; // SetOfType

let _cached_decoder_for_UserObjects: $.ASN1Decoder<UserObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserObjects} The decoded data structure.
 */
export function _decode_UserObjects(el: _Element): UserObjects {
  if (!_cached_decoder_for_UserObjects) {
    _cached_decoder_for_UserObjects = $._decodeSetOf<BaseManagedObjectId>(
      () => _decode_BaseManagedObjectId
    );
  }
  return _cached_decoder_for_UserObjects(el);
}

let _cached_encoder_for_UserObjects: $.ASN1Encoder<UserObjects> | null = null;

/**
 * @summary Encodes a(n) UserObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserObjects, encoded as an ASN.1 Element.
 */
export function _encode_UserObjects(
  value: UserObjects,
  elGetter: $.ASN1Encoder<UserObjects>
): _Element {
  if (!_cached_encoder_for_UserObjects) {
    _cached_encoder_for_UserObjects = $._encodeSetOf<BaseManagedObjectId>(
      () => _encode_BaseManagedObjectId,
      $.BER
    );
  }
  return _cached_encoder_for_UserObjects(value, elGetter);
}


/* eslint-enable */
