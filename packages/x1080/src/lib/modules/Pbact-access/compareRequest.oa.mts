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
    CompareRequest,
    _decode_CompareRequest,
    _encode_CompareRequest,
} from '../Pbact-access/CompareRequest.ta.mjs';
import { id_compareRequest } from '../Pbact-access/id-compareRequest.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary compareRequest
 * @description
 *
 * CMS content type for a compare request.
 * ITU-T Rec. X.1080.0 (2017) Cor.1
 * [§8.5](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * compareRequest CONTENT-TYPE ::= {
 *               CompareRequest
 * IDENTIFIED BY id-compareRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<CompareRequest>}
 * @implements {CONTENT_TYPE<CompareRequest>}
 */
export const compareRequest: CONTENT_TYPE<CompareRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_CompareRequest,
    },
    encoderFor: {
        '&Type': _encode_CompareRequest,
    },
    '&id': id_compareRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
