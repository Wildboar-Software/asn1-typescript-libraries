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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';

/**
 * @summary BioAPI_UNIT_ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UNIT-ID  ::=  UnsignedInt
 * ```
 */
export type BioAPI_UNIT_ID = UnsignedInt; // DefinedType


let _cached_decoder_for_BioAPI_UNIT_ID: $.ASN1Decoder<BioAPI_UNIT_ID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_UNIT_ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_UNIT_ID} The decoded data structure.
 */
export function _decode_BioAPI_UNIT_ID(el: _Element): BioAPI_UNIT_ID {
  if (!_cached_decoder_for_BioAPI_UNIT_ID) {
    _cached_decoder_for_BioAPI_UNIT_ID = _decode_UnsignedInt;
  }
  return _cached_decoder_for_BioAPI_UNIT_ID(el);
}


let _cached_encoder_for_BioAPI_UNIT_ID: $.ASN1Encoder<BioAPI_UNIT_ID> | null = null;


/**
 * @summary Encodes a(n) BioAPI_UNIT_ID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_UNIT_ID, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_UNIT_ID(
  value: BioAPI_UNIT_ID,
  elGetter: $.ASN1Encoder<BioAPI_UNIT_ID>
): _Element {
  if (!_cached_encoder_for_BioAPI_UNIT_ID) {
    _cached_encoder_for_BioAPI_UNIT_ID = _encode_UnsignedInt;
  }
  return _cached_encoder_for_BioAPI_UNIT_ID(value, elGetter);
}


/* eslint-enable */
