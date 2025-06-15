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

/* START_OF_SYMBOL_DEFINITION Status */
/**
 * @summary Status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Status  ::=  INTEGER {
 *   indirect-mIS-user-agreement-on-the-request(0),
 *   mis-provider-agreement-on-the-request(1), request-in-progress(2),
 *   request-processed(3)}
 * ```
 */
export type Status = INTEGER;
/* END_OF_SYMBOL_DEFINITION Status */

/* START_OF_SYMBOL_DEFINITION Status_indirect_mIS_user_agreement_on_the_request */
/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_indirect_mIS_user_agreement_on_the_request: Status = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_indirect_mIS_user_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION indirect_mIS_user_agreement_on_the_request */
/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const indirect_mIS_user_agreement_on_the_request: Status = Status_indirect_mIS_user_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION indirect_mIS_user_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION Status_mis_provider_agreement_on_the_request */
/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_mis_provider_agreement_on_the_request: Status = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_mis_provider_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION mis_provider_agreement_on_the_request */
/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const mis_provider_agreement_on_the_request: Status = Status_mis_provider_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mis_provider_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION Status_request_in_progress */
/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const Status_request_in_progress: Status = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_request_in_progress */

/* START_OF_SYMBOL_DEFINITION request_in_progress */
/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const request_in_progress: Status = Status_request_in_progress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION request_in_progress */

/* START_OF_SYMBOL_DEFINITION Status_request_processed */
/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const Status_request_processed: Status = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_request_processed */

/* START_OF_SYMBOL_DEFINITION request_processed */
/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const request_processed: Status = Status_request_processed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION request_processed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _decode_Status */
export const _decode_Status = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Status */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _encode_Status */
export const _encode_Status = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Status */

/* eslint-enable */
