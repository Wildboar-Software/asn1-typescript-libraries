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
  KDC_REP,
  _decode_KDC_REP,
  _encode_KDC_REP,
} from '../KerberosV5Spec2/KDC-REP.ta.mjs';

/**
 * @summary TGS_REP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TGS-REP          ::=  [APPLICATION 13] KDC-REP
 * ```
 */
export type TGS_REP = KDC_REP; // DefinedType


let _cached_decoder_for_TGS_REP: $.ASN1Decoder<TGS_REP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TGS_REP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TGS_REP} The decoded data structure.
 */
export function _decode_TGS_REP(el: _Element) {
  if (!_cached_decoder_for_TGS_REP) {
    _cached_decoder_for_TGS_REP = $._decode_implicit<TGS_REP>(
      () => _decode_KDC_REP
    );
  }
  return _cached_decoder_for_TGS_REP(el);
}


let _cached_encoder_for_TGS_REP: $.ASN1Encoder<TGS_REP> | null = null;


/**
 * @summary Encodes a(n) TGS_REP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TGS_REP, encoded as an ASN.1 Element.
 */
export function _encode_TGS_REP(
  value: TGS_REP,
  elGetter: $.ASN1Encoder<TGS_REP>
) {
  if (!_cached_encoder_for_TGS_REP) {
    _cached_encoder_for_TGS_REP = $._encode_implicit(
      _TagClass.application,
      13,
      () => _encode_KDC_REP,
      $.DER
    );
  }
  return _cached_encoder_for_TGS_REP(value, elGetter);
}


/* eslint-enable */
