/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransferEimPackageResponse_eimPackageError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageResponse-eimPackageError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TransferEimPackageResponse_eimPackageError = INTEGER;

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_invalidPackageFormat: TransferEimPackageResponse_eimPackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const invalidPackageFormat: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_unknownPackage: TransferEimPackageResponse_eimPackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @constant
 * @type {number}
 */
export
const unknownPackage: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_undefinedError: TransferEimPackageResponse_eimPackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TransferEimPackageResponse_eimPackageError: $.ASN1Decoder<TransferEimPackageResponse_eimPackageError> = $._decodeInteger;
export const _encode_TransferEimPackageResponse_eimPackageError: $.ASN1Encoder<TransferEimPackageResponse_eimPackageError> = $._encodeInteger;


/* eslint-enable */
