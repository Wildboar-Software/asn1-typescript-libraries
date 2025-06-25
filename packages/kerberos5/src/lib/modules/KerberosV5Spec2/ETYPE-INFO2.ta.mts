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
  ETYPE_INFO2_ENTRY,
  _decode_ETYPE_INFO2_ENTRY,
  _encode_ETYPE_INFO2_ENTRY,
} from '../KerberosV5Spec2/ETYPE-INFO2-ENTRY.ta.mjs';

/**
 * @summary ETYPE_INFO2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ETYPE-INFO2              ::=  SEQUENCE SIZE (1..MAX) OF ETYPE-INFO2-ENTRY
 * ```
 */
export type ETYPE_INFO2 = ETYPE_INFO2_ENTRY[]; // SequenceOfType


let _cached_decoder_for_ETYPE_INFO2: $.ASN1Decoder<ETYPE_INFO2> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ETYPE_INFO2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ETYPE_INFO2} The decoded data structure.
 */
export function _decode_ETYPE_INFO2(el: _Element): ETYPE_INFO2 {
  if (!_cached_decoder_for_ETYPE_INFO2) {
    _cached_decoder_for_ETYPE_INFO2 = $._decodeSequenceOf<ETYPE_INFO2_ENTRY>(
      () => _decode_ETYPE_INFO2_ENTRY
    );
  }
  return _cached_decoder_for_ETYPE_INFO2(el);
}


let _cached_encoder_for_ETYPE_INFO2: $.ASN1Encoder<ETYPE_INFO2> | null = null;


/**
 * @summary Encodes a(n) ETYPE_INFO2 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETYPE_INFO2, encoded as an ASN.1 Element.
 */
export function _encode_ETYPE_INFO2(
  value: ETYPE_INFO2,
  elGetter: $.ASN1Encoder<ETYPE_INFO2>
): _Element {
  if (!_cached_encoder_for_ETYPE_INFO2) {
    _cached_encoder_for_ETYPE_INFO2 = $._encodeSequenceOf<ETYPE_INFO2_ENTRY>(
      () => _encode_ETYPE_INFO2_ENTRY,
      $.DER
    );
  }
  return _cached_encoder_for_ETYPE_INFO2(value, elGetter);
}


/* eslint-enable */
