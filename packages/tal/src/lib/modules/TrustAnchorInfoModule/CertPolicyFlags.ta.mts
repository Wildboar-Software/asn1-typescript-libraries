/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertPolicyFlags
 * @description
 *
 * Three Boolean inputs to the certification path validation algorithm,
 * carried in optional `CertPathControls.policyFlags`. When
 * `policyFlags` is absent, the input is `{ FALSE, FALSE, FALSE }`
 * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyFlags  ::=  BIT STRING {
 *     inhibitPolicyMapping    (0),
 *     requireExplicitPolicy   (1),
 *     inhibitAnyPolicy        (2) }
 * ```
 */
export
type CertPolicyFlags = BIT_STRING;

/**
 * @summary CertPolicyFlags_inhibitPolicyMapping
 * @description
 *
 * Bit 0: when TRUE, policy mapping is not permitted. Maps to
 * `initial-policy-mapping-inhibit`
 * ([RFC 5280 §6.1.1](https://datatracker.ietf.org/doc/html/rfc5280#section-6.1.1);
 * [RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
 *
 * @constant
 */
export
const CertPolicyFlags_inhibitPolicyMapping: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary inhibitPolicyMapping
 * @description
 *
 * Short name for bit 0 (`CertPolicyFlags_inhibitPolicyMapping`).
 *
 * @constant
 */
export
const inhibitPolicyMapping: number = CertPolicyFlags_inhibitPolicyMapping; /* SHORT_NAMED_BIT */

/**
 * @summary CertPolicyFlags_requireExplicitPolicy
 * @description
 *
 * Bit 1: when TRUE, the path MUST be valid for at least one policy in
 * `policySet` (every certificate MUST contain an acceptable policy
 * identifier). Maps to `initial-explicit-policy`
 * ([RFC 5280 §6.1.1](https://datatracker.ietf.org/doc/html/rfc5280#section-6.1.1)).
 * MUST be FALSE if `policySet` is absent
 * ([RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
 *
 * @constant
 */
export
const CertPolicyFlags_requireExplicitPolicy: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requireExplicitPolicy
 * @description
 *
 * Short name for bit 1 (`CertPolicyFlags_requireExplicitPolicy`).
 *
 * @constant
 */
export
const requireExplicitPolicy: number = CertPolicyFlags_requireExplicitPolicy; /* SHORT_NAMED_BIT */

/**
 * @summary CertPolicyFlags_inhibitAnyPolicy
 * @description
 *
 * Bit 2: whether the special anyPolicy OID `{ 2 5 29 32 0 }` is an
 * explicit match for other certificate policies. Maps to
 * `initial-any-policy-inhibit`
 * ([RFC 5280 §6.1.1](https://datatracker.ietf.org/doc/html/rfc5280#section-6.1.1);
 * [RFC 5914 §2.5](https://datatracker.ietf.org/doc/html/rfc5914#section-2.5)).
 *
 * @constant
 */
export
const CertPolicyFlags_inhibitAnyPolicy: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary inhibitAnyPolicy
 * @description
 *
 * Short name for bit 2 (`CertPolicyFlags_inhibitAnyPolicy`).
 *
 * @constant
 */
export
const inhibitAnyPolicy: number = CertPolicyFlags_inhibitAnyPolicy; /* SHORT_NAMED_BIT */


export const _decode_CertPolicyFlags = $._decodeBitString;


export const _encode_CertPolicyFlags = $._encodeBitString;


/* eslint-enable */
