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
    AddResult,
    _decode_AddResult,
    _encode_AddResult,
} from '../Pbact-access/AddResult.ta.mjs';
import { id_addResult } from '../Pbact-access/id-addResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary addResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addResult CONTENT-TYPE ::= {
 *               AddResult
 * IDENTIFIED BY id-addResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AddResult>}
 * @implements {CONTENT_TYPE<AddResult>}
 */
export const addResult: CONTENT_TYPE<AddResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AddResult,
    },
    encoderFor: {
        '&Type': _encode_AddResult,
    },
    '&id': id_addResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
