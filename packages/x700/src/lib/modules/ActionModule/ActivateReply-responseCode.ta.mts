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
 * @summary ActivateReply_responseCode
 * @description
 *
 * GDMO example (X.722 Annex A). Named integers of
 * `ActivateReply.responseCode`: `successResponse` (0) if the
 * example `activate` action succeeded;
 * `serviceProviderErrorResponse` (1) if it failed because of
 * the underlying service provider. ITU-T Rec. X.722 (01/92)
 * [A.7](https://www.itu.int/rec/T-REC-X.722-199201-I), A.10.
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
 * @description
 *
 * Example `activate` action succeeded. ITU-T Rec. X.722
 * (01/92) A.7.
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_successResponse: ActivateReply_responseCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_successResponse
 * @description
 *
 * Example `activate` action succeeded. ITU-T Rec. X.722
 * (01/92) A.7.
 * @constant
 * @type {number}
 */
export const successResponse: ActivateReply_responseCode = ActivateReply_responseCode_successResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @description
 *
 * Example `activate` failed because of a problem with the
 * underlying service provider. ITU-T Rec. X.722 (01/92) A.7.
 * @constant
 * @type {number}
 */
export const ActivateReply_responseCode_serviceProviderErrorResponse: ActivateReply_responseCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ActivateReply_responseCode_serviceProviderErrorResponse
 * @description
 *
 * Example `activate` failed because of a problem with the
 * underlying service provider. ITU-T Rec. X.722 (01/92) A.7.
 * @constant
 * @type {number}
 */
export const serviceProviderErrorResponse: ActivateReply_responseCode = ActivateReply_responseCode_serviceProviderErrorResponse; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ActivateReply_responseCode = $._decodeInteger;


export const _encode_ActivateReply_responseCode = $._encodeInteger;


/* eslint-enable */
