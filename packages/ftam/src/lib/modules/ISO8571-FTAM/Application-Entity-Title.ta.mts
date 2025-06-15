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
  AE_title,
  _decode_AE_title,
  _encode_AE_title,
} from '../ISO8571-FTAM/AE-title.ta.mjs';

/**
 * @summary Application_Entity_Title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Application-Entity-Title  ::=  [APPLICATION 7]  AE-title
 * ```
 */
export type Application_Entity_Title = AE_title; // DefinedType


let _cached_decoder_for_Application_Entity_Title: $.ASN1Decoder<Application_Entity_Title> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Application_Entity_Title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_Entity_Title} The decoded data structure.
 */
export function _decode_Application_Entity_Title(el: _Element) {
  if (!_cached_decoder_for_Application_Entity_Title) {
    _cached_decoder_for_Application_Entity_Title = $._decode_implicit<Application_Entity_Title>(
      () => _decode_AE_title
    );
  }
  return _cached_decoder_for_Application_Entity_Title(el);
}


let _cached_encoder_for_Application_Entity_Title: $.ASN1Encoder<Application_Entity_Title> | null = null;


/**
 * @summary Encodes a(n) Application_Entity_Title into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_Entity_Title, encoded as an ASN.1 Element.
 */
export function _encode_Application_Entity_Title(
  value: Application_Entity_Title,
  elGetter: $.ASN1Encoder<Application_Entity_Title>
) {
  if (!_cached_encoder_for_Application_Entity_Title) {
    _cached_encoder_for_Application_Entity_Title = $._encode_implicit(
      _TagClass.application,
      7,
      () => _encode_AE_title,
      $.BER
    );
  }
  return _cached_encoder_for_Application_Entity_Title(value, elGetter);
}


/* eslint-enable */
