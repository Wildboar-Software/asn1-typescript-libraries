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
    CompareResult,
    _decode_CompareResult,
    _encode_CompareResult,
} from '../Pbact-access/CompareResult.ta.mjs';
import { id_compareResult } from '../Pbact-access/id-compareResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary compareResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * compareResult CONTENT-TYPE ::= {
 *               CompareResult
 * IDENTIFIED BY id-compareResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<CompareResult>}
 * @implements {CONTENT_TYPE<CompareResult>}
 */
export const compareResult: CONTENT_TYPE<CompareResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_CompareResult,
    },
    encoderFor: {
        '&Type': _encode_CompareResult,
    },
    '&id': id_compareResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
