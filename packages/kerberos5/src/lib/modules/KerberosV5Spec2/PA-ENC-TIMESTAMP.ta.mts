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
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/**
 * @summary PA_ENC_TIMESTAMP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PA-ENC-TIMESTAMP         ::=  EncryptedData
 * ```
 */
export type PA_ENC_TIMESTAMP = EncryptedData; // DefinedType


let _cached_decoder_for_PA_ENC_TIMESTAMP: $.ASN1Decoder<PA_ENC_TIMESTAMP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PA_ENC_TIMESTAMP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PA_ENC_TIMESTAMP} The decoded data structure.
 */
export function _decode_PA_ENC_TIMESTAMP(el: _Element) {
  if (!_cached_decoder_for_PA_ENC_TIMESTAMP) {
    _cached_decoder_for_PA_ENC_TIMESTAMP = _decode_EncryptedData;
  }
  return _cached_decoder_for_PA_ENC_TIMESTAMP(el);
}


let _cached_encoder_for_PA_ENC_TIMESTAMP: $.ASN1Encoder<PA_ENC_TIMESTAMP> | null = null;


/**
 * @summary Encodes a(n) PA_ENC_TIMESTAMP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_ENC_TIMESTAMP, encoded as an ASN.1 Element.
 */
export function _encode_PA_ENC_TIMESTAMP(
  value: PA_ENC_TIMESTAMP,
  elGetter: $.ASN1Encoder<PA_ENC_TIMESTAMP>
) {
  if (!_cached_encoder_for_PA_ENC_TIMESTAMP) {
    _cached_encoder_for_PA_ENC_TIMESTAMP = _encode_EncryptedData;
  }
  return _cached_encoder_for_PA_ENC_TIMESTAMP(value, elGetter);
}


/* eslint-enable */
