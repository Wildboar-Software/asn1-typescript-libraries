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
    PostalCode,
    _decode_PostalCode,
    _encode_PostalCode,
} from '../MTSAbstractService/PostalCode.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary postal_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postal-code EXTENSION-ATTRIBUTE ::= {PostalCode
 *                                      IDENTIFIED BY  9
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PostalCode>}
 * @implements {EXTENSION_ATTRIBUTE<PostalCode>}
 */
export const postal_code: EXTENSION_ATTRIBUTE<PostalCode> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PostalCode,
    },
    encoderFor: {
        '&Type': _encode_PostalCode,
    },
    '&id': 9 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
