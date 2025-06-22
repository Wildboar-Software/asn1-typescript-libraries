/* eslint-disable */
import {
  INTEGER,
  NULL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  CHOICE {present  INTEGER,
 *                      absent   NULL
 * }
 * ```
 */
export type InvokeId =
  | { present: INTEGER } /* CHOICE_ALT_ROOT */
  | { absent: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element) {
  if (!_cached_decoder_for_InvokeId) {
    _cached_decoder_for_InvokeId = $._decode_inextensible_choice<InvokeId>({
      'UNIVERSAL 2': ['present', $._decodeInteger],
      'UNIVERSAL 5': ['absent', $._decodeNull],
    });
  }
  return _cached_decoder_for_InvokeId(el);
}


let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;


/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
  value: InvokeId,
  elGetter: $.ASN1Encoder<InvokeId>
) {
  if (!_cached_encoder_for_InvokeId) {
    _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>(
      {
        present: $._encodeInteger,
        absent: $._encodeNull,
      },
      $.BER
    );
  }
  return _cached_encoder_for_InvokeId(value, elGetter);
}


/* eslint-enable */
