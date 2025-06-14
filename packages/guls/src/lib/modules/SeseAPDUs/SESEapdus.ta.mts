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
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta.mjs';
import {
  SETransfer,
  _decode_SETransfer,
  _encode_SETransfer,
} from '../SeseAPDUs/SETransfer.ta.mjs';
import {
  SEUAbort,
  _decode_SEUAbort,
  _encode_SEUAbort,
} from '../SeseAPDUs/SEUAbort.ta.mjs';
import {
  SEPAbort,
  _decode_SEPAbort,
  _encode_SEPAbort,
} from '../SeseAPDUs/SEPAbort.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SESEapdus */
/**
 * @summary SESEapdus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SESEapdus{SECURITY-EXCHANGE:ValidSEs, InvocationId:InvocationIdSet}  ::=
 *   CHOICE {
 *   se-transfer  SETransfer{{ValidSEs}, {InvocationIdSet}},
 *   se-u-abort   SEUAbort{{ValidSEs}, {InvocationIdSet}},
 *   se-p-abort   SEPAbort{{ValidSEs}, {InvocationIdSet}}
 * }
 * ```
 */
export type SESEapdus =
  | { se_transfer: SETransfer } /* CHOICE_ALT_ROOT */
  | { se_u_abort: SEUAbort } /* CHOICE_ALT_ROOT */
  | { se_p_abort: SEPAbort } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SESEapdus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SESEapdus */
let _cached_decoder_for_SESEapdus: $.ASN1Decoder<SESEapdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SESEapdus */

/* START_OF_SYMBOL_DEFINITION _decode_SESEapdus */
/**
 * @summary Decodes an ASN.1 element into a(n) SESEapdus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SESEapdus} The decoded data structure.
 */
export function _decode_SESEapdus(el: _Element) {
  if (!_cached_decoder_for_SESEapdus) {
    _cached_decoder_for_SESEapdus = $._decode_inextensible_choice<SESEapdus>({
      'CONTEXT 0': ['se_transfer', _decode_SETransfer],
      'CONTEXT 1': ['se_u_abort', _decode_SEUAbort],
      'CONTEXT 2': ['se_p_abort', _decode_SEPAbort],
    });
  }
  return _cached_decoder_for_SESEapdus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SESEapdus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SESEapdus */
let _cached_encoder_for_SESEapdus: $.ASN1Encoder<SESEapdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SESEapdus */

/* START_OF_SYMBOL_DEFINITION _encode_SESEapdus */
/**
 * @summary Encodes a(n) SESEapdus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SESEapdus, encoded as an ASN.1 Element.
 */
export function _encode_SESEapdus(
  value: SESEapdus,
  elGetter: $.ASN1Encoder<SESEapdus>
) {
  if (!_cached_encoder_for_SESEapdus) {
    _cached_encoder_for_SESEapdus = $._encode_choice<SESEapdus>(
      {
        se_transfer: _encode_SETransfer,
        se_u_abort: _encode_SEUAbort,
        se_p_abort: _encode_SEPAbort,
      },
      $.BER
    );
  }
  return _cached_encoder_for_SESEapdus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SESEapdus */

/* eslint-enable */
