/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetEimPackageResponse_eimPackageError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimPackageResponse-eimPackageError ::= INTEGER {
 *     noEimPackageAvailable(1),
 *     eidNotFound(2),
 *     invalidEid(3),
 *     missingEid(4),
 *     undefinedError(127)
 * }
 * ```
 */
export
type GetEimPackageResponse_eimPackageError = INTEGER;

/**
 * @summary GetEimPackageResponse_eimPackageError_noEimPackageAvailable
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_noEimPackageAvailable: GetEimPackageResponse_eimPackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_noEimPackageAvailable
 * @constant
 * @type {number}
 */
export
const noEimPackageAvailable: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_noEimPackageAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_eidNotFound: GetEimPackageResponse_eimPackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @constant
 * @type {number}
 */
export
const eidNotFound: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_invalidEid: GetEimPackageResponse_eimPackageError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_missingEid: GetEimPackageResponse_eimPackageError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @constant
 * @type {number}
 */
export
const missingEid: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_undefinedError: GetEimPackageResponse_eimPackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: GetEimPackageResponse_eimPackageError = GetEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetEimPackageResponse_eimPackageError: $.ASN1Decoder<GetEimPackageResponse_eimPackageError> = $._decodeInteger;
export const _encode_GetEimPackageResponse_eimPackageError: $.ASN1Encoder<GetEimPackageResponse_eimPackageError> = $._encodeInteger;


/* eslint-enable */
