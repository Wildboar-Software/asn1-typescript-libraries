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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/BaseManagedObjectId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION LocalDistinguishedName */
/**
 * @summary LocalDistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalDistinguishedName  ::=  BaseManagedObjectId
 * ```
 */
export type LocalDistinguishedName = BaseManagedObjectId; // DefinedType
/* END_OF_SYMBOL_DEFINITION LocalDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalDistinguishedName */
let _cached_decoder_for_LocalDistinguishedName: $.ASN1Decoder<LocalDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _decode_LocalDistinguishedName */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalDistinguishedName} The decoded data structure.
 */
export function _decode_LocalDistinguishedName(el: _Element) {
  if (!_cached_decoder_for_LocalDistinguishedName) {
    _cached_decoder_for_LocalDistinguishedName = _decode_BaseManagedObjectId;
  }
  return _cached_decoder_for_LocalDistinguishedName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalDistinguishedName */
let _cached_encoder_for_LocalDistinguishedName: $.ASN1Encoder<LocalDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _encode_LocalDistinguishedName */
/**
 * @summary Encodes a(n) LocalDistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_LocalDistinguishedName(
  value: LocalDistinguishedName,
  elGetter: $.ASN1Encoder<LocalDistinguishedName>
) {
  if (!_cached_encoder_for_LocalDistinguishedName) {
    _cached_encoder_for_LocalDistinguishedName = _encode_BaseManagedObjectId;
  }
  return _cached_encoder_for_LocalDistinguishedName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalDistinguishedName */

/* eslint-enable */
