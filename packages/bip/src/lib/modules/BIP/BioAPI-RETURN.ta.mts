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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';

/**
 * @summary BioAPI_RETURN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-RETURN  ::=  UnsignedInt
 * ```
 */
export type BioAPI_RETURN = UnsignedInt; // DefinedType


let _cached_decoder_for_BioAPI_RETURN: $.ASN1Decoder<BioAPI_RETURN> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_RETURN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_RETURN} The decoded data structure.
 */
export function _decode_BioAPI_RETURN(el: _Element) {
  if (!_cached_decoder_for_BioAPI_RETURN) {
    _cached_decoder_for_BioAPI_RETURN = _decode_UnsignedInt;
  }
  return _cached_decoder_for_BioAPI_RETURN(el);
}


let _cached_encoder_for_BioAPI_RETURN: $.ASN1Encoder<BioAPI_RETURN> | null = null;


/**
 * @summary Encodes a(n) BioAPI_RETURN into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_RETURN, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_RETURN(
  value: BioAPI_RETURN,
  elGetter: $.ASN1Encoder<BioAPI_RETURN>
) {
  if (!_cached_encoder_for_BioAPI_RETURN) {
    _cached_encoder_for_BioAPI_RETURN = _encode_UnsignedInt;
  }
  return _cached_encoder_for_BioAPI_RETURN(value, elGetter);
}


/* eslint-enable */
