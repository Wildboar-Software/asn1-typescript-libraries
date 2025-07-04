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
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.mjs';
import { id_at_group_mta_password } from '../MHSRoutingObjectIdentifiers/id-at-group-mta-password.va.mjs';
/**
 * @summary groupMTAPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupMTAPassword ATTRIBUTE ::= {
 *   WITH SYNTAX   Password
 *   SINGLE VALUE  TRUE
 *   ID            id-at-group-mta-password
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Password>}
 * @implements {ATTRIBUTE<Password>}
 */
export const groupMTAPassword: ATTRIBUTE<Password> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Password,
    },
    encoderFor: {
        '&Type': _encode_Password,
    },
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_at_group_mta_password /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
