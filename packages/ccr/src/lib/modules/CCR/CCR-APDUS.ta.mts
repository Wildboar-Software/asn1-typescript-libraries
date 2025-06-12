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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  C_INITIALIZE_RI,
  _decode_C_INITIALIZE_RI,
  _encode_C_INITIALIZE_RI,
} from '../CCR/C-INITIALIZE-RI.ta.mjs';
export {
  C_INITIALIZE_RI,
  _decode_C_INITIALIZE_RI,
  _encode_C_INITIALIZE_RI,
} from '../CCR/C-INITIALIZE-RI.ta.mjs';
import {
  C_INITIALIZE_RC,
  _decode_C_INITIALIZE_RC,
  _encode_C_INITIALIZE_RC,
} from '../CCR/C-INITIALIZE-RC.ta.mjs';
export {
  C_INITIALIZE_RC,
  _decode_C_INITIALIZE_RC,
  _encode_C_INITIALIZE_RC,
} from '../CCR/C-INITIALIZE-RC.ta.mjs';
import {
  C_BEGIN_RI,
  _decode_C_BEGIN_RI,
  _encode_C_BEGIN_RI,
} from '../CCR/C-BEGIN-RI.ta.mjs';
export {
  C_BEGIN_RI,
  _decode_C_BEGIN_RI,
  _encode_C_BEGIN_RI,
} from '../CCR/C-BEGIN-RI.ta.mjs';
import {
  C_BEGIN_RC,
  _decode_C_BEGIN_RC,
  _encode_C_BEGIN_RC,
} from '../CCR/C-BEGIN-RC.ta.mjs';
export {
  C_BEGIN_RC,
  _decode_C_BEGIN_RC,
  _encode_C_BEGIN_RC,
} from '../CCR/C-BEGIN-RC.ta.mjs';
import {
  C_PREPARE_RI,
  _decode_C_PREPARE_RI,
  _encode_C_PREPARE_RI,
} from '../CCR/C-PREPARE-RI.ta.mjs';
export {
  C_PREPARE_RI,
  _decode_C_PREPARE_RI,
  _encode_C_PREPARE_RI,
} from '../CCR/C-PREPARE-RI.ta.mjs';
import {
  C_READY_RI,
  _decode_C_READY_RI,
  _encode_C_READY_RI,
} from '../CCR/C-READY-RI.ta.mjs';
export {
  C_READY_RI,
  _decode_C_READY_RI,
  _encode_C_READY_RI,
} from '../CCR/C-READY-RI.ta.mjs';
import {
  C_COMMIT_RI,
  _decode_C_COMMIT_RI,
  _encode_C_COMMIT_RI,
} from '../CCR/C-COMMIT-RI.ta.mjs';
export {
  C_COMMIT_RI,
  _decode_C_COMMIT_RI,
  _encode_C_COMMIT_RI,
} from '../CCR/C-COMMIT-RI.ta.mjs';
import {
  C_COMMIT_RC,
  _decode_C_COMMIT_RC,
  _encode_C_COMMIT_RC,
} from '../CCR/C-COMMIT-RC.ta.mjs';
export {
  C_COMMIT_RC,
  _decode_C_COMMIT_RC,
  _encode_C_COMMIT_RC,
} from '../CCR/C-COMMIT-RC.ta.mjs';
import {
  C_ROLLBACK_RI,
  _decode_C_ROLLBACK_RI,
  _encode_C_ROLLBACK_RI,
} from '../CCR/C-ROLLBACK-RI.ta.mjs';
export {
  C_ROLLBACK_RI,
  _decode_C_ROLLBACK_RI,
  _encode_C_ROLLBACK_RI,
} from '../CCR/C-ROLLBACK-RI.ta.mjs';
import {
  C_ROLLBACK_RC,
  _decode_C_ROLLBACK_RC,
  _encode_C_ROLLBACK_RC,
} from '../CCR/C-ROLLBACK-RC.ta.mjs';
export {
  C_ROLLBACK_RC,
  _decode_C_ROLLBACK_RC,
  _encode_C_ROLLBACK_RC,
} from '../CCR/C-ROLLBACK-RC.ta.mjs';
import {
  C_RECOVER_RI,
  _decode_C_RECOVER_RI,
  _encode_C_RECOVER_RI,
} from '../CCR/C-RECOVER-RI.ta.mjs';
export {
  C_RECOVER_RI,
  _decode_C_RECOVER_RI,
  _encode_C_RECOVER_RI,
} from '../CCR/C-RECOVER-RI.ta.mjs';
import {
  C_RECOVER_RC,
  _decode_C_RECOVER_RC,
  _encode_C_RECOVER_RC,
} from '../CCR/C-RECOVER-RC.ta.mjs';
export {
  C_RECOVER_RC,
  _decode_C_RECOVER_RC,
  _encode_C_RECOVER_RC,
} from '../CCR/C-RECOVER-RC.ta.mjs';
import {
  C_NOCHANGE_RI,
  _decode_C_NOCHANGE_RI,
  _encode_C_NOCHANGE_RI,
} from '../CCR/C-NOCHANGE-RI.ta.mjs';
export {
  C_NOCHANGE_RI,
  _decode_C_NOCHANGE_RI,
  _encode_C_NOCHANGE_RI,
} from '../CCR/C-NOCHANGE-RI.ta.mjs';
import {
  C_NOCHANGE_RC,
  _decode_C_NOCHANGE_RC,
  _encode_C_NOCHANGE_RC,
} from '../CCR/C-NOCHANGE-RC.ta.mjs';
export {
  C_NOCHANGE_RC,
  _decode_C_NOCHANGE_RC,
  _encode_C_NOCHANGE_RC,
} from '../CCR/C-NOCHANGE-RC.ta.mjs';
import {
  C_CANCEL_RI,
  _decode_C_CANCEL_RI,
  _encode_C_CANCEL_RI,
} from '../CCR/C-CANCEL-RI.ta.mjs';
export {
  C_CANCEL_RI,
  _decode_C_CANCEL_RI,
  _encode_C_CANCEL_RI,
} from '../CCR/C-CANCEL-RI.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CCR_APDUS */
/**
 * @summary CCR_APDUS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CCR-APDUS  ::=  CHOICE {
 *   c-INITIALIZE-RI  C-INITIALIZE-RI,
 *   c-INITIALIZE-RC  C-INITIALIZE-RC,
 *   c-BEGIN-RI       C-BEGIN-RI,
 *   c-BEGIN-RC       C-BEGIN-RC,
 *   c-PREPARE-RI     C-PREPARE-RI,
 *   c-READY-RI       C-READY-RI,
 *   c-COMMIT-RI      C-COMMIT-RI,
 *   c-COMMIT-RC      C-COMMIT-RC,
 *   c-ROLLBACK-RI    C-ROLLBACK-RI,
 *   c-ROLLBACK-RC    C-ROLLBACK-RC,
 *   c-RECOVER-RI     C-RECOVER-RI,
 *   c-RECOVER-RC     C-RECOVER-RC,
 *   ...,
 *   c-NOCHANGE-RI    C-NOCHANGE-RI,
 *   c-NOCHANGE-RC    C-NOCHANGE-RC,
 *   c-CANCEL-RI      C-CANCEL-RI
 * }
 * ```
 */
