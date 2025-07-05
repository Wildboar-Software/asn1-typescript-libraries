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
    UniversalPersonalName,
    _decode_UniversalPersonalName,
    _encode_UniversalPersonalName,
} from '../MTSAbstractService/UniversalPersonalName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-personal-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalPersonalName
 *   IDENTIFIED BY  26
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPersonalName>}
 */
export const universal_personal_name: EXTENSION_ATTRIBUTE<UniversalPersonalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalPersonalName,
    },
    encoderFor: {
        '&Type': _encode_UniversalPersonalName,
    },
    '&id': 26 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
