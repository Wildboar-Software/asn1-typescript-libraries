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
 * @summary ub_auto_forward_comment
 * @description
 *
 * The Auto-forward Comment non-receipt field (C) is information pre-supplied for this
 * purpose by the NRN's originator. It comprises a Printable String[ of from zero to a
 * prescribed number of characters (see annex L), chosen from the Printable String
 * character set|]. See ITU-T X.420 (1999), §8.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-auto-forward-comment INTEGER ::= 256
 * ```
 *
 * @constant
 */
export const ub_auto_forward_comment: INTEGER = 256;

/* eslint-enable */
