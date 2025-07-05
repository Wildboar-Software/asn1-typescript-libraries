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
import { mhs_dl_members } from '../MHSDirectoryObjectsAndAttributes/mhs-dl-members.oa.mjs';
import { dl_administrator_annotation } from '../MHSDirectoryObjectsAndAttributes/dl-administrator-annotation.oa.mjs';
import { type DIT_CONTEXT_USE_RULE } from '@wildboar/x500/InformationFramework';
/**
 * @summary dl_administrator_annotation_use_rule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-administrator-annotation-use-rule DIT-CONTEXT-USE-RULE ::= {
 *   ATTRIBUTE TYPE     mhs-dl-members.&id
 *   OPTIONAL CONTEXTS  {dl-administrator-annotation}
 * }
 * ```
 *
 * @constant
 * @type {DIT_CONTEXT_USE_RULE}
 * @implements {DIT_CONTEXT_USE_RULE}
 */
export const dl_administrator_annotation_use_rule: DIT_CONTEXT_USE_RULE = {
    class: 'DIT-CONTEXT-USE-RULE',
    decoderFor: {},
    encoderFor: {},
    '&attributeType':
        mhs_dl_members[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Optional': [dl_administrator_annotation] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
