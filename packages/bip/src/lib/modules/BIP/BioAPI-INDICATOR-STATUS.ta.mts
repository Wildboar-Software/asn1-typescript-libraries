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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_INDICATOR_STATUS */
export enum _enum_for_BioAPI_INDICATOR_STATUS {
  accept = 0,
  reject = 1,
  ready = 2,
  busy = 3,
  failure = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS */
/**
 * @summary BioAPI_INDICATOR_STATUS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-INDICATOR-STATUS  ::=  ENUMERATED {
 *   accept, reject, ready, busy, failure, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_INDICATOR_STATUS =
  | _enum_for_BioAPI_INDICATOR_STATUS
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_accept */
/**
 * @summary BioAPI_INDICATOR_STATUS_accept
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_accept: BioAPI_INDICATOR_STATUS = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_accept */

/* START_OF_SYMBOL_DEFINITION accept */
/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_accept; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accept */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_reject */
/**
 * @summary BioAPI_INDICATOR_STATUS_reject
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_reject: BioAPI_INDICATOR_STATUS = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_reject */

/* START_OF_SYMBOL_DEFINITION reject */
/**
 * @summary reject
 * @constant
 * @type {number}
 */
export const reject: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_reject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reject */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_ready */
/**
 * @summary BioAPI_INDICATOR_STATUS_ready
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_ready: BioAPI_INDICATOR_STATUS = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_ready */

/* START_OF_SYMBOL_DEFINITION ready */
/**
 * @summary ready
 * @constant
 * @type {number}
 */
export const ready: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_ready; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ready */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_busy */
/**
 * @summary BioAPI_INDICATOR_STATUS_busy
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_busy: BioAPI_INDICATOR_STATUS = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary busy
 * @constant
 * @type {number}
 */
export const busy: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_busy; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_failure */
/**
 * @summary BioAPI_INDICATOR_STATUS_failure
 * @constant
 * @type {number}
 */
export const BioAPI_INDICATOR_STATUS_failure: BioAPI_INDICATOR_STATUS = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_INDICATOR_STATUS_failure */

/* START_OF_SYMBOL_DEFINITION failure */
/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure: BioAPI_INDICATOR_STATUS = BioAPI_INDICATOR_STATUS_failure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INDICATOR_STATUS */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_INDICATOR_STATUS */
export const _decode_BioAPI_INDICATOR_STATUS = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INDICATOR_STATUS */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_INDICATOR_STATUS */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_INDICATOR_STATUS */
export const _encode_BioAPI_INDICATOR_STATUS = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_INDICATOR_STATUS */

/* eslint-enable */
