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
 * @summary ub_recipient_reference
 * @description
 *
 * The Recipient Reference identifies a reference meaningful to the recipient’s EDI
 * application. This is semantically identical to the "Recipient’s Reference, Password" of
 * the EDIFACT UNB segment. See ITU-T X.435 (1999), §8.2.3.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-recipient-reference INTEGER ::= 14
 * ```
 *
 * @constant
 */
export const ub_recipient_reference: INTEGER = 14;

/* eslint-enable */
