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
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary HashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithm  ::=  AlgorithmIdentifier{DIGEST-ALGORITHM,
 *                     {mda-sha1, ...}}
 * ```
 */
export type HashAlgorithm = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashAlgorithm} The decoded data structure.
 */
export function _decode_HashAlgorithm(el: _Element): HashAlgorithm {
  if (!_cached_decoder_for_HashAlgorithm) {
    _cached_decoder_for_HashAlgorithm = _decode_AlgorithmIdentifier;
  }
  return _cached_decoder_for_HashAlgorithm(el);
}

let _cached_encoder_for_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> | null = null;

/**
 * @summary Encodes a(n) HashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_HashAlgorithm(
  value: HashAlgorithm,
  elGetter: $.ASN1Encoder<HashAlgorithm>
): _Element {
  if (!_cached_encoder_for_HashAlgorithm) {
    _cached_encoder_for_HashAlgorithm = _encode_AlgorithmIdentifier;
  }
  return _cached_encoder_for_HashAlgorithm(value, elGetter);
}


/* eslint-enable */
