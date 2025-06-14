/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION AuthPolicy */
/**
 * @summary AuthPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthPolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AuthPolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthPolicy */
let _cached_decoder_for_AuthPolicy: $.ASN1Decoder<AuthPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_AuthPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthPolicy} The decoded data structure.
 */
export function _decode_AuthPolicy(el: _Element) {
  if (!_cached_decoder_for_AuthPolicy) {
    _cached_decoder_for_AuthPolicy = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_AuthPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthPolicy */
let _cached_encoder_for_AuthPolicy: $.ASN1Encoder<AuthPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_AuthPolicy */
/**
 * @summary Encodes a(n) AuthPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthPolicy, encoded as an ASN.1 Element.
 */
export function _encode_AuthPolicy(
  value: AuthPolicy,
  elGetter: $.ASN1Encoder<AuthPolicy>
) {
  if (!_cached_encoder_for_AuthPolicy) {
    _cached_encoder_for_AuthPolicy = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_AuthPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthPolicy */

/* eslint-enable */
