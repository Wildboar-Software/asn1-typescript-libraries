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
    RenameRequest,
    _decode_RenameRequest,
    _encode_RenameRequest,
} from '../Pbact-access/RenameRequest.ta.mjs';
import { id_renameRequest } from '../Pbact-access/id-renameRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary renameRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * renameRequest CONTENT-TYPE ::= {
 *               RenameRequest
 * IDENTIFIED BY id-renameRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<RenameRequest>}
 * @implements {CONTENT_TYPE<RenameRequest>}
 */
export const renameRequest: CONTENT_TYPE<RenameRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_RenameRequest,
    },
    encoderFor: {
        '&Type': _encode_RenameRequest,
    },
    '&id': id_renameRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
