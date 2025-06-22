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
    UniversalLocalPostalAttributes,
    _decode_UniversalLocalPostalAttributes,
    _encode_UniversalLocalPostalAttributes,
} from '../MTSAbstractService/UniversalLocalPostalAttributes.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *   UniversalLocalPostalAttributes
 *   IDENTIFIED BY  40
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes>}
 */
export const universal_local_postal_attributes: EXTENSION_ATTRIBUTE<UniversalLocalPostalAttributes> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalLocalPostalAttributes,
    },
    encoderFor: {
        '&Type': _encode_UniversalLocalPostalAttributes,
    },
    '&id': 40 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
