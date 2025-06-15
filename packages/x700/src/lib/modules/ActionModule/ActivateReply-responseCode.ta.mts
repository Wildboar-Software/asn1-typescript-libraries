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

/**
 * @summary ActivateReply_responseCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivateReply-responseCode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ActivateReply_responseCode = INTEGER;

/**
 * @summary ActivateReply_responseCode_successResponse
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_successResponse: ActivateReply_responseCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_successResponse
 * @constant
 * @type {number}
 */
export const successResponse: ActivateReply_responseCode = ActivateReply_responseCode_successResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_serviceProviderErrorResponse: ActivateReply_responseCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @constant
 * @type {number}
 */
export const serviceProviderErrorResponse: ActivateReply_responseCode = ActivateReply_responseCode_serviceProviderErrorResponse; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ActivateReply_responseCode = $._decodeInteger;


export const _encode_ActivateReply_responseCode = $._encodeInteger;


/* eslint-enable */
