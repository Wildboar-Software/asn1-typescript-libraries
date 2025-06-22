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
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.mjs';

/**
 * @summary IDREF
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDREF  ::=  NCName
 * ```
 */
export type IDREF = NCName; // DefinedType


let _cached_decoder_for_IDREF: $.ASN1Decoder<IDREF> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IDREF
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDREF} The decoded data structure.
 */
export function _decode_IDREF(el: _Element) {
  if (!_cached_decoder_for_IDREF) {
    _cached_decoder_for_IDREF = _decode_NCName;
  }
  return _cached_decoder_for_IDREF(el);
}


let _cached_encoder_for_IDREF: $.ASN1Encoder<IDREF> | null = null;


/**
 * @summary Encodes a(n) IDREF into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDREF, encoded as an ASN.1 Element.
 */
export function _encode_IDREF(value: IDREF, elGetter: $.ASN1Encoder<IDREF>) {
  if (!_cached_encoder_for_IDREF) {
    _cached_encoder_for_IDREF = _encode_NCName;
  }
  return _cached_encoder_for_IDREF(value, elGetter);
}


/* eslint-enable */
