/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13CertificateType {
    x509 = 1,
    rawPublicKey = 2,
}

/**
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13CertificateType = _enum_for_TLS13CertificateType;

/**
 * @summary TLS13CertificateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13CertificateType  ::=  ENUMERATED
 * {
 *     x509(1),
 *     rawPublicKey(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13CertificateType = _enum_for_TLS13CertificateType;

/**
 * @summary TLS13CertificateType_x509
 * @constant
 * @type {number}
 */
export
const TLS13CertificateType_x509: TLS13CertificateType = TLS13CertificateType.x509; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x509
 * @constant
 * @type {number}
 */
export
const x509: TLS13CertificateType = TLS13CertificateType.x509; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13CertificateType_rawPublicKey
 * @constant
 * @type {number}
 */
export
const TLS13CertificateType_rawPublicKey: TLS13CertificateType = TLS13CertificateType.rawPublicKey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rawPublicKey
 * @constant
 * @type {number}
 */
export
const rawPublicKey: TLS13CertificateType = TLS13CertificateType.rawPublicKey; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TLS13CertificateType: $.ASN1Decoder<TLS13CertificateType> = $._decodeEnumerated;

export const _encode_TLS13CertificateType: $.ASN1Encoder<TLS13CertificateType> = $._encodeEnumerated;

/* eslint-enable */
