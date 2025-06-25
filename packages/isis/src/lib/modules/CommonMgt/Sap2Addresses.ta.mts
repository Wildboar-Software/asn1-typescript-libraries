/* eslint-disable */
import {
  OCTET_STRING,
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

/**
 * @summary Sap2Addresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap2Addresses  ::=  SET OF OCTET STRING
 * ```
 */
export type Sap2Addresses = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_Sap2Addresses: $.ASN1Decoder<Sap2Addresses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Sap2Addresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sap2Addresses} The decoded data structure.
 */
export function _decode_Sap2Addresses(el: _Element): Sap2Addresses {
  if (!_cached_decoder_for_Sap2Addresses) {
    _cached_decoder_for_Sap2Addresses = $._decodeSetOf<OCTET_STRING>(
      () => $._decodeOctetString
    );
  }
  return _cached_decoder_for_Sap2Addresses(el);
}

let _cached_encoder_for_Sap2Addresses: $.ASN1Encoder<Sap2Addresses> | null = null;

/**
 * @summary Encodes a(n) Sap2Addresses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap2Addresses, encoded as an ASN.1 Element.
 */
export function _encode_Sap2Addresses(
  value: Sap2Addresses,
  elGetter: $.ASN1Encoder<Sap2Addresses>
): _Element {
  if (!_cached_encoder_for_Sap2Addresses) {
    _cached_encoder_for_Sap2Addresses = $._encodeSetOf<OCTET_STRING>(
      () => $._encodeOctetString,
      $.BER
    );
  }
  return _cached_encoder_for_Sap2Addresses(value, elGetter);
}


/* eslint-enable */
