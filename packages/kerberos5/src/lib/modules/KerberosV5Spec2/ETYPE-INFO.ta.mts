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
  ETYPE_INFO_ENTRY,
  _decode_ETYPE_INFO_ENTRY,
  _encode_ETYPE_INFO_ENTRY,
} from '../KerberosV5Spec2/ETYPE-INFO-ENTRY.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ETYPE_INFO */
/**
 * @summary ETYPE_INFO
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ETYPE-INFO               ::=  SEQUENCE OF ETYPE-INFO-ENTRY
 * ```
 */
export type ETYPE_INFO = ETYPE_INFO_ENTRY[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ETYPE_INFO */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ETYPE_INFO */
let _cached_decoder_for_ETYPE_INFO: $.ASN1Decoder<ETYPE_INFO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ETYPE_INFO */

/* START_OF_SYMBOL_DEFINITION _decode_ETYPE_INFO */
/**
 * @summary Decodes an ASN.1 element into a(n) ETYPE_INFO
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ETYPE_INFO} The decoded data structure.
 */
export function _decode_ETYPE_INFO(el: _Element) {
  if (!_cached_decoder_for_ETYPE_INFO) {
    _cached_decoder_for_ETYPE_INFO = $._decodeSequenceOf<ETYPE_INFO_ENTRY>(
      () => _decode_ETYPE_INFO_ENTRY
    );
  }
  return _cached_decoder_for_ETYPE_INFO(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ETYPE_INFO */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ETYPE_INFO */
let _cached_encoder_for_ETYPE_INFO: $.ASN1Encoder<ETYPE_INFO> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ETYPE_INFO */

/* START_OF_SYMBOL_DEFINITION _encode_ETYPE_INFO */
/**
 * @summary Encodes a(n) ETYPE_INFO into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETYPE_INFO, encoded as an ASN.1 Element.
 */
export function _encode_ETYPE_INFO(
  value: ETYPE_INFO,
  elGetter: $.ASN1Encoder<ETYPE_INFO>
) {
  if (!_cached_encoder_for_ETYPE_INFO) {
    _cached_encoder_for_ETYPE_INFO = $._encodeSequenceOf<ETYPE_INFO_ENTRY>(
      () => _encode_ETYPE_INFO_ENTRY,
      $.BER
    );
  }
  return _cached_encoder_for_ETYPE_INFO(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ETYPE_INFO */

/* eslint-enable */
