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
import { id_ct } from '../CmsTelebiometric/id-ct.va.mjs';

/**
 * @summary id_ct_authEnvelopedData
 * @description
 *
 * CMS `ct-authEnvelopedData` content-type OID (`{id-ct 23}`).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.4, B.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-authEnvelopedData OBJECT IDENTIFIER ::= { id-ct 23 }
 * ```
 *
 * @constant
 */
export const id_ct_authEnvelopedData: OBJECT_IDENTIFIER = _OID.fromParts([23], id_ct);

/* eslint-enable */
