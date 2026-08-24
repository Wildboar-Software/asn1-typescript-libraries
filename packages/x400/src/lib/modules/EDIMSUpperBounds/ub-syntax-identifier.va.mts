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
 * @summary ub_syntax_identifier
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_syntax_identifier`. Indicates the syntax used. This is
 * semantically identical to the "Syntax identifier" of the EDIFACT UNB segment. See
 * ITU-T X.435 (1999), §8.2.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-syntax-identifier INTEGER ::= 4
 * ```
 *
 * @constant
 */
export const ub_syntax_identifier: INTEGER = 4;

/* eslint-enable */
