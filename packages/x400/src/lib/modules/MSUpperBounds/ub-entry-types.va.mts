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
 * @summary ub_entry_types
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_entry_types`. Every entry belongs to one of the
 * entry-types defined below. EntryType ::= INTEGER { delivered-message (0),
 * delivered-report (1), returned-content (2), -- 1994 extensions -- submitted-message
 * (3), submitted-probe (4), draft-message (5), auto-action-event (6) } A
 * delivered-message entry is created by the performance of the Message-delivery
 * abstract-operation of the Delivery Port, and contains the information… See ITU-T X.413
 * (1999), §6.3.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-entry-types INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_entry_types: INTEGER = 16;

/* eslint-enable */
