/* eslint-disable */
import {
  ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_C_RECOVER_RC_recovery_state */
export enum _enum_for_C_RECOVER_RC_recovery_state {
  commit = 0,
  ready = 1,
  done = 2,
  unknown = 3,
  retry_later = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_C_RECOVER_RC_recovery_state */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state */
/**
 * @summary C_RECOVER_RC_recovery_state
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-RECOVER-RC-recovery-state ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type C_RECOVER_RC_recovery_state =
  | _enum_for_C_RECOVER_RC_recovery_state
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_commit */
/**
 * @summary C_RECOVER_RC_recovery_state_commit
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_commit: C_RECOVER_RC_recovery_state = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_commit */

/* START_OF_SYMBOL_DEFINITION commit */
/**
 * @summary commit
 * @constant
 * @type {number}
 */
export const commit: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_commit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION commit */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_ready */
/**
 * @summary C_RECOVER_RC_recovery_state_ready
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_ready: C_RECOVER_RC_recovery_state = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_ready */

/* START_OF_SYMBOL_DEFINITION ready */
/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_ready; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ready */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_done */
/**
 * @summary C_RECOVER_RC_recovery_state_done
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_done: C_RECOVER_RC_recovery_state = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_done */

/* START_OF_SYMBOL_DEFINITION done */
/**
 * @summary done
 * @constant
 * @type {number}
 */
export const done: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_done; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION done */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_unknown */
/**
 * @summary C_RECOVER_RC_recovery_state_unknown
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_unknown: C_RECOVER_RC_recovery_state = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_retry_later */
/**
 * @summary C_RECOVER_RC_recovery_state_retry_later
 * @constant
 * @type {number}
 */
export const C_RECOVER_RC_recovery_state_retry_later: C_RECOVER_RC_recovery_state = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION C_RECOVER_RC_recovery_state_retry_later */

/* START_OF_SYMBOL_DEFINITION retry_later */
/**
 * @summary retry_later
 * @constant
 * @type {number}
 */
export const retry_later: C_RECOVER_RC_recovery_state = C_RECOVER_RC_recovery_state_retry_later; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION retry_later */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_C_RECOVER_RC_recovery_state */
let _cached_decoder_for_C_RECOVER_RC_recovery_state: $.ASN1Decoder<C_RECOVER_RC_recovery_state> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_C_RECOVER_RC_recovery_state */

/* START_OF_SYMBOL_DEFINITION _decode_C_RECOVER_RC_recovery_state */
/**
 * @summary Decodes an ASN.1 element into a(n) C_RECOVER_RC_recovery_state
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_RECOVER_RC_recovery_state} The decoded data structure.
 */
export function _decode_C_RECOVER_RC_recovery_state(el: _Element) {
  if (!_cached_decoder_for_C_RECOVER_RC_recovery_state) {
    _cached_decoder_for_C_RECOVER_RC_recovery_state = $._decodeEnumerated;
  }
  return _cached_decoder_for_C_RECOVER_RC_recovery_state(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_C_RECOVER_RC_recovery_state */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_C_RECOVER_RC_recovery_state */
let _cached_encoder_for_C_RECOVER_RC_recovery_state: $.ASN1Encoder<C_RECOVER_RC_recovery_state> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_C_RECOVER_RC_recovery_state */

/* START_OF_SYMBOL_DEFINITION _encode_C_RECOVER_RC_recovery_state */
/**
 * @summary Encodes a(n) C_RECOVER_RC_recovery_state into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_RECOVER_RC_recovery_state, encoded as an ASN.1 Element.
 */
export function _encode_C_RECOVER_RC_recovery_state(
  value: C_RECOVER_RC_recovery_state,
  elGetter: $.ASN1Encoder<C_RECOVER_RC_recovery_state>
) {
  if (!_cached_encoder_for_C_RECOVER_RC_recovery_state) {
    _cached_encoder_for_C_RECOVER_RC_recovery_state = $._encodeEnumerated;
  }
  return _cached_encoder_for_C_RECOVER_RC_recovery_state(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_C_RECOVER_RC_recovery_state */

/* eslint-enable */
