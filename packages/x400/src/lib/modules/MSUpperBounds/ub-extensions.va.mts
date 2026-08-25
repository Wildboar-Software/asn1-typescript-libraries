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
 * @summary ub_extensions
 * @description
 *
 * This Service Definition defines MS operation regardless of the content-types of the
 * messages present. See ITU-T X.413 (1999), §6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-extensions INTEGER ::= 32
 * ```
 *
 * @constant
 */
export const ub_extensions: INTEGER = 32;

/* eslint-enable */
