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
  Attribute_Extensions_Pattern_Item,
  _decode_Attribute_Extensions_Pattern_Item,
  _encode_Attribute_Extensions_Pattern_Item,
} from '../ISO8571-FTAM/Attribute-Extensions-Pattern-Item.ta.mjs';

/**
 * @summary Attribute_Extensions_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extensions-Pattern  ::=
 *   SEQUENCE OF
 *     SEQUENCE {extension-set-identifier
 *                 [0] IMPLICIT Extension-Set-Identifier,
 *               extension-set-attribute-Patterns
 *                 [1] IMPLICIT SEQUENCE OF
 *                                SEQUENCE {extension-attribute-identifier
 *                                            TYPE-IDENTIFIER.&id
 *                                              ({Extension-attribute-Patterns}),
 *                                          extension-attribute-Pattern
 *                                            TYPE-IDENTIFIER.&Type
 *                                              ({Extension-attribute-Patterns}
 *                                                 {@.extension-attribute-identifier})
 *                                }}
 * ```
 */
export type Attribute_Extensions_Pattern = Attribute_Extensions_Pattern_Item[]; // SequenceOfType


let _cached_decoder_for_Attribute_Extensions_Pattern: $.ASN1Decoder<Attribute_Extensions_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extensions_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extensions_Pattern} The decoded data structure.
 */
export function _decode_Attribute_Extensions_Pattern(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extensions_Pattern) {
    _cached_decoder_for_Attribute_Extensions_Pattern = $._decodeSequenceOf<Attribute_Extensions_Pattern_Item>(
      () => _decode_Attribute_Extensions_Pattern_Item
    );
  }
  return _cached_decoder_for_Attribute_Extensions_Pattern(el);
}


let _cached_encoder_for_Attribute_Extensions_Pattern: $.ASN1Encoder<Attribute_Extensions_Pattern> | null = null;


/**
 * @summary Encodes a(n) Attribute_Extensions_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extensions_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extensions_Pattern(
  value: Attribute_Extensions_Pattern,
  elGetter: $.ASN1Encoder<Attribute_Extensions_Pattern>
) {
  if (!_cached_encoder_for_Attribute_Extensions_Pattern) {
    _cached_encoder_for_Attribute_Extensions_Pattern = $._encodeSequenceOf<Attribute_Extensions_Pattern_Item>(
      () => _encode_Attribute_Extensions_Pattern_Item,
      $.BER
    );
  }
  return _cached_encoder_for_Attribute_Extensions_Pattern(value, elGetter);
}


/* eslint-enable */
