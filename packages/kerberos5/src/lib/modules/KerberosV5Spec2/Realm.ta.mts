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
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta.mjs';

/**
 * @summary Realm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Realm            ::=  KerberosString
 * ```
 */
export type Realm = KerberosString; // DefinedType


let _cached_decoder_for_Realm: $.ASN1Decoder<Realm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Realm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Realm} The decoded data structure.
 */
export function _decode_Realm(el: _Element) {
  if (!_cached_decoder_for_Realm) {
    _cached_decoder_for_Realm = _decode_KerberosString;
  }
  return _cached_decoder_for_Realm(el);
}


let _cached_encoder_for_Realm: $.ASN1Encoder<Realm> | null = null;


/**
 * @summary Encodes a(n) Realm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Realm, encoded as an ASN.1 Element.
 */
export function _encode_Realm(value: Realm, elGetter: $.ASN1Encoder<Realm>) {
  if (!_cached_encoder_for_Realm) {
    _cached_encoder_for_Realm = _encode_KerberosString;
  }
  return _cached_encoder_for_Realm(value, elGetter);
}


/* eslint-enable */
