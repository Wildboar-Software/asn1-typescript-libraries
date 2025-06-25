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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';

/**
 * @summary OOBCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OOBCert  ::=  CMPCertificate
 * ```
 */
export type OOBCert = CMPCertificate; // DefinedType


let _cached_decoder_for_OOBCert: $.ASN1Decoder<OOBCert> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OOBCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OOBCert} The decoded data structure.
 */
export function _decode_OOBCert(el: _Element): OOBCert {
  if (!_cached_decoder_for_OOBCert) {
    _cached_decoder_for_OOBCert = _decode_CMPCertificate;
  }
  return _cached_decoder_for_OOBCert(el);
}


let _cached_encoder_for_OOBCert: $.ASN1Encoder<OOBCert> | null = null;


/**
 * @summary Encodes a(n) OOBCert into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OOBCert, encoded as an ASN.1 Element.
 */
export function _encode_OOBCert(
  value: OOBCert,
  elGetter: $.ASN1Encoder<OOBCert>
): _Element {
  if (!_cached_encoder_for_OOBCert) {
    _cached_encoder_for_OOBCert = _encode_CMPCertificate;
  }
  return _cached_encoder_for_OOBCert(value, elGetter);
}


/* eslint-enable */
