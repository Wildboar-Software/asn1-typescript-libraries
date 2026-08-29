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
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from '../CmsTelebiometric/SignedData.ta.mjs';
import { id_signedData } from '../CmsTelebiometric/id-signedData.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary signedData
 * @description
 *
 * CMS content type for authentication and integrity. Used when
 * digital signing is required. If confidentiality is required,
 * `envelopedData` is encapsulated here.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1–B.2.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
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
