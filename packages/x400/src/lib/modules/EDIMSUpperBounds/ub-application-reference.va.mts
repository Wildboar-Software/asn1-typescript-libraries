/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ub_application_reference
 * @description
 *
 * Provides a general reference to an application or function. This is semantically
 * identical to the "Application reference" segment of the EDIFACT UNB segment. See ITU-T
 * X.435 (1999), §8.2.18.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-application-reference INTEGER ::= 14
 * ```
 *
 * @constant
 */
export const ub_application_reference: INTEGER = 14;

/* eslint-enable */
