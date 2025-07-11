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
import {
    UniversalOrganizationName,
    _decode_UniversalOrganizationName,
    _encode_UniversalOrganizationName,
} from '../MTSAbstractService/UniversalOrganizationName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organization-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalOrganizationName
 *   IDENTIFIED BY  25
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalOrganizationName>}
 */
export const universal_organization_name: EXTENSION_ATTRIBUTE<UniversalOrganizationName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalOrganizationName,
    },
    encoderFor: {
        '&Type': _encode_UniversalOrganizationName,
    },
    '&id': 25 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
