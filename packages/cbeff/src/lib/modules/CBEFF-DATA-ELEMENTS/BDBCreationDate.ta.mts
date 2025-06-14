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
  Date_Time,
  _decode_Date_Time,
  _encode_Date_Time,
} from '../CBEFF-DATA-ELEMENTS/Date-Time.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BDBCreationDate */
/**
 * @summary BDBCreationDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBCreationDate  ::=
 *   Date-Time
 * ```
 */
export type BDBCreationDate = Date_Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION BDBCreationDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBCreationDate */
let _cached_decoder_for_BDBCreationDate: $.ASN1Decoder<BDBCreationDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BDBCreationDate */

/* START_OF_SYMBOL_DEFINITION _decode_BDBCreationDate */
/**
 * @summary Decodes an ASN.1 element into a(n) BDBCreationDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDBCreationDate} The decoded data structure.
 */
export function _decode_BDBCreationDate(el: _Element) {
  if (!_cached_decoder_for_BDBCreationDate) {
    _cached_decoder_for_BDBCreationDate = _decode_Date_Time;
  }
  return _cached_decoder_for_BDBCreationDate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BDBCreationDate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBCreationDate */
let _cached_encoder_for_BDBCreationDate: $.ASN1Encoder<BDBCreationDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BDBCreationDate */

/* START_OF_SYMBOL_DEFINITION _encode_BDBCreationDate */
/**
 * @summary Encodes a(n) BDBCreationDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBCreationDate, encoded as an ASN.1 Element.
 */
export function _encode_BDBCreationDate(
  value: BDBCreationDate,
  elGetter: $.ASN1Encoder<BDBCreationDate>
) {
  if (!_cached_encoder_for_BDBCreationDate) {
    _cached_encoder_for_BDBCreationDate = _encode_Date_Time;
  }
  return _cached_encoder_for_BDBCreationDate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BDBCreationDate */

/* eslint-enable */
