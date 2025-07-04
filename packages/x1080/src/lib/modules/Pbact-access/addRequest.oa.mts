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
    AddRequest,
    _decode_AddRequest,
    _encode_AddRequest,
} from '../Pbact-access/AddRequest.ta.mjs';
import { id_addRequest } from '../Pbact-access/id-addRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary addRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addRequest CONTENT-TYPE ::= {
 *               AddRequest
 * IDENTIFIED BY id-addRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AddRequest>}
 * @implements {CONTENT_TYPE<AddRequest>}
 */
export const addRequest: CONTENT_TYPE<AddRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AddRequest,
    },
    encoderFor: {
        '&Type': _encode_AddRequest,
    },
    '&id': id_addRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
