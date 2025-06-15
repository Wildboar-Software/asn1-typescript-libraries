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
    CompareRequest,
    _decode_CompareRequest,
    _encode_CompareRequest,
} from '../Pbact-access/CompareRequest.ta.mjs';
import { id_compareRequest } from '../Pbact-access/id-compareRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary compareRequest
 * @description
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
