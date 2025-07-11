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
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';


/**
 * @summary SignatureType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureType     ::=  String
 * ```
 */
export type SignatureType = String; // DefinedType


let _cached_decoder_for_SignatureType: $.ASN1Decoder<SignatureType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignatureType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureType} The decoded data structure.
 */
export function _decode_SignatureType(el: _Element): SignatureType {
  if (!_cached_decoder_for_SignatureType) {
    _cached_decoder_for_SignatureType = _decode_String;
  }
  return _cached_decoder_for_SignatureType(el);
}


let _cached_encoder_for_SignatureType: $.ASN1Encoder<SignatureType> | null = null;


/**
 * @summary Encodes a(n) SignatureType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureType, encoded as an ASN.1 Element.
 */
export function _encode_SignatureType(
  value: SignatureType,
  elGetter: $.ASN1Encoder<SignatureType>
): _Element {
  if (!_cached_encoder_for_SignatureType) {
    _cached_encoder_for_SignatureType = _encode_String;
  }
  return _cached_encoder_for_SignatureType(value, elGetter);
}


/* eslint-enable */
