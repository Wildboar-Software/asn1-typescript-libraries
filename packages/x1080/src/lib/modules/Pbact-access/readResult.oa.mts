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
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from '../Pbact-access/ReadResult.ta.mjs';
import { id_readResult } from '../Pbact-access/id-readResult.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary readResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * readResult CONTENT-TYPE ::= {
 *               ReadResult
 * IDENTIFIED BY id-readResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ReadResult>}
 * @implements {CONTENT_TYPE<ReadResult>}
 */
export const readResult: CONTENT_TYPE<ReadResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_ReadResult,
    },
    encoderFor: {
        '&Type': _encode_ReadResult,
    },
    '&id': id_readResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
