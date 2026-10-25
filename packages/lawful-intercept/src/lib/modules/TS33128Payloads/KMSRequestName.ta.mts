/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KMSRequestName
 * @description
 * 
 * Indicates whether the HTTP POST operation is for KMS Initialize, KMS
 * KeyProvision, KMS CertCache, KMS Cert, KMS Discovery Lookup or KMS Redirect
 * Upload.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_KMSRequestName {
    kMSInitialize = 1,
    kMSKeyProvision = 2,
    kMSCert = 3,
    kMSCertCache = 4,
    kMSLookup = 5,
    kMSRedirectUpload = 6,
}

/**
 * @summary KMSRequestName
 * @description
 * 
 * Indicates whether the HTTP POST operation is for KMS Initialize, KMS
 * KeyProvision, KMS CertCache, KMS Cert, KMS Discovery Lookup or KMS Redirect
 * Upload.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type KMSRequestName = _enum_for_KMSRequestName;

/**
 * @summary KMSRequestName
 * @description
 * 
 * Indicates whether the HTTP POST operation is for KMS Initialize, KMS
 * KeyProvision, KMS CertCache, KMS Cert, KMS Discovery Lookup or KMS Redirect
 * Upload.
 *
 * 3GPP TS 33.128, clause 7.20.2.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMSRequestName  ::=  ENUMERATED
 * {
 *     kMSInitialize(1),
 *     kMSKeyProvision(2),
 *     kMSCert(3),
 *     kMSCertCache(4),
 *     kMSLookup(5),
 *     kMSRedirectUpload(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const KMSRequestName = _enum_for_KMSRequestName;

/**
 * @summary KMSRequestName_kMSInitialize
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSInitialize = KMSRequestName.kMSInitialize; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSInitialize
 * @constant
 * @type {number}
 */
export
const kMSInitialize = KMSRequestName.kMSInitialize; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSKeyProvision
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSKeyProvision = KMSRequestName.kMSKeyProvision; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSKeyProvision
 * @constant
 * @type {number}
 */
export
const kMSKeyProvision = KMSRequestName.kMSKeyProvision; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSCert
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSCert = KMSRequestName.kMSCert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSCert
 * @constant
 * @type {number}
 */
export
const kMSCert = KMSRequestName.kMSCert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSCertCache
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSCertCache = KMSRequestName.kMSCertCache; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSCertCache
 * @constant
 * @type {number}
 */
export
const kMSCertCache = KMSRequestName.kMSCertCache; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSLookup
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSLookup = KMSRequestName.kMSLookup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSLookup
 * @constant
 * @type {number}
 */
export
const kMSLookup = KMSRequestName.kMSLookup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KMSRequestName_kMSRedirectUpload
 * @constant
 * @type {number}
 */
export
const KMSRequestName_kMSRedirectUpload = KMSRequestName.kMSRedirectUpload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary kMSRedirectUpload
 * @constant
 * @type {number}
 */
export
const kMSRedirectUpload = KMSRequestName.kMSRedirectUpload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_KMSRequestName: $.ASN1Decoder<KMSRequestName> = $._decodeEnumerated;
export const _encode_KMSRequestName: $.ASN1Encoder<KMSRequestName> = $._encodeEnumerated;


/* eslint-enable */
