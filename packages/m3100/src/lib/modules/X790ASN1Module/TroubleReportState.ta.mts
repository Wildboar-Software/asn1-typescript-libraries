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

/* START_OF_SYMBOL_DEFINITION TroubleReportState */
/**
 * @summary TroubleReportState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportState  ::=  INTEGER {
 *   queued(0), openActive(1), deferred(2), cleared(3), closed(4), disabled(5)
 * }(0..255)
 * ```
 */
export type TroubleReportState = INTEGER;
/* END_OF_SYMBOL_DEFINITION TroubleReportState */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_queued */
/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const TroubleReportState_queued: TroubleReportState = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_queued */

/* START_OF_SYMBOL_DEFINITION queued */
/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const queued: TroubleReportState = TroubleReportState_queued; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION queued */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_openActive */
/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const TroubleReportState_openActive: TroubleReportState = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_openActive */

/* START_OF_SYMBOL_DEFINITION openActive */
/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const openActive: TroubleReportState = TroubleReportState_openActive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION openActive */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_deferred */
/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const TroubleReportState_deferred: TroubleReportState = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_deferred */

/* START_OF_SYMBOL_DEFINITION deferred */
/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const deferred: TroubleReportState = TroubleReportState_deferred; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deferred */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_cleared */
/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const TroubleReportState_cleared: TroubleReportState = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_cleared */

/* START_OF_SYMBOL_DEFINITION cleared */
/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const cleared: TroubleReportState = TroubleReportState_cleared; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cleared */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_closed */
/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const TroubleReportState_closed: TroubleReportState = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_closed */

/* START_OF_SYMBOL_DEFINITION closed */
/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const closed: TroubleReportState = TroubleReportState_closed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closed */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_disabled */
/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const TroubleReportState_disabled: TroubleReportState = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_disabled */

/* START_OF_SYMBOL_DEFINITION disabled */
/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const disabled: TroubleReportState = TroubleReportState_disabled; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION disabled */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportState */
export const _decode_TroubleReportState = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportState */
export const _encode_TroubleReportState = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportState */

/* eslint-enable */
