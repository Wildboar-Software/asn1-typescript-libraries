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
 * @summary ub_matching_rules
 * @description
 *
 * An important capability of the Message Store abstract-service is the ability to select a
 * set of entries of some entry-class based on assertions concerning attribute-values held
 * by those entries. A matching-rule allows entries to be selected by making a particular
 * assertion concerning their attribute-values. See ITU-T X.413 (1999), §6.3.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-matching-rules INTEGER ::= 1024
 * ```
 *
 * @constant
 */
export const ub_matching_rules: INTEGER = 1024;

/* eslint-enable */
