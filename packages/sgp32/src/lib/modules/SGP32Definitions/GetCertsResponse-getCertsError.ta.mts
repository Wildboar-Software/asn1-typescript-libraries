/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetCertsResponse_getCertsError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse-getCertsError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetCertsResponse_getCertsError = INTEGER;

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_invalidCiPKId: GetCertsResponse_getCertsError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const invalidCiPKId: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_invalidCiPKId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_undfinedError: GetCertsResponse_getCertsError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const undfinedError: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_undfinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetCertsResponse_getCertsError: $.ASN1Decoder<GetCertsResponse_getCertsError> = $._decodeInteger;
export const _encode_GetCertsResponse_getCertsError: $.ASN1Encoder<GetCertsResponse_getCertsError> = $._encodeInteger;


/* eslint-enable */
