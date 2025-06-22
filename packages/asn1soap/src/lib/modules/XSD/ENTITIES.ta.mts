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
import { ENTITY, _decode_ENTITY, _encode_ENTITY } from '../XSD/ENTITY.ta.mjs';

/**
 * @summary ENTITIES
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENTITIES  ::=  SEQUENCE (SIZE(1..MAX)) OF ENTITY
 * ```
 */
export type ENTITIES = ENTITY[]; // SequenceOfType


let _cached_decoder_for_ENTITIES: $.ASN1Decoder<ENTITIES> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ENTITIES
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ENTITIES} The decoded data structure.
 */
export function _decode_ENTITIES(el: _Element) {
  if (!_cached_decoder_for_ENTITIES) {
    _cached_decoder_for_ENTITIES = $._decodeSequenceOf<ENTITY>(
      () => _decode_ENTITY
    );
  }
  return _cached_decoder_for_ENTITIES(el);
}


let _cached_encoder_for_ENTITIES: $.ASN1Encoder<ENTITIES> | null = null;


/**
 * @summary Encodes a(n) ENTITIES into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENTITIES, encoded as an ASN.1 Element.
 */
export function _encode_ENTITIES(
  value: ENTITIES,
  elGetter: $.ASN1Encoder<ENTITIES>
) {
  if (!_cached_encoder_for_ENTITIES) {
    _cached_encoder_for_ENTITIES = $._encodeSequenceOf<ENTITY>(
      () => _encode_ENTITY,
      $.BER
    );
  }
  return _cached_encoder_for_ENTITIES(value, elGetter);
}


/* eslint-enable */
