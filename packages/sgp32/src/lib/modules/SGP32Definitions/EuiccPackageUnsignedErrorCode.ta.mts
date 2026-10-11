/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccPackageUnsignedErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageUnsignedErrorCode  ::=  INTEGER {
 *     sizeOverflow(15),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EuiccPackageUnsignedErrorCode = INTEGER;

/**
 * @summary EuiccPackageUnsignedErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const EuiccPackageUnsignedErrorCode_sizeOverflow: EuiccPackageUnsignedErrorCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_sizeOverflow
 * @constant
 * @type {number}
 */
export
const sizeOverflow: EuiccPackageUnsignedErrorCode = EuiccPackageUnsignedErrorCode_sizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const EuiccPackageUnsignedErrorCode_undefinedError: EuiccPackageUnsignedErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EuiccPackageUnsignedErrorCode = EuiccPackageUnsignedErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccPackageUnsignedErrorCode: $.ASN1Decoder<EuiccPackageUnsignedErrorCode> = $._decodeInteger;
export const _encode_EuiccPackageUnsignedErrorCode: $.ASN1Encoder<EuiccPackageUnsignedErrorCode> = $._encodeInteger;


/* eslint-enable */
