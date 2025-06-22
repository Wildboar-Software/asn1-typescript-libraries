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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import { id_mst_suspend_auto_acknowledgement } from '../IPMSObjectIdentifiers/id-mst-suspend-auto-acknowledgement.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary suspend_auto_acknowledgement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * suspend-auto-acknowledgement MS-EXTENSION ::= {
 *   NULL
 *   IDENTIFIED BY  id-mst-suspend-auto-acknowledgement
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<NULL>}
 * @implements {MS_EXTENSION<NULL>}
 */
export const suspend_auto_acknowledgement: MS_EXTENSION<NULL> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_mst_suspend_auto_acknowledgement /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
