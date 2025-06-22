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
import { id_mst_prevent_nrn_generation } from '../IPMSObjectIdentifiers/id-mst-prevent-nrn-generation.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary prevent_nrn_generation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prevent-nrn-generation MS-EXTENSION ::= {
 *   NULL
 *   IDENTIFIED BY  id-mst-prevent-nrn-generation
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<NULL>}
 * @implements {MS_EXTENSION<NULL>}
 */
export const prevent_nrn_generation: MS_EXTENSION<NULL> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_mst_prevent_nrn_generation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
