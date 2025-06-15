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

/* START_OF_SYMBOL_DEFINITION IncompleteScan */
/**
 * @summary IncompleteScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteScan  ::=  INTEGER {sizeExceeded(0), timeExceeded(1), other(2)}
 * ```
 */
export type IncompleteScan = INTEGER;
/* END_OF_SYMBOL_DEFINITION IncompleteScan */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_sizeExceeded */
/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_sizeExceeded: IncompleteScan = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_sizeExceeded */

/* START_OF_SYMBOL_DEFINITION sizeExceeded */
/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const sizeExceeded: IncompleteScan = IncompleteScan_sizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sizeExceeded */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_timeExceeded */
/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_timeExceeded: IncompleteScan = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_timeExceeded */

/* START_OF_SYMBOL_DEFINITION timeExceeded */
/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const timeExceeded: IncompleteScan = IncompleteScan_timeExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timeExceeded */

/* START_OF_SYMBOL_DEFINITION IncompleteScan_other */
/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const IncompleteScan_other: IncompleteScan = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION IncompleteScan_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const other: IncompleteScan = IncompleteScan_other; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteScan */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _decode_IncompleteScan */
export const _decode_IncompleteScan = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteScan */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteScan */

/* START_OF_SYMBOL_DEFINITION _encode_IncompleteScan */
export const _encode_IncompleteScan = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_IncompleteScan */

/* eslint-enable */
