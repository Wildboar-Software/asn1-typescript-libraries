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
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/InformationFramework';
import {
    ExtendedContentType,
    _decode_ExtendedContentType,
    _encode_ExtendedContentType,
} from '../MTSAbstractService/ExtendedContentType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_at_mhs_deliverable_content_types } from '../MHSObjectIdentifiers/id-at-mhs-deliverable-content-types.va.mjs';
/**
 * @summary mhs_deliverable_content_types
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-deliverable-content-types ATTRIBUTE ::= {
 *   WITH SYNTAX             ExtendedContentType
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   ID                      id-at-mhs-deliverable-content-types
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ExtendedContentType>}
 * @implements {ATTRIBUTE<ExtendedContentType>}
 */
export const mhs_deliverable_content_types: ATTRIBUTE<ExtendedContentType> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtendedContentType,
    },
    encoderFor: {
        '&Type': _encode_ExtendedContentType,
    },
    '&equality-match': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_deliverable_content_types /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
