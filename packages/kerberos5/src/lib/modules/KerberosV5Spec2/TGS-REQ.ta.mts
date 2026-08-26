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
 * @summary TGS_REQ
 * @description
 *
 * Ticket-Granting Service request for additional tickets
 * ([RFC 4120 §5.4.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.4.1), [RFC 4120 §3.3](https://datatracker.ietf.org/doc/html/rfc4120#section-3.3)). APPLICATION 12 wrapping
 * `KDC-REQ`. MUST include `PA-TGS-REQ` in `padata`.
 * `msg-type` is 12 (`KRB_TGS_REQ`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TGS-REQ          ::=  [APPLICATION 12] KDC-REQ
 * ```
 */
export type TGS_REQ = KDC_REQ; // DefinedType


let _cached_decoder_for_TGS_REQ: $.ASN1Decoder<TGS_REQ> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TGS_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TGS_REQ} The decoded data structure.
 */
export function _decode_TGS_REQ(el: _Element): TGS_REQ {
  if (!_cached_decoder_for_TGS_REQ) {
    _cached_decoder_for_TGS_REQ = $._decode_implicit<TGS_REQ>(
      () => _decode_KDC_REQ
    );
  }
  return _cached_decoder_for_TGS_REQ(el);
}


let _cached_encoder_for_TGS_REQ: $.ASN1Encoder<TGS_REQ> | null = null;


/**
 * @summary Encodes a(n) TGS_REQ into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TGS_REQ, encoded as an ASN.1 Element.
 */
export function _encode_TGS_REQ(
  value: TGS_REQ,
  elGetter: $.ASN1Encoder<TGS_REQ>
): _Element {
  if (!_cached_encoder_for_TGS_REQ) {
    _cached_encoder_for_TGS_REQ = $._encode_implicit(
      _TagClass.application,
      12,
      () => _encode_KDC_REQ,
      $.DER
    );
  }
  return _cached_encoder_for_TGS_REQ(value, elGetter);
}


/* eslint-enable */
