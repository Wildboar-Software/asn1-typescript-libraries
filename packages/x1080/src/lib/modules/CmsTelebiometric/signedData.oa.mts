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
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from '../CmsTelebiometric/SignedData.ta.mjs';
import { id_signedData } from '../CmsTelebiometric/id-signedData.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signedData CONTENT-TYPE ::= {
 *                 SignedData
 *   IDENTIFIED BY id-signedData }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SignedData>}
 * @implements {CONTENT_TYPE<SignedData>}
 */
export const signedData: CONTENT_TYPE<SignedData> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_SignedData,
    },
    encoderFor: {
        '&Type': _encode_SignedData,
    },
    '&id': id_signedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
