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
    DeleteRequest,
    _decode_DeleteRequest,
    _encode_DeleteRequest,
} from '../Pbact-access/DeleteRequest.ta.mjs';
import { id_deleteRequest } from '../Pbact-access/id-deleteRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION deleteRequest */
/**
 * @summary deleteRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteRequest CONTENT-TYPE ::= {
 *               DeleteRequest
 * IDENTIFIED BY id-deleteRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<DeleteRequest>}
 * @implements {CONTENT_TYPE<DeleteRequest>}
 */
export const deleteRequest: CONTENT_TYPE<DeleteRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_DeleteRequest,
    },
    encoderFor: {
        '&Type': _encode_DeleteRequest,
    },
    '&id': id_deleteRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deleteRequest */

/* eslint-enable */
