/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary RetrievalStatus
 * @description
 *
 * An important property of each entry in any entry-class is its retrieval-status: See
 * ITU-T X.413 (1999), §6.3.8.
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
export const RetrievalStatus_new_: 0 = 0 satisfies RetrievalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_new_
 * @constant
 * @type {number}
 */
export const new_: 0 = RetrievalStatus_new_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_listed: 1 = 1 satisfies RetrievalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const listed: 1 = RetrievalStatus_listed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_processed: 2 = 2 satisfies RetrievalStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const processed: 2 = RetrievalStatus_processed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_RetrievalStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_RetrievalStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
