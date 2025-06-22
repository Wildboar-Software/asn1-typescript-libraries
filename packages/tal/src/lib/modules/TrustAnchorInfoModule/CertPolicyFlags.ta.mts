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
 * @constant
 */
export
const CertPolicyFlags_inhibitPolicyMapping: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary inhibitPolicyMapping
 * @constant
 */
export
const inhibitPolicyMapping: number = CertPolicyFlags_inhibitPolicyMapping; /* SHORT_NAMED_BIT */

/**
 * @summary CertPolicyFlags_requireExplicitPolicy
 * @constant
 */
export
const CertPolicyFlags_requireExplicitPolicy: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requireExplicitPolicy
 * @constant
 */
export
const requireExplicitPolicy: number = CertPolicyFlags_requireExplicitPolicy; /* SHORT_NAMED_BIT */

/**
 * @summary CertPolicyFlags_inhibitAnyPolicy
 * @constant
 */
export
const CertPolicyFlags_inhibitAnyPolicy: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary inhibitAnyPolicy
 * @constant
 */
export
const inhibitAnyPolicy: number = CertPolicyFlags_inhibitAnyPolicy; /* SHORT_NAMED_BIT */


export const _decode_CertPolicyFlags = $._decodeBitString;


export const _encode_CertPolicyFlags = $._encodeBitString;


/* eslint-enable */
