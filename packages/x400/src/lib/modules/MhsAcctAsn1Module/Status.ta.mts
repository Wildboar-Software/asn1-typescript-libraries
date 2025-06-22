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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_indirect_mIS_user_agreement_on_the_request: Status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const indirect_mIS_user_agreement_on_the_request: Status = Status_indirect_mIS_user_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_mis_provider_agreement_on_the_request: Status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const mis_provider_agreement_on_the_request: Status = Status_mis_provider_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const Status_request_in_progress: Status = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const request_in_progress: Status = Status_request_in_progress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const Status_request_processed: Status = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const request_processed: Status = Status_request_processed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Status = $._decodeInteger;


export const _encode_Status = $._encodeInteger;


/* eslint-enable */
