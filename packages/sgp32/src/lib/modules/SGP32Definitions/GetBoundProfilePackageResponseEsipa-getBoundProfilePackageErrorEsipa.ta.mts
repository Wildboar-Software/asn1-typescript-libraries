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
 * ESipa.GetBoundProfilePackage error. Except for `metadataMismatch`, these
 * codes are the same as the same-named errors of ES9+'.GetBoundProfilePackage,
 * as defined in SGP.22. Integer 6 is `downloadOrderExpired` in SGP.32 v1.2
 * section 6.3.2.3. `metadataMismatch` is defined in section 5.14.2 Table 11a.
 * SGP.32 v1.2, sections 5.14.2 and 6.3.2.3.
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
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const confirmationCodeMissing: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const confirmationCodeRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const confirmationCodeRetriesExceeded: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const bppRebindingRefused: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated
 * @description
 * Integer 6. SGP.32 v1.2 section 6.3.2.3 names this value
 * `downloadOrderExpired` and includes it among the errors that are the same as
 * ES9+'.GetBoundProfilePackage, as defined in SGP.22. SGP.32 v1.2 does not
 * further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated
 * @description
 * Integer 6. SGP.32 v1.2 section 6.3.2.3 names it
 * `downloadOrderExpired` and does not further define the condition.
 * @constant
 * @type {number}
 */
export
const deprecated: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch
 * @description
 * Profile Metadata in the Bound Profile Package does not match the Profile
 * Metadata received in the ES9+'.AuthenticateClient response. The eIM performs
 * this check when it verified metadata because the IPA has
 * `eimProfileMetadataVerification`. Maps from status 8.2.9 Profile Metadata /
 * 3.11 Value has Changed. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch
 * @description
 * Bound Profile Package metadata does not match the metadata from
 * ES9+'.AuthenticateClient. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const metadataMismatch: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId
 * @description
 * SGP.32 v1.2 section 5.14.2 states that this code is the same as the
 * same-named error of ES9+'.GetBoundProfilePackage, as defined in SGP.22.
 * SGP.32 v1.2 does not further define the condition that produces it.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 95; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId
 * @description
 * Same as the same-named ES9+'.GetBoundProfilePackage error, as defined in
 * SGP.22. SGP.32 v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError
 * @description
 * SGP.22 v3.1 section 6.6.1.1 maps `undefinedError(127)` to the status code
 * "Function provider - Execution Error". SGP.32 v1.2 section 5.14.2 includes
 * this code among those that are the same as ES9+'.GetBoundProfilePackage.
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError
 * @description
 * Same as ES9+'.GetBoundProfilePackage `undefinedError(127)`. SGP.22 v3.1
 * section 6.6.1.1 maps it to "Function provider - Execution Error". SGP.32
 * v1.2, section 5.14.2.
 * @constant
 * @type {number}
 */
export
const undefinedError: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa = GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa: $.ASN1Decoder<GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa> = $._decodeInteger;
export const _encode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa: $.ASN1Encoder<GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa> = $._encodeInteger;


/* eslint-enable */
