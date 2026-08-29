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
    AuthEnvelopedData,
    _decode_AuthEnvelopedData,
    _encode_AuthEnvelopedData,
} from '../CmsTelebiometric/AuthEnvelopedData.ta.mjs';
import { id_ct_authEnvelopedData } from '../CmsTelebiometric/id-ct-authEnvelopedData.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary ct_authEnvelopedData
 * @description
 *
 * Authenticated-enveloped CMS content type (RFC 5083) for a
 * session after setup: reuse the CEK (RFC 3185) with AES-GCM
 * (RFC 5084). Used when multiple messages constitute one task.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1, B.4.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-authEnvelopedData CONTENT-TYPE ::= {
 *                 AuthEnvelopedData
 *   IDENTIFIED BY id-ct-authEnvelopedData }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AuthEnvelopedData>}
 * @implements {CONTENT_TYPE<AuthEnvelopedData>}
 */
export const ct_authEnvelopedData: CONTENT_TYPE<AuthEnvelopedData> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AuthEnvelopedData,
    },
    encoderFor: {
        '&Type': _encode_AuthEnvelopedData,
    },
    '&id': id_ct_authEnvelopedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
