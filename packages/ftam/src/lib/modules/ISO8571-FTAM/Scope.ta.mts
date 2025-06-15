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
  Scope_Item,
  _decode_Scope_Item,
  _encode_Scope_Item,
} from '../ISO8571-FTAM/Scope-Item.ta.mjs';

/**
 * @summary Scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope  ::=
 *   [APPLICATION 28] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {root-directory   [0]  Pathname-Attribute OPTIONAL,
 *                 retrieval-scope  [1] IMPLICIT INTEGER {child(0), all(1)}
 *     }
 * ```
 */
export type Scope = Scope_Item[]; // SequenceOfType


let _cached_decoder_for_Scope: $.ASN1Decoder<Scope> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope} The decoded data structure.
 */
export function _decode_Scope(el: _Element) {
  if (!_cached_decoder_for_Scope) {
    _cached_decoder_for_Scope = $._decode_implicit<Scope>(() =>
      $._decodeSequenceOf<Scope_Item>(() => _decode_Scope_Item)
    );
  }
  return _cached_decoder_for_Scope(el);
}


let _cached_encoder_for_Scope: $.ASN1Encoder<Scope> | null = null;


/**
 * @summary Encodes a(n) Scope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope(value: Scope, elGetter: $.ASN1Encoder<Scope>) {
  if (!_cached_encoder_for_Scope) {
    _cached_encoder_for_Scope = $._encode_implicit(
      _TagClass.application,
      28,
      () => $._encodeSequenceOf<Scope_Item>(() => _encode_Scope_Item, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_Scope(value, elGetter);
}


/* eslint-enable */
