/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimPackageResultErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageResultErrorCode  ::=  INTEGER {
 *     invalidPackageFormat(1),
 *     unknownPackage(2),
 *     undefinedError(127) 
 * }
 * ```
 */
export
type EimPackageResultErrorCode = INTEGER;

/**
 * @summary EimPackageResultErrorCode_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_invalidPackageFormat: EimPackageResultErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const invalidPackageFormat: EimPackageResultErrorCode = EimPackageResultErrorCode_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_unknownPackage: EimPackageResultErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 */
export
const unknownPackage: EimPackageResultErrorCode = EimPackageResultErrorCode_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const EimPackageResultErrorCode_undefinedError: EimPackageResultErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EimPackageResultErrorCode = EimPackageResultErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EimPackageResultErrorCode: $.ASN1Decoder<EimPackageResultErrorCode> = $._decodeInteger;
export const _encode_EimPackageResultErrorCode: $.ASN1Encoder<EimPackageResultErrorCode> = $._encodeInteger;


/* eslint-enable */
