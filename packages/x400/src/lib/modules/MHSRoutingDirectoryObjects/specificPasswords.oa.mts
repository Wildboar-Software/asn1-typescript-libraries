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
    SpecificPassword,
    _decode_SpecificPassword,
    _encode_SpecificPassword,
} from '../MHSRoutingDirectoryObjects/SpecificPassword.ta.mjs';
import { id_at_specific_passwords } from '../MHSRoutingObjectIdentifiers/id-at-specific-passwords.va.mjs';
/**
 * @summary specificPasswords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specificPasswords ATTRIBUTE ::= {
 *   WITH SYNTAX   SpecificPassword
 *   SINGLE VALUE  FALSE
 *   ID            id-at-specific-passwords
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SpecificPassword>}
 * @implements {ATTRIBUTE<SpecificPassword>}
 */
export const specificPasswords: ATTRIBUTE<SpecificPassword> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SpecificPassword,
    },
    encoderFor: {
        '&Type': _encode_SpecificPassword,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_specific_passwords /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
