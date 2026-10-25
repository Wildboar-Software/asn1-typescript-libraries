/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetEimPackageResponse_eimPackageError
 * @description
 * 
 * ESipa.GetEimPackage failure. `noEimPackageAvailable`, `eidNotFound`,
 * `invalidEid`, and `missingEid` are defined in section 5.14.5 Table 18.
 * SGP.32 v1.2 section 6.3.2.6 names `undefinedError(127)` and does not further
 * define it. Annex C lists that name only.
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
 * @description
 * No pending eIM Package for the EID. Maps from status 8.1.1 EID / 3.7
 * Unavailable. SGP.32 v1.2, section 5.14.5 Table 18.
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_noEimPackageAvailable = 1 satisfies GetEimPackageResponse_eimPackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_noEimPackageAvailable
 * @description
 * No pending eIM Package for the EID. SGP.32 v1.2, section 5.14.5.
 * @constant
 * @type {number}
 */
export
const noEimPackageAvailable = GetEimPackageResponse_eimPackageError_noEimPackageAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @description
 * No eUICC was found with the specified EID. Maps from status 8.1.1 EID / 3.9
 * Unknown. SGP.32 v1.2, section 5.14.5 Table 18.
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_eidNotFound = 2 satisfies GetEimPackageResponse_eimPackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_eidNotFound
 * @description
 * No eUICC was found with the specified EID. SGP.32 v1.2, section 5.14.5.
 * @constant
 * @type {number}
 */
export
const eidNotFound = GetEimPackageResponse_eimPackageError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @description
 * The EID parameter is invalid. The format is defined in SGP.02 section 2.2.2.
 * Maps from status 8.1.1 EID / 2.1 Invalid. SGP.32 v1.2, section 5.14.5 Table
 * 18.
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_invalidEid = 3 satisfies GetEimPackageResponse_eimPackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_invalidEid
 * @description
 * The EID parameter is invalid. Format: SGP.02 section 2.2.2. SGP.32 v1.2,
 * section 5.14.5.
 * @constant
 * @type {number}
 */
export
const invalidEid = GetEimPackageResponse_eimPackageError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @description
 * The mandatory EID parameter is missing. Maps from status 8.1.1 EID / 2.2
 * Mandatory Element Missing. SGP.32 v1.2, section 5.14.5 Table 18.
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_missingEid = 4 satisfies GetEimPackageResponse_eimPackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_missingEid
 * @description
 * The mandatory EID parameter is missing. SGP.32 v1.2, section 5.14.5.
 * @constant
 * @type {number}
 */
export
const missingEid = GetEimPackageResponse_eimPackageError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @description
 * SGP.32 v1.2 section 6.3.2.6 names `undefinedError(127)` and does not further
 * define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const GetEimPackageResponse_eimPackageError_undefinedError = 127 satisfies GetEimPackageResponse_eimPackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetEimPackageResponse_eimPackageError_undefinedError
 * @description
 * SGP.32 v1.2 section 6.3.2.6 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const undefinedError = GetEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetEimPackageResponse_eimPackageError: $.ASN1Decoder<GetEimPackageResponse_eimPackageError> = $._decodeInteger;
export const _encode_GetEimPackageResponse_eimPackageError: $.ASN1Encoder<GetEimPackageResponse_eimPackageError> = $._encodeInteger;


/* eslint-enable */
