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

/* START_OF_SYMBOL_DEFINITION RefusalReason */
/**
 * @summary RefusalReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusalReason  ::=  INTEGER {
 *   facility-unavailable(0), facility-not-subscribed(1),
 *   parameter-unacceptable(2)}(0..ub-integer-options)
 * ```
 */
export type RefusalReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION RefusalReason */

/* START_OF_SYMBOL_DEFINITION RefusalReason_facility_unavailable */
/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_unavailable: RefusalReason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_facility_unavailable */

/* START_OF_SYMBOL_DEFINITION facility_unavailable */
/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const facility_unavailable: RefusalReason = RefusalReason_facility_unavailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION facility_unavailable */

/* START_OF_SYMBOL_DEFINITION RefusalReason_facility_not_subscribed */
/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_not_subscribed: RefusalReason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_facility_not_subscribed */

/* START_OF_SYMBOL_DEFINITION facility_not_subscribed */
/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const facility_not_subscribed: RefusalReason = RefusalReason_facility_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION facility_not_subscribed */

/* START_OF_SYMBOL_DEFINITION RefusalReason_parameter_unacceptable */
/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const RefusalReason_parameter_unacceptable: RefusalReason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_parameter_unacceptable */

/* START_OF_SYMBOL_DEFINITION parameter_unacceptable */
/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const parameter_unacceptable: RefusalReason = RefusalReason_parameter_unacceptable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION parameter_unacceptable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusalReason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _decode_RefusalReason */
export const _decode_RefusalReason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusalReason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _encode_RefusalReason */
export const _encode_RefusalReason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_RefusalReason */

/* eslint-enable */
