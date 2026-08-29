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
import { id_x1080_0_Cont } from '../Pbact-access/id-x1080-0-Cont.va.mjs';

/**
 * @summary id_modifyResult
 * @description
 *
 * `{id-x1080-0-Cont modifyResult(12)}` — CMS content type for a
 * modify result.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [Annex A](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-modifyResult      OBJECT IDENTIFIER ::= { id-x1080-0-Cont modifyResult(12) }
 * ```
 *
 * @constant
 */
export const id_modifyResult: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* modifyResult */ 12],
    id_x1080_0_Cont
);

/* eslint-enable */
