/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { id_pkcs_9 } from '../CmsTelebiometric/id-pkcs-9.va.mjs';

/**
 * @summary id_contentType
 * @description
 *
 * OID of the `contentType` signed attribute: `{id-pkcs-9 3}`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentType         OBJECT IDENTIFIER ::= { id-pkcs-9 3 }
 * ```
 *
 * @constant
 */
export const id_contentType: OBJECT_IDENTIFIER = _OID.fromParts([3], id_pkcs_9);

/* eslint-enable */
