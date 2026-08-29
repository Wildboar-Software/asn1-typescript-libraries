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
  VisibleEndpoint,
  _decode_VisibleEndpoint,
  _encode_VisibleEndpoint,
} from '../BIP/VisibleEndpoint.ta.mjs';

/**
 * @summary VisibleEndpoints
 * @description
 *
 * Conceptual table present in all BIP endpoints. Defined to aid
 * specification of framework behaviour; abstract values do not
 * occur in any BIP message and are never encoded. Rows are
 * added on `BioAPI_Init` / `BioAPI_InitEndpoint` /
 * `BioAPI_LinkToEndpoint`, and deleted on
 * `masterDeletionEvent` or `BioAPI_UnlinkFromEndpoint`. ITU-T
 * Rec. X.1083 (11/2007)
 * [§18.2](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VisibleEndpoints  ::=  SET OF endpoint VisibleEndpoint
 * ```
 */
export type VisibleEndpoints = VisibleEndpoint[]; // SetOfType


let _cached_decoder_for_VisibleEndpoints: $.ASN1Decoder<VisibleEndpoints> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) VisibleEndpoints
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VisibleEndpoints} The decoded data structure.
 */
export function _decode_VisibleEndpoints(el: _Element): VisibleEndpoints {
  if (!_cached_decoder_for_VisibleEndpoints) {
    _cached_decoder_for_VisibleEndpoints = $._decodeSetOf<VisibleEndpoint>(
      () => _decode_VisibleEndpoint
    );
  }
  return _cached_decoder_for_VisibleEndpoints(el);
}


let _cached_encoder_for_VisibleEndpoints: $.ASN1Encoder<VisibleEndpoints> | null = null;


/**
 * @summary Encodes a(n) VisibleEndpoints into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleEndpoints, encoded as an ASN.1 Element.
 */
export function _encode_VisibleEndpoints(
  value: VisibleEndpoints,
  elGetter: $.ASN1Encoder<VisibleEndpoints>
): _Element {
  if (!_cached_encoder_for_VisibleEndpoints) {
    _cached_encoder_for_VisibleEndpoints = $._encodeSetOf<VisibleEndpoint>(
      () => _encode_VisibleEndpoint,
      $.BER
    );
  }
  return _cached_encoder_for_VisibleEndpoints(value, elGetter);
}


/* eslint-enable */
