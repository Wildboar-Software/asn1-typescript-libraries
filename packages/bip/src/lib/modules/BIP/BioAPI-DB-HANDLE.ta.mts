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
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';

/**
 * @summary BioAPI_DB_HANDLE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-HANDLE  ::=  SignedInt
 * ```
 */
export type BioAPI_DB_HANDLE = SignedInt; // DefinedType


let _cached_decoder_for_BioAPI_DB_HANDLE: $.ASN1Decoder<BioAPI_DB_HANDLE> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DB_HANDLE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DB_HANDLE} The decoded data structure.
 */
export function _decode_BioAPI_DB_HANDLE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DB_HANDLE) {
    _cached_decoder_for_BioAPI_DB_HANDLE = _decode_SignedInt;
  }
  return _cached_decoder_for_BioAPI_DB_HANDLE(el);
}


let _cached_encoder_for_BioAPI_DB_HANDLE: $.ASN1Encoder<BioAPI_DB_HANDLE> | null = null;


/**
 * @summary Encodes a(n) BioAPI_DB_HANDLE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DB_HANDLE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DB_HANDLE(
  value: BioAPI_DB_HANDLE,
  elGetter: $.ASN1Encoder<BioAPI_DB_HANDLE>
) {
  if (!_cached_encoder_for_BioAPI_DB_HANDLE) {
    _cached_encoder_for_BioAPI_DB_HANDLE = _encode_SignedInt;
  }
  return _cached_encoder_for_BioAPI_DB_HANDLE(value, elGetter);
}


/* eslint-enable */
