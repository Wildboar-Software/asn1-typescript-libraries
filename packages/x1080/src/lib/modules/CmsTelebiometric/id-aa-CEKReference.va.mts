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
import { id_aa } from '../CmsTelebiometric/id-aa.va.mjs';

/**
 * @summary id_aa_CEKReference
 * @description
 *
 * OID of `aa-CEKReference`: `{id-aa 30}`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.5.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-CEKReference     OBJECT IDENTIFIER ::= { id-aa 30 }
 * ```
 *
 * @constant
 */
export const id_aa_CEKReference: OBJECT_IDENTIFIER = _OID.fromParts([30], id_aa);

/* eslint-enable */
