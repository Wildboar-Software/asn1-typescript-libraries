/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccPackageErrorCode
 * @description
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
 */
export
const EuiccPackageErrorCode_invalidEid: EuiccPackageErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_invalidEid
 * @constant
 * @type {number}
 */
export
const invalidEid: EuiccPackageErrorCode = EuiccPackageErrorCode_invalidEid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_replayError: EuiccPackageErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_replayError
 * @constant
 * @type {number}
 */
export
const replayError: EuiccPackageErrorCode = EuiccPackageErrorCode_replayError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_counterValueOutOfRange: EuiccPackageErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: EuiccPackageErrorCode = EuiccPackageErrorCode_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_sizeOverflow: EuiccPackageErrorCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const sizeOverflow: EuiccPackageErrorCode = EuiccPackageErrorCode_sizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_ecallActive: EuiccPackageErrorCode = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const ecallActive: EuiccPackageErrorCode = EuiccPackageErrorCode_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccPackageErrorCode_undefinedError: EuiccPackageErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccPackageErrorCode = EuiccPackageErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccPackageErrorCode: $.ASN1Decoder<EuiccPackageErrorCode> = $._decodeInteger;
export const _encode_EuiccPackageErrorCode: $.ASN1Encoder<EuiccPackageErrorCode> = $._encodeInteger;


/* eslint-enable */
