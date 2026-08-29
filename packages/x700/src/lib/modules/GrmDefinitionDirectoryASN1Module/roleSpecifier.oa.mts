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
    RoleSpecifier,
    _decode_RoleSpecifier,
    _encode_RoleSpecifier,
} from '../GrmAttributeDefinitionModule/RoleSpecifier.ta.mjs';
import { mkmDirectoryAttributeType } from '../MKMD/mkmDirectoryAttributeType.va.mjs';
/**
 * @summary roleSpecifier
 * @description
 *
 * Roles associated with the managed relationship class (GRM `ROLE`
 * productions). Single-valued in the Directory attribute (one
 * `RoleSpecifier` SEQUENCE). ITU-T Rec. X.750 Amd.1 (10/97)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199710-I);
 * X.725 (11/95) A.1.3.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecifier ATTRIBUTE ::= {
 *   WITH SYNTAX   RoleSpecifier
 *   SINGLE VALUE  TRUE
 *   ID            {mkmDirectoryAttributeType  52}
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RoleSpecifier>}
 * @implements {ATTRIBUTE<RoleSpecifier>}
 */
export const roleSpecifier: ATTRIBUTE<RoleSpecifier> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RoleSpecifier,
    },
    encoderFor: {
        '&Type': _encode_RoleSpecifier,
    },
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [52],
        mkmDirectoryAttributeType
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
