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
    DeleteResult,
    _decode_DeleteResult,
    _encode_DeleteResult,
} from '../Pbact-access/DeleteResult.ta.mjs';
import { id_deleteResult } from '../Pbact-access/id-deleteResult.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary deleteResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteResult CONTENT-TYPE ::= {
 *               DeleteResult
 * IDENTIFIED BY id-deleteResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<DeleteResult>}
 * @implements {CONTENT_TYPE<DeleteResult>}
 */
export const deleteResult: CONTENT_TYPE<DeleteResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_DeleteResult,
    },
    encoderFor: {
        '&Type': _encode_DeleteResult,
    },
    '&id': id_deleteResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
