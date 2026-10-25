/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SignatureStatus
 * @description
 *
 * Defined in ITU-T X.413 (1999) (§11).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureStatus  ::=  INTEGER {
 *   signature-absent(0), verification-in-progress(1), verification-succeeded(2),
 *   verification-not-possible(3), content-converted(4), signature-encrypted(5),
 *   algorithm-not-supported(6), certificate-not-obtainable(7),
 *   verification-failed(8)}
 * ```
 */
export type SignatureStatus = INTEGER;

/**
 * @summary SignatureStatus_signature_absent
 * @constant
 * @type {number}
 */
export const SignatureStatus_signature_absent = 0 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_signature_absent
 * @constant
 * @type {number}
 */
export const signature_absent = SignatureStatus_signature_absent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_in_progress
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_in_progress = 1 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_in_progress
 * @constant
 * @type {number}
 */
export const verification_in_progress = SignatureStatus_verification_in_progress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_succeeded
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_succeeded = 2 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_succeeded
 * @constant
 * @type {number}
 */
export const verification_succeeded = SignatureStatus_verification_succeeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_not_possible
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_not_possible = 3 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_not_possible
 * @constant
 * @type {number}
 */
export const verification_not_possible = SignatureStatus_verification_not_possible; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_content_converted
 * @constant
 * @type {number}
 */
export const SignatureStatus_content_converted = 4 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_content_converted
 * @constant
 * @type {number}
 */
export const content_converted = SignatureStatus_content_converted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_signature_encrypted
 * @constant
 * @type {number}
 */
export const SignatureStatus_signature_encrypted = 5 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_signature_encrypted
 * @constant
 * @type {number}
 */
export const signature_encrypted = SignatureStatus_signature_encrypted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const SignatureStatus_algorithm_not_supported = 6 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const algorithm_not_supported = SignatureStatus_algorithm_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_certificate_not_obtainable
 * @constant
 * @type {number}
 */
export const SignatureStatus_certificate_not_obtainable = 7 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_certificate_not_obtainable
 * @constant
 * @type {number}
 */
export const certificate_not_obtainable = SignatureStatus_certificate_not_obtainable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_failed
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_failed = 8 satisfies SignatureStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SignatureStatus_verification_failed
 * @constant
 * @type {number}
 */
export const verification_failed = SignatureStatus_verification_failed; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_SignatureStatus = $._decodeInteger;


export const _encode_SignatureStatus = $._encodeInteger;


/* eslint-enable */
