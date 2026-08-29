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
import { nloi } from '../NLM/nloi.va.mjs';

/**
 * @summary agoi
 * @description
 *
 * Attribute-group arc. Annex A allocates `{nloi attributeGroup(8)}` but lists
 * no NLM-defined groups (state/counters come from DMI/GMI).
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * agoi OBJECT IDENTIFIER ::= {nloi attributeGroup(8)}
 * ```
 *
 * @constant
 */
export const agoi: OBJECT_IDENTIFIER = _OID.fromParts([/* attributeGroup */ 8], nloi);

/* eslint-enable */
