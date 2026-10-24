/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError
 * @description
 * 
 * The eIM rejected ESipa.ProvideEimPackageResult. The named EID failures map
 * from the status codes in section 5.14.6 Table 21. SGP.32 v1.2, sections
 * 5.14.6 and 6.3.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProvideEimPackageResultResponse-provideEimPackageResultError ::= INTEGER {
 *     eidNotFound(2),
 *     invalidEid(3),
 *     missingEid(4),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ProvideEimPackageResultResponse_provideEimPackageResultError = INTEGER;

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @description
 * No eUICC is known for the supplied EID. Maps from subject 8.1.1, reason 3.9
 * Unknown. SGP.32 v1.2, section 5.14.6, Table 21.
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound
 * @description
 * No eUICC is known for the supplied EID. SGP.32 v1.2, section 5.14.6.
 * @constant
 * @type {number}
 */
export
const eidNotFound: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_eidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @description
 * The EID parameter is invalid. The format is the one in SGP.02 section 2.2.2.
 * Maps from subject 8.1.1, reason 2.1 Invalid. SGP.32 v1.2, section 5.14.6,
 * Table 21.
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid
 * @description
 * The EID parameter is invalid. SGP.32 v1.2, section 5.14.6.
 * @constant
 * @type {number}
 */
export
const invalidEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @description
 * The EID is absent and the eIM cannot identify the eUICC. Maps from subject
 * 8.1.1, reason 2.2 Mandatory Element Missing. SGP.32 v1.2, section 5.14.6,
 * Table 21.
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid
 * @description
 * The EID is absent and the eIM cannot identify the eUICC. SGP.32 v1.2,
 * section 5.14.6.
 * @constant
 * @type {number}
 */
export
const missingEid: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_missingEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on this error and does not further
 * define the condition. Section 6.3.2.7.
 * @constant
 * @type {number}
 */
export
const ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 6.3.2.7.
 * @constant
 * @type {number}
 */
export
const undefinedError: ProvideEimPackageResultResponse_provideEimPackageResultError = ProvideEimPackageResultResponse_provideEimPackageResultError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Decoder<ProvideEimPackageResultResponse_provideEimPackageResultError> = $._decodeInteger;
export const _encode_ProvideEimPackageResultResponse_provideEimPackageResultError: $.ASN1Encoder<ProvideEimPackageResultResponse_provideEimPackageResultError> = $._encodeInteger;


/* eslint-enable */
