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
    ModifyResult,
    _decode_ModifyResult,
    _encode_ModifyResult,
} from '../Pbact-access/ModifyResult.ta.mjs';
import { id_modifyResult } from '../Pbact-access/id-modifyResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary modifyResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyResult CONTENT-TYPE ::= {
 *               ModifyResult
 * IDENTIFIED BY id-modifyResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ModifyResult>}
 * @implements {CONTENT_TYPE<ModifyResult>}
 */
export const modifyResult: CONTENT_TYPE<ModifyResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_ModifyResult,
    },
    encoderFor: {
        '&Type': _encode_ModifyResult,
    },
    '&id': id_modifyResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
