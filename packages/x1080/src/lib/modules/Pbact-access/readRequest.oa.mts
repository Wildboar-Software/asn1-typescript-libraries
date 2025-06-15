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
    ReadRequest,
    _decode_ReadRequest,
    _encode_ReadRequest,
} from '../Pbact-access/ReadRequest.ta.mjs';
import { id_readRequest } from '../Pbact-access/id-readRequest.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION readRequest */
/**
 * @summary readRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * readRequest CONTENT-TYPE ::= {
 *               ReadRequest
 * IDENTIFIED BY id-readRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ReadRequest>}
 * @implements {CONTENT_TYPE<ReadRequest>}
 */
export const readRequest: CONTENT_TYPE<ReadRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_ReadRequest,
    },
    encoderFor: {
        '&Type': _encode_ReadRequest,
    },
    '&id': id_readRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION readRequest */

/* eslint-enable */
