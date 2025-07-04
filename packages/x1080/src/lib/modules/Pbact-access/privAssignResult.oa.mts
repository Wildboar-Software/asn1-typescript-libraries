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
    PrivAssignResult,
    _decode_PrivAssignResult,
    _encode_PrivAssignResult,
} from '../Pbact-access/PrivAssignResult.ta.mjs';
import { id_privAssignResult } from '../Pbact-access/id-privAssignResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary privAssignResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privAssignResult CONTENT-TYPE ::= {
 *               PrivAssignResult
 * IDENTIFIED BY id-privAssignResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<PrivAssignResult>}
 * @implements {CONTENT_TYPE<PrivAssignResult>}
 */
export const privAssignResult: CONTENT_TYPE<PrivAssignResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_PrivAssignResult,
    },
    encoderFor: {
        '&Type': _encode_PrivAssignResult,
    },
    '&id': id_privAssignResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
