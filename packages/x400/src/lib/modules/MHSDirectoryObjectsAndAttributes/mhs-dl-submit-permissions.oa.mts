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
} from 'asn1-ts';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    DLSubmitPermission,
    _decode_DLSubmitPermission,
    _encode_DLSubmitPermission,
} from '../MHSDirectoryObjectsAndAttributes/DLSubmitPermission.ta.mjs';
import { id_at_mhs_dl_submit_permissions } from '../MHSObjectIdentifiers/id-at-mhs-dl-submit-permissions.va.mjs';
/**
 * @summary mhs_dl_submit_permissions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-dl-submit-permissions ATTRIBUTE ::= {
 *   WITH SYNTAX  DLSubmitPermission
 *   ID           id-at-mhs-dl-submit-permissions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DLSubmitPermission>}
 * @implements {ATTRIBUTE<DLSubmitPermission>}
 */
export const mhs_dl_submit_permissions: ATTRIBUTE<DLSubmitPermission> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DLSubmitPermission,
    },
    encoderFor: {
        '&Type': _encode_DLSubmitPermission,
    },
    '&id': id_at_mhs_dl_submit_permissions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
