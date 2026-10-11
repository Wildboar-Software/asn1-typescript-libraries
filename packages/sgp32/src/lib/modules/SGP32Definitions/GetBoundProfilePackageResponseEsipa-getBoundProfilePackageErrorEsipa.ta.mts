/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageResponseEsipa-getBoundProfilePackageErrorEsipa ::= INTEGER {
 *     euiccSignatureInvalid(1),
 *     confirmationCodeMissing(2),
 *     confirmationCodeRefused(3),
 *     confirmationCodeRetriesExceeded(4),
 *     bppRebindingRefused(5),
 *     deprecated(6), -- this value is no longer used
 *     metadataMismatch(50),
 *     invalidTransactionId(95),
 *     undefinedError(127)
 * }
 * ```
 */
export
type GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = INTEGER;

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing
 * @constant
 * @type {number}
 */
export
const confirmationCodeMissing: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused
 * @constant
 * @type {number}
 */
export
const confirmationCodeRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded
 * @constant
 * @type {number}
 */
export
const confirmationCodeRetriesExceeded: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused
 * @constant
 * @type {number}
 */
export
const bppRebindingRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated
 * @constant
 * @type {number}
 */
export
const deprecated: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch
 * @constant
 * @type {number}
 */
export
const metadataMismatch: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 95; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa: $.ASN1Decoder<GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa> = $._decodeInteger;
export const _encode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa: $.ASN1Encoder<GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa> = $._encodeInteger;


/* eslint-enable */
