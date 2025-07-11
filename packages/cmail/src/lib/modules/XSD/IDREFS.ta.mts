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
import { IDREF, _decode_IDREF, _encode_IDREF } from '../XSD/IDREF.ta.mjs';

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


let _cached_decoder_for_IDREFS: $.ASN1Decoder<IDREFS> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IDREFS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDREFS} The decoded data structure.
 */
export function _decode_IDREFS(el: _Element): IDREFS {
  if (!_cached_decoder_for_IDREFS) {
    _cached_decoder_for_IDREFS = $._decodeSequenceOf<IDREF>(
      () => _decode_IDREF
    );
  }
  return _cached_decoder_for_IDREFS(el);
}


let _cached_encoder_for_IDREFS: $.ASN1Encoder<IDREFS> | null = null;


/**
 * @summary Encodes a(n) IDREFS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDREFS, encoded as an ASN.1 Element.
 */
export function _encode_IDREFS(value: IDREFS, elGetter: $.ASN1Encoder<IDREFS>): _Element {
  if (!_cached_encoder_for_IDREFS) {
    _cached_encoder_for_IDREFS = $._encodeSequenceOf<IDREF>(
      () => _encode_IDREF,
      $.BER
    );
  }
  return _cached_encoder_for_IDREFS(value, elGetter);
}


/* eslint-enable */
