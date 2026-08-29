/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';

/**
 * @summary UnsignedAttributes
 * @description
 *
 * Open set of unsigned attributes on `SignerInfo`, as in RFC
 * 5652. Extensible `{...}`; filled by referencing specs or
 * implementers' agreements.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedAttributes ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnsignedAttributes: ATTRIBUTE[] = [];

/* eslint-enable */
