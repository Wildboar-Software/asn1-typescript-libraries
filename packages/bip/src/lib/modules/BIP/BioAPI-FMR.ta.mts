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
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';

/**
 * @summary BioAPI_FMR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-FMR  ::=  SignedInt
 * ```
 */
export type BioAPI_FMR = SignedInt; // DefinedType


let _cached_decoder_for_BioAPI_FMR: $.ASN1Decoder<BioAPI_FMR> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_FMR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_FMR} The decoded data structure.
 */
export function _decode_BioAPI_FMR(el: _Element) {
  if (!_cached_decoder_for_BioAPI_FMR) {
    _cached_decoder_for_BioAPI_FMR = _decode_SignedInt;
  }
  return _cached_decoder_for_BioAPI_FMR(el);
}


let _cached_encoder_for_BioAPI_FMR: $.ASN1Encoder<BioAPI_FMR> | null = null;


/**
 * @summary Encodes a(n) BioAPI_FMR into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_FMR, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_FMR(
  value: BioAPI_FMR,
  elGetter: $.ASN1Encoder<BioAPI_FMR>
) {
  if (!_cached_encoder_for_BioAPI_FMR) {
    _cached_encoder_for_BioAPI_FMR = _encode_SignedInt;
  }
  return _cached_encoder_for_BioAPI_FMR(value, elGetter);
}


/* eslint-enable */
