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
  KDC_REQ,
  _decode_KDC_REQ,
  _encode_KDC_REQ,
} from '../KerberosV5Spec2/KDC-REQ.ta.mjs';

/**
 * @summary AS_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AS-REQ           ::=  [APPLICATION 10] KDC-REQ
 * ```
 */
export type AS_REQ = KDC_REQ; // DefinedType


let _cached_decoder_for_AS_REQ: $.ASN1Decoder<AS_REQ> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AS_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AS_REQ} The decoded data structure.
 */
export function _decode_AS_REQ(el: _Element): AS_REQ {
  if (!_cached_decoder_for_AS_REQ) {
    _cached_decoder_for_AS_REQ = $._decode_implicit<AS_REQ>(
      () => _decode_KDC_REQ
    );
  }
  return _cached_decoder_for_AS_REQ(el);
}


let _cached_encoder_for_AS_REQ: $.ASN1Encoder<AS_REQ> | null = null;


/**
 * @summary Encodes a(n) AS_REQ into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AS_REQ, encoded as an ASN.1 Element.
 */
export function _encode_AS_REQ(value: AS_REQ, elGetter: $.ASN1Encoder<AS_REQ>): _Element {
  if (!_cached_encoder_for_AS_REQ) {
    _cached_encoder_for_AS_REQ = $._encode_implicit(
      _TagClass.application,
      10,
      () => _encode_KDC_REQ,
      $.DER
    );
  }
  return _cached_encoder_for_AS_REQ(value, elGetter);
}


/* eslint-enable */
