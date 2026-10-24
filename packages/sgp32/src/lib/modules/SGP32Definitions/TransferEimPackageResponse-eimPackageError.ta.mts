/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransferEimPackageResponse_eimPackageError
 * @description
 * 
 * IPA rejection of ESipa.TransferEimPackage. invalidPackageFormat and
 * unknownPackage are the status codes in section 5.14.4 Table 15a. SGP.32
 * v1.2, sections 5.14.4 and 6.3.3.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageResponse-eimPackageError ::= INTEGER {
 *     invalidPackageFormat(1),
 *     unknownPackage(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type TransferEimPackageResponse_eimPackageError = INTEGER;

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @description
 * The eIM Package contains a Profile download trigger the IPA cannot use. Maps
 * from subject 8.31.1 eIM Package, reason 2.1 Invalid. SGP.32 v1.2, section
 * 5.14.4, Table 15a.
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_invalidPackageFormat: TransferEimPackageResponse_eimPackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @description
 * The Profile download trigger in the eIM Package is invalid. SGP.32 v1.2,
 * section 5.14.4.
 * @constant
 * @type {number}
 */
export
const invalidPackageFormat: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @description
 * The eIM Package is a data object the IPA does not support. Maps from subject
 * 8.31.1 eIM Package, reason 1.1 Unknown. SGP.32 v1.2, section 5.14.4, Table
 * 15a.
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_unknownPackage: TransferEimPackageResponse_eimPackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @description
 * The eIM Package is a data object the IPA does not support. SGP.32 v1.2,
 * section 5.14.4.
 * @constant
 * @type {number}
 */
export
const unknownPackage: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on eimPackageError and does not
 * further define the condition. Section 6.3.3.1.
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_undefinedError: TransferEimPackageResponse_eimPackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 6.3.3.1.
 * @constant
 * @type {number}
 */
export
const undefinedError: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TransferEimPackageResponse_eimPackageError: $.ASN1Decoder<TransferEimPackageResponse_eimPackageError> = $._decodeInteger;
export const _encode_TransferEimPackageResponse_eimPackageError: $.ASN1Encoder<TransferEimPackageResponse_eimPackageError> = $._encodeInteger;


/* eslint-enable */
