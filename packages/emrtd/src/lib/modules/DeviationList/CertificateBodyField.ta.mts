/* eslint-disable */
import {
    type INTEGER
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
const CertificateBodyField_generic = 0 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_generic}.
 * @summary CertificateBodyField_generic
 * @constant
 * @type {number}
 */
export
const generic = CertificateBodyField_generic satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate version.
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_version = 1 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_version}.
 * @summary CertificateBodyField_version
 * @constant
 * @type {number}
 */
export
const version = CertificateBodyField_version satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate serial number.
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_serialNumber = 2 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_serialNumber}.
 * @summary CertificateBodyField_serialNumber
 * @constant
 * @type {number}
 */
export
const serialNumber = CertificateBodyField_serialNumber satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate signature algorithm.
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_signature = 3 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_signature}.
 * @summary CertificateBodyField_signature
 * @constant
 * @type {number}
 */
export
const signature = CertificateBodyField_signature satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate issuer.
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuer = 4 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_issuer}.
 * @summary CertificateBodyField_issuer
 * @constant
 * @type {number}
 */
export
const issuer = CertificateBodyField_issuer satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate validity.
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_validity = 5 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_validity}.
 * @summary CertificateBodyField_validity
 * @constant
 * @type {number}
 */
export
const validity = CertificateBodyField_validity satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The certificate subject.
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subject = 6 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subject}.
 * @summary CertificateBodyField_subject
 * @constant
 * @type {number}
 */
export
const subject = CertificateBodyField_subject satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The subject public key.
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectPublicKeyInfo = 7 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subjectPublicKeyInfo}.
 * @summary CertificateBodyField_subjectPublicKeyInfo
 * @constant
 * @type {number}
 */
export
const subjectPublicKeyInfo = CertificateBodyField_subjectPublicKeyInfo satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The issuer unique identifier.
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_issuerUniqueID = 8 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_issuerUniqueID}.
 * @summary CertificateBodyField_issuerUniqueID
 * @constant
 * @type {number}
 */
export
const issuerUniqueID = CertificateBodyField_issuerUniqueID satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * The subject unique identifier.
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const CertificateBodyField_subjectUniqueID = 9 satisfies CertificateBodyField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link CertificateBodyField_subjectUniqueID}.
 * @summary CertificateBodyField_subjectUniqueID
 * @constant
 * @type {number}
 */
export
const subjectUniqueID = CertificateBodyField_subjectUniqueID satisfies CertificateBodyField; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CertificateBodyField = $._decodeInteger;
export const _encode_CertificateBodyField = $._encodeInteger;


/* eslint-enable */
