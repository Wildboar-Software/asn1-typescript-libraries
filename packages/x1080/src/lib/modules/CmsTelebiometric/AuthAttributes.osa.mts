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
 * @summary AuthAttributes
 * @description
 *
 * Open set of attributes under authentication on
 * `AuthEnvelopedData`. Extensible `{...}`; filled by referencing
 * specs or implementers' agreements.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.4.1.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttributes ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const AuthAttributes: ATTRIBUTE[] = [];

/* eslint-enable */
