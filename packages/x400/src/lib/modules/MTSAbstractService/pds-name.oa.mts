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
    PDSName,
    _decode_PDSName,
    _encode_PDSName,
} from '../MTSAbstractService/PDSName.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary pds_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pds-name EXTENSION-ATTRIBUTE ::= {PDSName
 *                                   IDENTIFIED BY  7
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PDSName>}
 * @implements {EXTENSION_ATTRIBUTE<PDSName>}
 */
export const pds_name: EXTENSION_ATTRIBUTE<PDSName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PDSName,
    },
    encoderFor: {
        '&Type': _encode_PDSName,
    },
    '&id': 7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
