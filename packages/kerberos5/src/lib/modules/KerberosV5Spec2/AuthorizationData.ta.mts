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
import * as $ from '@wildboar/asn1/functional';
import {
  AuthorizationData_Item,
  _decode_AuthorizationData_Item,
  _encode_AuthorizationData_Item,
} from '../KerberosV5Spec2/AuthorizationData-Item.ta.mjs';

/**
 * @summary AuthorizationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationData        ::=  SEQUENCE OF SEQUENCE {
 *         ad-type         [0] Int32,
 *         ad-data         [1] OCTET STRING
 * }
 * ```
 */
export type AuthorizationData = AuthorizationData_Item[]; // SequenceOfType


let _cached_decoder_for_AuthorizationData: $.ASN1Decoder<AuthorizationData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData} The decoded data structure.
 */
export function _decode_AuthorizationData(el: _Element) {
  if (!_cached_decoder_for_AuthorizationData) {
    _cached_decoder_for_AuthorizationData = $._decodeSequenceOf<AuthorizationData_Item>(
      () => _decode_AuthorizationData_Item
    );
  }
  return _cached_decoder_for_AuthorizationData(el);
}


let _cached_encoder_for_AuthorizationData: $.ASN1Encoder<AuthorizationData> | null = null;


/**
 * @summary Encodes a(n) AuthorizationData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData(
  value: AuthorizationData,
  elGetter: $.ASN1Encoder<AuthorizationData>
) {
  if (!_cached_encoder_for_AuthorizationData) {
    _cached_encoder_for_AuthorizationData = $._encodeSequenceOf<AuthorizationData_Item>(
      () => _encode_AuthorizationData_Item,
      $.DER
    );
  }
  return _cached_encoder_for_AuthorizationData(value, elGetter);
}


/* eslint-enable */
