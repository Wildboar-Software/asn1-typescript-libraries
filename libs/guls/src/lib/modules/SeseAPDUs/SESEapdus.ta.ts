/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta';
export {
  InvocationId,
  _decode_InvocationId,
  _encode_InvocationId,
} from '../SeseAPDUs/InvocationId.ta';
import {
  SETransfer,
  _decode_SETransfer,
  _encode_SETransfer,
} from '../SeseAPDUs/SETransfer.ta';
export {
  SETransfer,
  _decode_SETransfer,
  _encode_SETransfer,
} from '../SeseAPDUs/SETransfer.ta';
import {
  SEUAbort,
  _decode_SEUAbort,
  _encode_SEUAbort,
} from '../SeseAPDUs/SEUAbort.ta';
export {
  SEUAbort,
  _decode_SEUAbort,
  _encode_SEUAbort,
} from '../SeseAPDUs/SEUAbort.ta';
import {
  SEPAbort,
  _decode_SEPAbort,
  _encode_SEPAbort,
} from '../SeseAPDUs/SEPAbort.ta';
export {
  SEPAbort,
  _decode_SEPAbort,
  _encode_SEPAbort,
} from '../SeseAPDUs/SEPAbort.ta';

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
 * @param {value} el The element being decoded.
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
