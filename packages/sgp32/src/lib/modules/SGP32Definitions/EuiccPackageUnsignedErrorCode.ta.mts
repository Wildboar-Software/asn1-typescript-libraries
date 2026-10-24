/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccPackageUnsignedErrorCode
 * @description
 * 
 * SGP.32 v1.2 does not further define this type. Section 2.11.2.1 and Annex C
 * define EuiccPackageErrorUnsigned as eimId, eimTransactionId, and
 * associationToken.
 * sizeOverflow(15) and undefinedError(127) appear on EuiccPackageErrorCode in
 * that section; SGP.32 v1.2 does not assign those conditions to this type.
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
 * @description
 * SGP.32 v1.2 does not further define this code. Annex C does not define
 * EuiccPackageUnsignedErrorCode. sizeOverflow(15) on EuiccPackageErrorCode is
 * likewise only enumerated (section 2.11.2.1).
 */
export
const EuiccPackageUnsignedErrorCode_sizeOverflow: EuiccPackageUnsignedErrorCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_sizeOverflow
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 does not further define this code (Annex C; section 2.11.2.1
 * only enumerates sizeOverflow on EuiccPackageErrorCode).
 */
export
const sizeOverflow: EuiccPackageUnsignedErrorCode = EuiccPackageUnsignedErrorCode_sizeOverflow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 does not further define this code. Annex C does not define
 * EuiccPackageUnsignedErrorCode.
 */
export
const EuiccPackageUnsignedErrorCode_undefinedError: EuiccPackageUnsignedErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EuiccPackageUnsignedErrorCode_undefinedError
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 does not further define this code. Annex C does not define
 * EuiccPackageUnsignedErrorCode.
 */
export
const undefinedError: EuiccPackageUnsignedErrorCode = EuiccPackageUnsignedErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EuiccPackageUnsignedErrorCode: $.ASN1Decoder<EuiccPackageUnsignedErrorCode> = $._decodeInteger;
export const _encode_EuiccPackageUnsignedErrorCode: $.ASN1Encoder<EuiccPackageUnsignedErrorCode> = $._encodeInteger;


/* eslint-enable */
