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

/* START_OF_SYMBOL_DEFINITION ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  INTEGER {busy(0), unavailable(1), unwilling-to-perform(2)
 * }(0..ub-error-reasons)
 * ```
 */
export type ServiceProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy: ServiceProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const busy: ServiceProblem = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */

/* START_OF_SYMBOL_DEFINITION unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const unavailable: ServiceProblem = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unwilling_to_perform */
/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwilling_to_perform: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unwilling_to_perform */

/* START_OF_SYMBOL_DEFINITION unwilling_to_perform */
/**
 * @summary ServiceProblem_unwilling_to_perform
 * @constant
 * @type {number}
 */
export const unwilling_to_perform: ServiceProblem = ServiceProblem_unwilling_to_perform; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unwilling_to_perform */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceProblem */
export const _decode_ServiceProblem = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceProblem */
export const _encode_ServiceProblem = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ServiceProblem */

/* eslint-enable */
