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
import { id_mst_invalid_ipn } from '../IPMSObjectIdentifiers/id-mst-invalid-ipn.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary invalid_ipn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalid-ipn MS-EXTENSION ::= {NULL
 *                               IDENTIFIED BY  id-mst-invalid-ipn
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<NULL>}
 * @implements {MS_EXTENSION<NULL>}
 */
export const invalid_ipn: MS_EXTENSION<NULL> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_mst_invalid_ipn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
