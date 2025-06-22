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
 * @summary Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {acceptance(0), user-rejection(1), provider-rejection(2)}
 * ```
 */
export type Result = INTEGER;


/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const acceptance: Result = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const user_rejection: Result = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const provider_rejection: Result = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Result = $._decodeInteger;




export const _encode_Result = $._encodeInteger;


/* eslint-enable */
