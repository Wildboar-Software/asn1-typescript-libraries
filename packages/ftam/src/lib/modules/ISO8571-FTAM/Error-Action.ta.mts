/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Error_Action */
/**
 * @summary Error_Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Error-Action  ::=  INTEGER {terminate(0), continue(1)}
 * ```
 */
export type Error_Action = INTEGER;
/* END_OF_SYMBOL_DEFINITION Error_Action */

/* START_OF_SYMBOL_DEFINITION Error_Action_terminate */
/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const Error_Action_terminate: Error_Action = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Error_Action_terminate */

/* START_OF_SYMBOL_DEFINITION terminate */
/**
 * @summary Error_Action_terminate
 * @constant
 * @type {number}
 */
export const terminate: Error_Action = Error_Action_terminate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION terminate */

/* START_OF_SYMBOL_DEFINITION Error_Action_continue_ */
/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const Error_Action_continue_: Error_Action = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Error_Action_continue_ */

/* START_OF_SYMBOL_DEFINITION continue_ */
/**
 * @summary Error_Action_continue_
 * @constant
 * @type {number}
 */
export const continue_: Error_Action = Error_Action_continue_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION continue_ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Error_Action */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Error_Action */

/* START_OF_SYMBOL_DEFINITION _decode_Error_Action */
export const _decode_Error_Action = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Error_Action */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Error_Action */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Error_Action */

/* START_OF_SYMBOL_DEFINITION _encode_Error_Action */
export const _encode_Error_Action = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Error_Action */

/* eslint-enable */
