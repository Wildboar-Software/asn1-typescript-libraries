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

/* START_OF_SYMBOL_DEFINITION OperationStatus */
/**
 * @summary OperationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationStatus  ::=  INTEGER {in-progress(0), ok(1), error(2)}
 * ```
 */
export type OperationStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION OperationStatus */

/* START_OF_SYMBOL_DEFINITION OperationStatus_in_progress */
/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const OperationStatus_in_progress: OperationStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_in_progress */

/* START_OF_SYMBOL_DEFINITION in_progress */
/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const in_progress: OperationStatus = OperationStatus_in_progress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION in_progress */

/* START_OF_SYMBOL_DEFINITION OperationStatus_ok */
/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const OperationStatus_ok: OperationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_ok */

/* START_OF_SYMBOL_DEFINITION ok */
/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const ok: OperationStatus = OperationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ok */

/* START_OF_SYMBOL_DEFINITION OperationStatus_error */
/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const OperationStatus_error: OperationStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_error */

/* START_OF_SYMBOL_DEFINITION error */
/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const error: OperationStatus = OperationStatus_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_OperationStatus */
export const _decode_OperationStatus = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_OperationStatus */
export const _encode_OperationStatus = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_OperationStatus */

/* eslint-enable */
