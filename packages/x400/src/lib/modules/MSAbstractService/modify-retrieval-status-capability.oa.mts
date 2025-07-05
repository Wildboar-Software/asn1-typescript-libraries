/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { id_ext_modify_retrieval_status_capability } from '../MSObjectIdentifiers/id-ext-modify-retrieval-status-capability.va.mjs';
import { type MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary modify_retrieval_status_capability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modify-retrieval-status-capability MS-EXTENSION ::= {
 *   NULL
 *   IDENTIFIED BY  id-ext-modify-retrieval-status-capability
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<NULL>}
 * @implements {MS_EXTENSION<NULL>}
 */
export const modify_retrieval_status_capability: MS_EXTENSION<NULL> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_ext_modify_retrieval_status_capability /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
