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
 * @summary ub_identification_code_qualifier
 * @description
 *
 * The Identification Code Qualifier, if present, is a qualifier to the Identification Code
 * of a sender/recipient. This is semantically identical to the "Identification code
 * qualifier" component of the Interchange sender/recipient of the EDIFACT UNB segment. See
 * ITU-T X.435 (1999), §8.1.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-identification-code-qualifier INTEGER ::= 4
 * ```
 *
 * @constant
 */
export const ub_identification_code_qualifier: INTEGER = 4;

/* eslint-enable */
