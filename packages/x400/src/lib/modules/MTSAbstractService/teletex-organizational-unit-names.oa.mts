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
    TeletexOrganizationalUnitNames,
    _decode_TeletexOrganizationalUnitNames,
    _encode_TeletexOrganizationalUnitNames,
} from '../MTSAbstractService/TeletexOrganizationalUnitNames.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary teletex_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *   TeletexOrganizationalUnitNames
 *   IDENTIFIED BY  5
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames>}
 */
export const teletex_organizational_unit_names: EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TeletexOrganizationalUnitNames,
    },
    encoderFor: {
        '&Type': _encode_TeletexOrganizationalUnitNames,
    },
    '&id': 5 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
