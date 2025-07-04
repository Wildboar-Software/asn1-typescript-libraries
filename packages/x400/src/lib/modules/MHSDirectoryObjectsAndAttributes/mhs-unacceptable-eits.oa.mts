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
    ExtendedEncodedInformationType,
    _decode_ExtendedEncodedInformationType,
    _encode_ExtendedEncodedInformationType,
} from '../MTSAbstractService/ExtendedEncodedInformationType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_at_mhs_unacceptable_eits } from '../MHSObjectIdentifiers/id-at-mhs-unacceptable-eits.va.mjs';
/**
 * @summary mhs_unacceptable_eits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-unacceptable-eits ATTRIBUTE ::= {
 *   WITH SYNTAX             ExtendedEncodedInformationType
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   ID                      id-at-mhs-unacceptable-eits
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ExtendedEncodedInformationType>}
 * @implements {ATTRIBUTE<ExtendedEncodedInformationType>}
 */
export const mhs_unacceptable_eits: ATTRIBUTE<ExtendedEncodedInformationType> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExtendedEncodedInformationType,
    },
    encoderFor: {
        '&Type': _encode_ExtendedEncodedInformationType,
    },
    '&equality-match': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_unacceptable_eits /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
