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
import { IDREF, _decode_IDREF, _encode_IDREF } from '../XSD/IDREF.ta.mjs';
/* START_OF_SYMBOL_DEFINITION IDREFS */
/**
 * @summary IDREFS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDREFS  ::=  SEQUENCE (SIZE(1..MAX)) OF IDREF
 * ```
 */
export type IDREFS = IDREF[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION IDREFS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IDREFS */
let _cached_decoder_for_IDREFS: $.ASN1Decoder<IDREFS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IDREFS */

/* START_OF_SYMBOL_DEFINITION _decode_IDREFS */
/**
 * @summary Decodes an ASN.1 element into a(n) IDREFS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDREFS} The decoded data structure.
 */
export function _decode_IDREFS(el: _Element) {
  if (!_cached_decoder_for_IDREFS) {
    _cached_decoder_for_IDREFS = $._decodeSequenceOf<IDREF>(
      () => _decode_IDREF
    );
  }
  return _cached_decoder_for_IDREFS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IDREFS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IDREFS */
let _cached_encoder_for_IDREFS: $.ASN1Encoder<IDREFS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IDREFS */

/* START_OF_SYMBOL_DEFINITION _encode_IDREFS */
/**
 * @summary Encodes a(n) IDREFS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDREFS, encoded as an ASN.1 Element.
 */
export function _encode_IDREFS(value: IDREFS, elGetter: $.ASN1Encoder<IDREFS>) {
  if (!_cached_encoder_for_IDREFS) {
    _cached_encoder_for_IDREFS = $._encodeSequenceOf<IDREF>(
      () => _encode_IDREF,
      $.BER
    );
  }
  return _cached_encoder_for_IDREFS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IDREFS */

/* eslint-enable */
