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
 * @summary ub_recipients
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_recipients`. The Recipients field identifies the user(s)
 * and distribution lists (DLs) who are the (preferred) recipient(s) of the EDIM. It
 * comprises a set of Recipients subfields, one for each recipient. See ITU-T X.435
 * (1999), §8.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-recipients INTEGER ::= 32767
 * ```
 *
 * @constant
 */
export const ub_recipients: INTEGER = 32767;

/* eslint-enable */
