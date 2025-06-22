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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RetrievalStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RetrievalStatus  ::=  INTEGER {new(0), listed(1), processed(2)}
 * ```
 */
export type RetrievalStatus = INTEGER;

/**
 * @summary RetrievalStatus_new_
 * @constant
 * @type {number}
 */
export const RetrievalStatus_new_: RetrievalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_new_
 * @constant
 * @type {number}
 */
export const new_: RetrievalStatus = RetrievalStatus_new_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_listed: RetrievalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const listed: RetrievalStatus = RetrievalStatus_listed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_processed: RetrievalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const processed: RetrievalStatus = RetrievalStatus_processed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RetrievalStatus = $._decodeInteger;


export const _encode_RetrievalStatus = $._encodeInteger;


/* eslint-enable */
