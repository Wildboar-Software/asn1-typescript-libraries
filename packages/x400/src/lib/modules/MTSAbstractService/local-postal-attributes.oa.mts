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
    LocalPostalAttributes,
    _decode_LocalPostalAttributes,
    _encode_LocalPostalAttributes,
} from '../MTSAbstractService/LocalPostalAttributes.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *   LocalPostalAttributes
 *   IDENTIFIED BY  21
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<LocalPostalAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<LocalPostalAttributes>}
 */
export const local_postal_attributes: EXTENSION_ATTRIBUTE<LocalPostalAttributes> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_LocalPostalAttributes,
    },
    encoderFor: {
        '&Type': _encode_LocalPostalAttributes,
    },
    '&id': 21 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
