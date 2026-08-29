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
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary EncryptedContentSet
 * @description
 *
 * Open set of content types for which encryption is optional.
 * Extensible `{...}`; filled by referencing specs or
 * implementers' agreements.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentSet CONTENT-TYPE ::= {...}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const EncryptedContentSet: CONTENT_TYPE[] = [];

/* eslint-enable */
