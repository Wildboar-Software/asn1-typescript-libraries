/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccPackageErrorCode
 * @description
 * 
 * Signed eUICC Package error returned in EuiccPackageErrorDataSigned after the
 * eIM public key has been found and the signature has been checked (SGP.32
 * v1.2, sections 2.11.2.1 and 5.9.1). The eUICC does not store this error
 * result. Unknown eimId and an invalid signature use the unsigned error.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorCode  ::=  INTEGER {
 *     invalidEid(3),
 *     replayError(4),
 *     counterValueOutOfRange(6),
 *     sizeOverflow(15),
 *     ecallActive(104),
 *     undefinedError(127)}
 * ```
 */
export
type EuiccPackageErrorCode = INTEGER;

/**
 * @summary EuiccPackageErrorCode_invalidEid
 * @constant
 * @type {number}
 * @description
 * eidValue in the signed package does not match this eUICC's EID (SGP.32 v1.2,
 * section 5.9.1). The eUICC returns a signed error and does not store it.
 */
export
const EuiccPackageErrorCode_invalidEid: EuiccPackageErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_invalidEid
 * @constant
 * @type {number}
 * @description
 * eidValue does not match this eUICC's EID (SGP.32 v1.2, section 5.9.1).
 */
export
const invalidEid: EuiccPackageErrorCode = EuiccPackageErrorCode_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 * @description
 * counterValue is less than or equal to the highest counter already stored for
 * this Associated eIM (SGP.32 v1.2, section 5.9.1). The check requires a
 * strictly greater counter.
 */
export
const EuiccPackageErrorCode_replayError: EuiccPackageErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 * @description
 * counterValue is less than or equal to the counter stored for this eIM
 * (SGP.32 v1.2, section 5.9.1).
 */
export
const replayError: EuiccPackageErrorCode = EuiccPackageErrorCode_replayError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 * @description
 * counterValue exceeds the maximum the eUICC implementation can store (SGP.32
 * v1.2, section 2.11.1.1). The implementation handles at least 8388607
 * (0x7FFFFF) inclusive.
 */
export
const EuiccPackageErrorCode_counterValueOutOfRange: EuiccPackageErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 * @description
 * counterValue exceeds the maximum this eUICC can store (SGP.32 v1.2, section
 * 2.11.1.1).
 */
export
const counterValueOutOfRange: EuiccPackageErrorCode = EuiccPackageErrorCode_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists sizeOverflow(15) in section 2.11.2.1 and does not further
 * define the condition that produces it. Annex C repeats the enumeration.
 */
export
const EuiccPackageErrorCode_sizeOverflow: EuiccPackageErrorCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 2.11.2.1 and does not further define
 * the condition that produces it.
 */
export
const sizeOverflow: EuiccPackageErrorCode = EuiccPackageErrorCode_sizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so the eUICC rejects the
 * EuiccPackageRequest (SGP.32 v1.2, section 2.11.2.1). The same code rejects
 * EuiccMemoryResetRequest and ExecuteFallbackMechanismRequest.
 */
export
const EuiccPackageErrorCode_ecallActive: EuiccPackageErrorCode = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 * @description
 * The Emergency Profile is enabled, so the eUICC Package is rejected (SGP.32
 * v1.2, section 2.11.2.1).
 */
export
const ecallActive: EuiccPackageErrorCode = EuiccPackageErrorCode_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on EuiccPackageErrorCode in section
 * 2.11.2.1 and does not further define the condition that produces it.
 */
export
const EuiccPackageErrorCode_undefinedError: EuiccPackageErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 2.11.2.1 and does not further define
 * the condition that produces it.
 */
export
const undefinedError: EuiccPackageErrorCode = EuiccPackageErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccPackageErrorCode: $.ASN1Decoder<EuiccPackageErrorCode> = $._decodeInteger;
export const _encode_EuiccPackageErrorCode: $.ASN1Encoder<EuiccPackageErrorCode> = $._encodeInteger;


/* eslint-enable */