export type CCR_APDUS =
  | { c_INITIALIZE_RI: C_INITIALIZE_RI } /* CHOICE_ALT_ROOT */
  | { c_INITIALIZE_RC: C_INITIALIZE_RC } /* CHOICE_ALT_ROOT */
  | { c_BEGIN_RI: C_BEGIN_RI } /* CHOICE_ALT_ROOT */
  | { c_BEGIN_RC: C_BEGIN_RC } /* CHOICE_ALT_ROOT */
  | { c_PREPARE_RI: C_PREPARE_RI } /* CHOICE_ALT_ROOT */
  | { c_READY_RI: C_READY_RI } /* CHOICE_ALT_ROOT */
  | { c_COMMIT_RI: C_COMMIT_RI } /* CHOICE_ALT_ROOT */
  | { c_COMMIT_RC: C_COMMIT_RC } /* CHOICE_ALT_ROOT */
  | { c_ROLLBACK_RI: C_ROLLBACK_RI } /* CHOICE_ALT_ROOT */
  | { c_ROLLBACK_RC: C_ROLLBACK_RC } /* CHOICE_ALT_ROOT */
  | { c_RECOVER_RI: C_RECOVER_RI } /* CHOICE_ALT_ROOT */
  | { c_RECOVER_RC: C_RECOVER_RC } /* CHOICE_ALT_ROOT */
  | { c_NOCHANGE_RI: C_NOCHANGE_RI } /* CHOICE_ALT_EXT */
  | { c_NOCHANGE_RC: C_NOCHANGE_RC } /* CHOICE_ALT_EXT */
  | { c_CANCEL_RI: C_CANCEL_RI } /* CHOICE_ALT_EXT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CCR_APDUS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CCR_APDUS */
