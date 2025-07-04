/* eslint-disable */
import {
    NULL,
    TRUE,
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
import { id_con_dl_nested_dl } from '../MHSObjectIdentifiers/id-con-dl-nested-dl.va.mjs';
import { CONTEXT } from '@wildboar/x500/InformationFramework';
/**
 * @summary dl_nested_dl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-nested-dl CONTEXT ::= {WITH SYNTAX  NULL
 *                           ID           id-con-dl-nested-dl
 * }
 * ```
 *
 * @constant
 * @type {CONTEXT<NULL>}
 * @implements {CONTEXT<NULL>}
 */
export const dl_nested_dl: CONTEXT<NULL> = {
    class: 'CONTEXT',
    decoderFor: {
        '&Type': $._decodeNull,
        '&Assertion': undefined,
    },
    encoderFor: {
        '&Type': $._encodeNull,
        '&Assertion': undefined,
    },
    '&id': id_con_dl_nested_dl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&Assertion': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&absentMatch': TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
