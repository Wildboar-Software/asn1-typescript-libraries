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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION LSPID */
/**
 * @summary LSPID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LSPID  ::=  OCTET STRING(SIZE (2..11))
 * ```
 */
export type LSPID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION LSPID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LSPID */
let _cached_decoder_for_LSPID: $.ASN1Decoder<LSPID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LSPID */

/* START_OF_SYMBOL_DEFINITION _decode_LSPID */
/**
 * @summary Decodes an ASN.1 element into a(n) LSPID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LSPID} The decoded data structure.
 */
export function _decode_LSPID(el: _Element) {
  if (!_cached_decoder_for_LSPID) {
    _cached_decoder_for_LSPID = $._decodeOctetString;
  }
  return _cached_decoder_for_LSPID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LSPID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LSPID */
let _cached_encoder_for_LSPID: $.ASN1Encoder<LSPID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LSPID */

/* START_OF_SYMBOL_DEFINITION _encode_LSPID */
/**
 * @summary Encodes a(n) LSPID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LSPID, encoded as an ASN.1 Element.
 */
export function _encode_LSPID(value: LSPID, elGetter: $.ASN1Encoder<LSPID>) {
  if (!_cached_encoder_for_LSPID) {
    _cached_encoder_for_LSPID = $._encodeOctetString;
  }
  return _cached_encoder_for_LSPID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LSPID */

/* eslint-enable */
