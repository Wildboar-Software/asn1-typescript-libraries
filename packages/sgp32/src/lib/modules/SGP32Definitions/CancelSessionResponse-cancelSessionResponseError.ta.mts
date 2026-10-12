/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponse_cancelSessionResponseError
 * @description
 *
 * Error alternative of ES10b.CancelSession. SGP.32 v1.2 section 5.9.9 defines
 * the function as identical to ES10b.CancelSession in SGP.22 section 5.7.14,
 * and adds that the eUICC revokes any grant to immediately enable a Profile.
 *
 * SGP.32 v1.2, section 5.9.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse-cancelSessionResponseError ::= INTEGER {
 *     invalidTransactionId(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type CancelSessionResponse_cancelSessionResponseError = INTEGER;

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @description
 *
 * The Transaction ID is unknown or differs from the ongoing RSP session.
 * SGP.32 v1.2 section 5.9.9 defines ES10b.CancelSession as identical to SGP.22
 * section 5.7.14. SGP.22 v3.1 section 5.7.14 returns this code in that case.
 * If the session so far is only ES10b.GetEUICCChallenge, that section says the
 * eUICC discards the session.
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @description
 *
 * Transaction ID is unknown or differs from the ongoing RSP session (SGP.22
 * v3.1, section 5.7.14, via SGP.32 v1.2, section 5.9.9).
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on ES10b.CancelSession and does not further
 * define it. The function is identical to SGP.22 section 5.7.14 (SGP.32 v1.2,
 * section 5.9.9). Annex C.
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_undefinedError: CancelSessionResponse_cancelSessionResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @description
 *
 * Listed on ES10b.CancelSession; SGP.32 v1.2 does not further define it (Annex
 * C).
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponse_cancelSessionResponseError: $.ASN1Decoder<CancelSessionResponse_cancelSessionResponseError> = $._decodeInteger;
export const _encode_CancelSessionResponse_cancelSessionResponseError: $.ASN1Encoder<CancelSessionResponse_cancelSessionResponseError> = $._encodeInteger;


/* eslint-enable */
