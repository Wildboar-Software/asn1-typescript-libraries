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
  Data_Field_Item,
  _decode_Data_Field_Item,
  _encode_Data_Field_Item,
} from '../T38/Data-Field-Item.ta.mjs';

/**
 * @summary Data_Field
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data-Field  ::=
 *   SEQUENCE OF
 *     SEQUENCE {field-type
 *                 ENUMERATED {hdlc-data, hdlc-sig-end, hdlc-fcs-OK, hdlc-fcs-BAD,
 *                             hdlc-fcs-OK-sig-end, hdlc-fcs-BAD-sig-end,
 *                             t4-non-ecm-data, t4-non-ecm-sig-end, ...,
 *                             cm-message, jm-message, ci-message, v34rate},
 *               field-data  OCTET STRING(SIZE (1..65535)) OPTIONAL}
 * ```
 */
export type Data_Field = Data_Field_Item[]; // SequenceOfType


let _cached_decoder_for_Data_Field: $.ASN1Decoder<Data_Field> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Data_Field
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Data_Field} The decoded data structure.
 */
export function _decode_Data_Field(el: _Element): Data_Field {
  if (!_cached_decoder_for_Data_Field) {
    _cached_decoder_for_Data_Field = $._decodeSequenceOf<Data_Field_Item>(
      () => _decode_Data_Field_Item
    );
  }
  return _cached_decoder_for_Data_Field(el);
}


let _cached_encoder_for_Data_Field: $.ASN1Encoder<Data_Field> | null = null;


/**
 * @summary Encodes a(n) Data_Field into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data_Field, encoded as an ASN.1 Element.
 */
export function _encode_Data_Field(
  value: Data_Field,
  elGetter: $.ASN1Encoder<Data_Field>
): _Element {
  if (!_cached_encoder_for_Data_Field) {
    _cached_encoder_for_Data_Field = $._encodeSequenceOf<Data_Field_Item>(
      () => _encode_Data_Field_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Data_Field(value, elGetter);
}


/* eslint-enable */
