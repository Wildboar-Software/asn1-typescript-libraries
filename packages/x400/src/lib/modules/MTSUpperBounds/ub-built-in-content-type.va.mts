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
 * @summary ub_built_in_content_type
 * @description
 *
 * This argument identifies the type of the content of the message. It identifies the
 * abstract syntax and the encoding rules used. See ITU-T X.411 (1999), §8.2.1.1.1.34.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-built-in-content-type INTEGER ::= 32767
 * ```
 *
 * @constant
 */
export const ub_built_in_content_type: INTEGER = 32767;

/* eslint-enable */
