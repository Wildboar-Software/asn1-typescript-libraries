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
  GUIEventRedirector,
  _decode_GUIEventRedirector,
  _encode_GUIEventRedirector,
} from '../BIP/GUIEventRedirector.ta.mjs';

/**
 * @summary GUIEventRedirectors
 * @description
 *
 * Conceptual table present in all BIP endpoints. Defined to aid
 * specification of framework behaviour; abstract values do not
 * occur in any BIP message and are never encoded. Added on
 * `BioAPI_RedirectGUIEvents` or `redirectGUIEvents`; deleted on
 * unredirect, deletion of a `MasterEndpoints` row, or deletion
 * of the matching attach-session local/remote reference. ITU-T
 * Rec. X.1083 (11/2007)
 * [§18.12](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventRedirectors  ::=  SET OF redirector GUIEventRedirector
 * ```
 */
export type GUIEventRedirectors = GUIEventRedirector[]; // SetOfType


let _cached_decoder_for_GUIEventRedirectors: $.ASN1Decoder<GUIEventRedirectors> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventRedirectors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventRedirectors} The decoded data structure.
 */
export function _decode_GUIEventRedirectors(el: _Element): GUIEventRedirectors {
  if (!_cached_decoder_for_GUIEventRedirectors) {
    _cached_decoder_for_GUIEventRedirectors = $._decodeSetOf<GUIEventRedirector>(
      () => _decode_GUIEventRedirector
    );
  }
  return _cached_decoder_for_GUIEventRedirectors(el);
}


let _cached_encoder_for_GUIEventRedirectors: $.ASN1Encoder<GUIEventRedirectors> | null = null;


/**
 * @summary Encodes a(n) GUIEventRedirectors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventRedirectors, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventRedirectors(
  value: GUIEventRedirectors,
  elGetter: $.ASN1Encoder<GUIEventRedirectors>
): _Element {
  if (!_cached_encoder_for_GUIEventRedirectors) {
    _cached_encoder_for_GUIEventRedirectors = $._encodeSetOf<GUIEventRedirector>(
      () => _encode_GUIEventRedirector,
      $.BER
    );
  }
  return _cached_encoder_for_GUIEventRedirectors(value, elGetter);
}


/* eslint-enable */
