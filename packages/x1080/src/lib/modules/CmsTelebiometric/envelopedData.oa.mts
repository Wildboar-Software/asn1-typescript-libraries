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
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from '../CmsTelebiometric/EnvelopedData.ta.mjs';
import { id_envelopedData } from '../CmsTelebiometric/id-envelopedData.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary envelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * envelopedData CONTENT-TYPE ::= {
 *                 EnvelopedData
 *   IDENTIFIED BY id-envelopedData }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<EnvelopedData>}
 * @implements {CONTENT_TYPE<EnvelopedData>}
 */
export const envelopedData: CONTENT_TYPE<EnvelopedData> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_EnvelopedData,
    },
    encoderFor: {
        '&Type': _encode_EnvelopedData,
    },
    '&id': id_envelopedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