let _cached_decoder_for_CCR_APDUS: $.ASN1Decoder<CCR_APDUS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CCR_APDUS */

/* START_OF_SYMBOL_DEFINITION _decode_CCR_APDUS */
/**
 * @summary Decodes an ASN.1 element into a(n) CCR_APDUS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CCR_APDUS} The decoded data structure.
 */
export function _decode_CCR_APDUS(el: _Element) {
  if (!_cached_decoder_for_CCR_APDUS) {
    _cached_decoder_for_CCR_APDUS = $._decode_extensible_choice<CCR_APDUS>({
      'CONTEXT 11': ['c_INITIALIZE_RI', _decode_C_INITIALIZE_RI],
      'CONTEXT 12': ['c_INITIALIZE_RC', _decode_C_INITIALIZE_RC],
      'CONTEXT 1': ['c_BEGIN_RI', _decode_C_BEGIN_RI],
      'CONTEXT 2': ['c_BEGIN_RC', _decode_C_BEGIN_RC],
      'CONTEXT 3': ['c_PREPARE_RI', _decode_C_PREPARE_RI],
      'CONTEXT 4': ['c_READY_RI', _decode_C_READY_RI],
      'CONTEXT 5': ['c_COMMIT_RI', _decode_C_COMMIT_RI],
      'CONTEXT 6': ['c_COMMIT_RC', _decode_C_COMMIT_RC],
      'CONTEXT 7': ['c_ROLLBACK_RI', _decode_C_ROLLBACK_RI],
      'CONTEXT 8': ['c_ROLLBACK_RC', _decode_C_ROLLBACK_RC],
      'CONTEXT 9': ['c_RECOVER_RI', _decode_C_RECOVER_RI],
      'CONTEXT 10': ['c_RECOVER_RC', _decode_C_RECOVER_RC],
      'CONTEXT 13': ['c_NOCHANGE_RI', _decode_C_NOCHANGE_RI],
      'CONTEXT 14': ['c_NOCHANGE_RC', _decode_C_NOCHANGE_RC],
      'CONTEXT 15': ['c_CANCEL_RI', _decode_C_CANCEL_RI],
    });
  }
  return _cached_decoder_for_CCR_APDUS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CCR_APDUS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CCR_APDUS */
let _cached_encoder_for_CCR_APDUS: $.ASN1Encoder<CCR_APDUS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CCR_APDUS */

/* START_OF_SYMBOL_DEFINITION _encode_CCR_APDUS */
/**
 * @summary Encodes a(n) CCR_APDUS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCR_APDUS, encoded as an ASN.1 Element.
 */
export function _encode_CCR_APDUS(
  value: CCR_APDUS,
  elGetter: $.ASN1Encoder<CCR_APDUS>
) {
  if (!_cached_encoder_for_CCR_APDUS) {
    _cached_encoder_for_CCR_APDUS = $._encode_choice<CCR_APDUS>(
      {
        c_INITIALIZE_RI: _encode_C_INITIALIZE_RI,
        c_INITIALIZE_RC: _encode_C_INITIALIZE_RC,
        c_BEGIN_RI: _encode_C_BEGIN_RI,
        c_BEGIN_RC: _encode_C_BEGIN_RC,
        c_PREPARE_RI: _encode_C_PREPARE_RI,
        c_READY_RI: _encode_C_READY_RI,
        c_COMMIT_RI: _encode_C_COMMIT_RI,
        c_COMMIT_RC: _encode_C_COMMIT_RC,
        c_ROLLBACK_RI: _encode_C_ROLLBACK_RI,
        c_ROLLBACK_RC: _encode_C_ROLLBACK_RC,
        c_RECOVER_RI: _encode_C_RECOVER_RI,
        c_RECOVER_RC: _encode_C_RECOVER_RC,
        c_NOCHANGE_RI: _encode_C_NOCHANGE_RI,
        c_NOCHANGE_RC: _encode_C_NOCHANGE_RC,
        c_CANCEL_RI: _encode_C_CANCEL_RI,
      },
      $.BER
    );
  }
  return _cached_encoder_for_CCR_APDUS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CCR_APDUS */

/* eslint-enable */
