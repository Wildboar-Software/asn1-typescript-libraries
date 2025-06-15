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
    ModifyRequest,
    _decode_ModifyRequest,
    _encode_ModifyRequest,
} from '../Pbact-access/ModifyRequest.ta.mjs';
import { id_modifyRequest } from '../Pbact-access/id-modifyRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION modifyRequest */
/**
 * @summary modifyRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyRequest CONTENT-TYPE ::= {
 *               ModifyRequest
 * IDENTIFIED BY id-modifyRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ModifyRequest>}
 * @implements {CONTENT_TYPE<ModifyRequest>}
 */
export const modifyRequest: CONTENT_TYPE<ModifyRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_ModifyRequest,
    },
    encoderFor: {
        '&Type': _encode_ModifyRequest,
    },
    '&id': id_modifyRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyRequest */

/* eslint-enable */
