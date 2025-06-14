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
/* START_OF_SYMBOL_DEFINITION BIRCreationDate */
/**
 * @summary BIRCreationDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIRCreationDate  ::=  Date-Time
 * ```
 */
export type BIRCreationDate = Date_Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION BIRCreationDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BIRCreationDate */
let _cached_decoder_for_BIRCreationDate: $.ASN1Decoder<BIRCreationDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BIRCreationDate */

/* START_OF_SYMBOL_DEFINITION _decode_BIRCreationDate */
/**
 * @summary Decodes an ASN.1 element into a(n) BIRCreationDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIRCreationDate} The decoded data structure.
 */
export function _decode_BIRCreationDate(el: _Element) {
  if (!_cached_decoder_for_BIRCreationDate) {
    _cached_decoder_for_BIRCreationDate = _decode_Date_Time;
  }
  return _cached_decoder_for_BIRCreationDate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BIRCreationDate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BIRCreationDate */
let _cached_encoder_for_BIRCreationDate: $.ASN1Encoder<BIRCreationDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BIRCreationDate */

/* START_OF_SYMBOL_DEFINITION _encode_BIRCreationDate */
/**
 * @summary Encodes a(n) BIRCreationDate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIRCreationDate, encoded as an ASN.1 Element.
 */
export function _encode_BIRCreationDate(
  value: BIRCreationDate,
  elGetter: $.ASN1Encoder<BIRCreationDate>
) {
  if (!_cached_encoder_for_BIRCreationDate) {
    _cached_encoder_for_BIRCreationDate = _encode_Date_Time;
  }
  return _cached_encoder_for_BIRCreationDate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BIRCreationDate */

/* eslint-enable */
