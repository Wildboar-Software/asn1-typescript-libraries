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
 * @summary ub_entry_classes
 * @description
 *
 * An entry-class comprises a category or categories of entries that represent a particular
 * type of information object. Three principal entry-classes are defined: the
 * Stored-message entry-class, the Message-log entry-class, and the Auto-action- log
 * entry-class. See ITU-T X.413 (1999), §6.3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-entry-classes INTEGER ::= 128
 * ```
 *
 * @constant
 */
export const ub_entry_classes: INTEGER = 128;

/* eslint-enable */
