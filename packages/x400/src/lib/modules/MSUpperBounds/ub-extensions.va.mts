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
 * ASN.1 upper-bound INTEGER `ub_extensions`. This Service Definition defines MS
 * operation regardless of the content-types of the messages present. To accommodate the
 * additional functions which may be required to support specific content-types, and
 * other extensions, the following information object class is defined: MS-EXTENSION ::=
 * TYPE-IDENTIFIER This information object class has two fields: an identifier field (an
 * Object Identifier), and a type field… See ITU-T X.413 (1999), §6.6.
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
