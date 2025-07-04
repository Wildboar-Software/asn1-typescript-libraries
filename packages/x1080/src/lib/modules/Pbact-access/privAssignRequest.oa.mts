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
    PrivAssignRequest,
    _decode_PrivAssignRequest,
    _encode_PrivAssignRequest,
} from '../Pbact-access/PrivAssignRequest.ta.mjs';
import { id_privAssignRequest } from '../Pbact-access/id-privAssignRequest.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary privAssignRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privAssignRequest CONTENT-TYPE ::= {
 *               PrivAssignRequest
 * IDENTIFIED BY id-privAssignRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<PrivAssignRequest>}
 * @implements {CONTENT_TYPE<PrivAssignRequest>}
 */
export const privAssignRequest: CONTENT_TYPE<PrivAssignRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_PrivAssignRequest,
    },
    encoderFor: {
        '&Type': _encode_PrivAssignRequest,
    },
    '&id': id_privAssignRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
