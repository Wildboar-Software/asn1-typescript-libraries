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
import {
    UniversalOrganizationalUnitNames,
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from '../MTSAbstractService/UniversalOrganizationalUnitNames.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *   UniversalOrganizationalUnitNames
 *   IDENTIFIED BY  27
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames>}
 */
export const universal_organizational_unit_names: EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalOrganizationalUnitNames,
    },
    encoderFor: {
        '&Type': _encode_UniversalOrganizationalUnitNames,
    },
    '&id': 27 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
