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
import { distinguishedName } from '@wildboar/x500/SelectedAttributeTypes';
import { distinguishedNameMatch } from '@wildboar/x500/InformationFramework';
import { id_at_mhs_message_store_dn } from '../MHSObjectIdentifiers/id-at-mhs-message-store-dn.va.mjs';
/**
 * @summary mhs_message_store_dn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mhs-message-store-dn ATTRIBUTE ::= {
 *   SUBTYPE OF              distinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   SINGLE VALUE            TRUE
 *   ID                      id-at-mhs-message-store-dn
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const mhs_message_store_dn: ATTRIBUTE = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': undefined,
    },
    encoderFor: {
        '&Type': undefined,
    },
    '&derivation': distinguishedName /* OBJECT_FIELD_SETTING */,
    '&equality-match': distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_mhs_message_store_dn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
