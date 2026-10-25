/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetCertsResponse_getCertsError
 * @description
 * 
 * ES10b.GetCerts error. SGP.32 v1.2 section 5.9.10 names `invalidCiPKId(1)`
 * and `undfinedError(127)` and does not further define the conditions. The
 * spelling `undfinedError` is the spelling in the specification. Annex C lists
 * the names only.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse-getCertsError ::= INTEGER {
 *     invalidCiPKId(1),
 *     undfinedError(127)
 * }
 * ```
 */
export
type GetCertsResponse_getCertsError = INTEGER;

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @description
 * SGP.32 v1.2 section 5.9.10 names `invalidCiPKId(1)` and does not further
 * define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_invalidCiPKId: 1 = 1 satisfies GetCertsResponse_getCertsError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @description
 * SGP.32 v1.2 section 5.9.10 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const invalidCiPKId: 1 = GetCertsResponse_getCertsError_invalidCiPKId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @description
 * SGP.32 v1.2 section 5.9.10 names `undfinedError(127)` and does not further
 * define the condition that produces it. The spelling is the spelling in the
 * specification. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_undfinedError: 127 = 127 satisfies GetCertsResponse_getCertsError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @description
 * SGP.32 v1.2 section 5.9.10 names this code, spelled `undfinedError`, and
 * does not further define the condition. Annex C.
 * @constant
 * @type {number}
 */
export
const undfinedError: 127 = GetCertsResponse_getCertsError_undfinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetCertsResponse_getCertsError: $.ASN1Decoder<GetCertsResponse_getCertsError> = $._decodeInteger;
export const _encode_GetCertsResponse_getCertsError: $.ASN1Encoder<GetCertsResponse_getCertsError> = $._encodeInteger;


/* eslint-enable */
