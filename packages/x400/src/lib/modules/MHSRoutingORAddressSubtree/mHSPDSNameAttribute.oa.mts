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
import { oRAddressElementName } from '../MHSRoutingORAddressSubtree/oRAddressElementName.oa.mjs';
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from '@wildboar/x500/SelectedAttributeTypes';
import { id_at_mhs_pds_name_attribute } from '../MHSRoutingObjectIdentifiers/id-at-mhs-pds-name-attribute.va.mjs';
/**
 * @summary mHSPDSNameAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSPDSNameAttribute ATTRIBUTE ::= {
 *   SUBTYPE OF   oRAddressElementName
 *   WITH SYNTAX  DirectoryString {ub-pds-name-length}
 *   ID           id-at-mhs-pds-name-attribute
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export const mHSPDSNameAttribute: ATTRIBUTE<DirectoryString> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DirectoryString,
    },
    encoderFor: {
        '&Type': _encode_DirectoryString,
    },
    '&derivation': oRAddressElementName /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_pds_name_attribute /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
