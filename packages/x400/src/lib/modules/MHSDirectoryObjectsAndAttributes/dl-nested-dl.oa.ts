/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { id_con_dl_nested_dl } from '../MHSObjectIdentifiers/id-con-dl-nested-dl.va.js';
export { id_con_dl_nested_dl } from '../MHSObjectIdentifiers/id-con-dl-nested-dl.va.js';
import { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';
export { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';

/* START_OF_SYMBOL_DEFINITION dl_nested_dl */
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
    '&absentMatch': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dl_nested_dl */

/* eslint-enable */
