/* eslint-disable */
import {
  RELATIVE_OID,
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
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta.mjs';

/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=  CHOICE {roid   RELATIVE-OID,
 *                        qName  QName
 * }
 * ```
 */
export type Identifier =
  | { roid: RELATIVE_OID } /* CHOICE_ALT_ROOT */
  | { qName: QName } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Identifier: $.ASN1Decoder<Identifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identifier} The decoded data structure.
 */
export function _decode_Identifier(el: _Element): Identifier {
  if (!_cached_decoder_for_Identifier) {
    _cached_decoder_for_Identifier = $._decode_inextensible_choice<Identifier>({
      'CONTEXT 0': ['roid', $._decodeRelativeOID],
      'CONTEXT 1': ['qName', _decode_QName],
    });
  }
  return _cached_decoder_for_Identifier(el);
}


let _cached_encoder_for_Identifier: $.ASN1Encoder<Identifier> | null = null;


/**
 * @summary Encodes a(n) Identifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identifier, encoded as an ASN.1 Element.
 */
export function _encode_Identifier(
  value: Identifier,
  elGetter: $.ASN1Encoder<Identifier>
): _Element {
  if (!_cached_encoder_for_Identifier) {
    _cached_encoder_for_Identifier = $._encode_choice<Identifier>(
      {
        roid: $._encodeRelativeOID,
        qName: _encode_QName,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Identifier(value, elGetter);
}


/* eslint-enable */
