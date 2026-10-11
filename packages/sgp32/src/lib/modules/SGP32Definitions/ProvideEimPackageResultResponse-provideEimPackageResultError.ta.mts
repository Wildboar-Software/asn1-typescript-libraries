/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResultResponse-provideEimPackageResultError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProvideEimPackageResultResponse_provideEimPackageResultError = INTEGER;

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @constant
 * @type {number}
 */
export
const eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @constant
 * @type {number}
 */
export
const missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Decoder<ProvideEimPackageResultResponse_provideEimPackageResultError> = $._decodeInteger;
export const _encode_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Encoder<ProvideEimPackageResultResponse_provideEimPackageResultError> = $._encodeInteger;


/* eslint-enable */
