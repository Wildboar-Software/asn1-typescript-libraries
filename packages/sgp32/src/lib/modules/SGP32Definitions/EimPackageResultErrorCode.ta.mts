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
 * Error codes inside EimPackageResultResponseError (SGP.32 v1.2, section
 * 6.3.2.7). TransferEimPackageResponse.eimPackageError uses the same names and
 * numbers (section 6.3.3.1).
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
 * @description
 * The IPA returns this when a Profile download trigger has an invalid format,
 * data the IPA needs for the download is missing, or the Activation Code
 * format is invalid (SGP.32 v1.2, section 3.2). Table 15a maps status 8.31.1
 * reason 2.1, "invalid Profile download trigger", to this code for
 * TransferEimPackage (section 5.14.4).
 */
export
const EimPackageResultErrorCode_invalidPackageFormat: EimPackageResultErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_invalidPackageFormat
 * @constant
 * @type {number}
 * @description
 * Invalid Profile download trigger, missing download data, or an invalid
 * Activation Code (SGP.32 v1.2, sections 3.2 and 5.14.4).
 */
export
const invalidPackageFormat: EimPackageResultErrorCode = EimPackageResultErrorCode_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 * @description
 * The eIM Package contains a data object other than the four objects in Table
 * 14, so the IPA does not support it (SGP.32 v1.2, section 5.14.4). Table 15a
 * maps status 8.31.1 reason 1.1 Unknown to this code.
 */
export
const EimPackageResultErrorCode_unknownPackage: EimPackageResultErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_unknownPackage
 * @constant
 * @type {number}
 * @description
 * The eIM Package data object is outside Table 14 and is not supported by the
 * IPA (SGP.32 v1.2, section 5.14.4).
 */
export
const unknownPackage: EimPackageResultErrorCode = EimPackageResultErrorCode_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists undefinedError(127) in section 6.3.2.7 and does not
 * further define the condition that produces it. Annex C repeats the same
 * enumeration.
 */
export
const EimPackageResultErrorCode_undefinedError: EimPackageResultErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EimPackageResultErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 6.3.2.7 and does not further define
 * the condition that produces it.
 */
export
const undefinedError: EimPackageResultErrorCode = EimPackageResultErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EimPackageResultErrorCode: $.ASN1Decoder<EimPackageResultErrorCode> = $._decodeInteger;
export const _encode_EimPackageResultErrorCode: $.ASN1Encoder<EimPackageResultErrorCode> = $._encodeInteger;


/* eslint-enable */
