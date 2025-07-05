/* eslint-disable */
import {
    TRUE,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    dl_administrator_annotation_Type,
    _decode_dl_administrator_annotation_Type,
    _encode_dl_administrator_annotation_Type,
} from '../MHSDirectoryObjectsAndAttributes/dl-administrator-annotation-Type.ta.mjs';
import { id_con_dl_administrator_annotation } from '../MHSObjectIdentifiers/id-con-dl-administrator-annotation.va.mjs';
import { type CONTEXT } from '@wildboar/x500/InformationFramework';
/**
 * @summary dl_administrator_annotation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-administrator-annotation CONTEXT ::= {
 *   WITH SYNTAX
 *     CHOICE {bmpstring        BMPString,
 *             universalstring  UniversalString}
 *   ID           id-con-dl-administrator-annotation
 * }
 * ```
 *
 * @constant
 * @type {CONTEXT<dl_administrator_annotation_Type>}
 * @implements {CONTEXT<dl_administrator_annotation_Type>}
 */
export const dl_administrator_annotation: CONTEXT<dl_administrator_annotation_Type> = {
    class: 'CONTEXT',
    decoderFor: {
        '&Type': _decode_dl_administrator_annotation_Type,
        '&Assertion': undefined,
    },
    encoderFor: {
        '&Type': _encode_dl_administrator_annotation_Type,
        '&Assertion': undefined,
    },
    '&id': id_con_dl_administrator_annotation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&Assertion': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&absentMatch': TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
