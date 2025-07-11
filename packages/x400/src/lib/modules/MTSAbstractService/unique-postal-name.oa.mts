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
    UniquePostalName,
    _decode_UniquePostalName,
    _encode_UniquePostalName,
} from '../MTSAbstractService/UniquePostalName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unique-postal-name EXTENSION-ATTRIBUTE ::= {UniquePostalName
 *                                             IDENTIFIED BY  20
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniquePostalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniquePostalName>}
 */
export const unique_postal_name: EXTENSION_ATTRIBUTE<UniquePostalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniquePostalName,
    },
    encoderFor: {
        '&Type': _encode_UniquePostalName,
    },
    '&id': 20 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
