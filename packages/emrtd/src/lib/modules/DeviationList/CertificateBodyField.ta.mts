/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateBodyField
 * @description
 *
 * A component of the certificate body, used by `CertField` to point at a
 * coding error. The names follow the X.509 certificate body. The
 * specification does not further define `generic`.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateBodyField  ::=  INTEGER {
 *     generic(0),
 *     version(1),
 *     serialNumber(2),
 *     signature(3),
 *     issuer(4),
 *     validity(5),
 *     subject(6),
 *     subjectPublicKeyInfo(7),
 *     issuerUniqueID(8),
 *     subjectUniqueID(9)
 * }
 * ```
 */
export
type CertificateBodyField = INTEGER;

/**
 * Assigned, and not defined further.
 * @summary CertificateBodyField_generic
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_generic: CertificateBodyField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_generic}.
 * @summary CertificateBodyField_generic
 * @constant
 * @type {number}
 */
export
const generic: CertificateBodyField = CertificateBodyField_generic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate version.
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_version: CertificateBodyField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_version}.
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const version: CertificateBodyField = CertificateBodyField_version; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate serial number.
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_serialNumber: CertificateBodyField = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_serialNumber}.
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const serialNumber: CertificateBodyField = CertificateBodyField_serialNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate signature algorithm.
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_signature: CertificateBodyField = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_signature}.
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const signature: CertificateBodyField = CertificateBodyField_signature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate issuer.
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuer: CertificateBodyField = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_issuer}.
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const issuer: CertificateBodyField = CertificateBodyField_issuer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate validity.
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_validity: CertificateBodyField = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_validity}.
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const validity: CertificateBodyField = CertificateBodyField_validity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate subject.
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subject: CertificateBodyField = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subject}.
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const subject: CertificateBodyField = CertificateBodyField_subject; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The subject public key.
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectPublicKeyInfo: CertificateBodyField = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subjectPublicKeyInfo}.
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const subjectPublicKeyInfo: CertificateBodyField = CertificateBodyField_subjectPublicKeyInfo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The issuer unique identifier.
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuerUniqueID: CertificateBodyField = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_issuerUniqueID}.
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const issuerUniqueID: CertificateBodyField = CertificateBodyField_issuerUniqueID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The subject unique identifier.
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectUniqueID: CertificateBodyField = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subjectUniqueID}.
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const subjectUniqueID: CertificateBodyField = CertificateBodyField_subjectUniqueID; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CertificateBodyField = $._decodeInteger;
export const _encode_CertificateBodyField = $._encodeInteger;


/* eslint-enable */
