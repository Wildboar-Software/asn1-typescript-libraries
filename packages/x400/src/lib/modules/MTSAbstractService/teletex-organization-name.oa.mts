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
    TeletexOrganizationName,
    _decode_TeletexOrganizationName,
    _encode_TeletexOrganizationName,
} from '../MTSAbstractService/TeletexOrganizationName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary teletex_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organization-name EXTENSION-ATTRIBUTE ::= {
 *   TeletexOrganizationName
 *   IDENTIFIED BY  3
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexOrganizationName>}
 */
export const teletex_organization_name: EXTENSION_ATTRIBUTE<TeletexOrganizationName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TeletexOrganizationName,
    },
    encoderFor: {
        '&Type': _encode_TeletexOrganizationName,
    },
    '&id': 3 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
