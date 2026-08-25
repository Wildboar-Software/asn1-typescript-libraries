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
 * @summary ub_processing_priority_code
 * @description
 *
 * Indicates the EDI application Processing Priority Code. This is semantically identical
 * to the "Processing priority code" in the EDIFACT UNB segment. See ITU-T X.435 (1999),
 * §8.2.3.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-processing-priority-code INTEGER ::= 1
 * ```
 *
 * @constant
 */
export const ub_processing_priority_code: INTEGER = 1;

/* eslint-enable */
