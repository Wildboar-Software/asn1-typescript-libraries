/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13CertificateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TLS13CertificateType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TLS13CertificateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13CertificateType, encoded as an ASN.1 Element.
 */
export const _encode_TLS13CertificateType = $._encodeEnumerated;


/* eslint-enable */
