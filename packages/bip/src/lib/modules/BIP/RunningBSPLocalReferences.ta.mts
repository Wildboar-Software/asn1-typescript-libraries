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
  RunningBSPLocalReference,
  _decode_RunningBSPLocalReference,
  _encode_RunningBSPLocalReference,
} from '../BIP/RunningBSPLocalReference.ta.mjs';

/**
 * @summary RunningBSPLocalReferences
 * @description
 *
 * Conceptual table present in all BIP endpoints. Defined to aid
 * specification of framework behaviour; abstract values do not
 * occur in any BIP message and are never encoded. Added on
 * `BioAPI_BSPLoad`; deleted on `BioAPI_BSPUnload` or deletion
 * of the matching `VisibleBSPRegistrations` row. ITU-T Rec.
 * X.1083 (11/2007)
 * [§18.5](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPLocalReferences  ::=  SET OF reference RunningBSPLocalReference
 * ```
 */
export type RunningBSPLocalReferences = RunningBSPLocalReference[]; // SetOfType


let _cached_decoder_for_RunningBSPLocalReferences: $.ASN1Decoder<RunningBSPLocalReferences> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPLocalReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPLocalReferences} The decoded data structure.
 */
export function _decode_RunningBSPLocalReferences(el: _Element): RunningBSPLocalReferences {
  if (!_cached_decoder_for_RunningBSPLocalReferences) {
    _cached_decoder_for_RunningBSPLocalReferences = $._decodeSetOf<RunningBSPLocalReference>(
      () => _decode_RunningBSPLocalReference
    );
  }
  return _cached_decoder_for_RunningBSPLocalReferences(el);
}


let _cached_encoder_for_RunningBSPLocalReferences: $.ASN1Encoder<RunningBSPLocalReferences> | null = null;


/**
 * @summary Encodes a(n) RunningBSPLocalReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPLocalReferences, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPLocalReferences(
  value: RunningBSPLocalReferences,
  elGetter: $.ASN1Encoder<RunningBSPLocalReferences>
): _Element {
  if (!_cached_encoder_for_RunningBSPLocalReferences) {
    _cached_encoder_for_RunningBSPLocalReferences = $._encodeSetOf<RunningBSPLocalReference>(
      () => _encode_RunningBSPLocalReference,
      $.BER
    );
  }
  return _cached_encoder_for_RunningBSPLocalReferences(value, elGetter);
}


/* eslint-enable */
