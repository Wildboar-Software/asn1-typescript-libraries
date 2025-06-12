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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
import { summarize } from '../MSAbstractService/summarize.oa.js';
export { summarize } from '../MSAbstractService/summarize.oa.js';
import { list } from '../MSAbstractService/list.oa.js';
export { list } from '../MSAbstractService/list.oa.js';
import { fetch } from '../MSAbstractService/fetch.oa.js';
export { fetch } from '../MSAbstractService/fetch.oa.js';
import { delete_ } from '../MSAbstractService/delete.oa.js';
export { delete_ } from '../MSAbstractService/delete.oa.js';
import { register_MS } from '../MSAbstractService/register-MS.oa.js';
export { register_MS } from '../MSAbstractService/register-MS.oa.js';
import { modify } from '../MSAbstractService/modify.oa.js';
export { modify } from '../MSAbstractService/modify.oa.js';
import { alert } from '../MSAbstractService/alert.oa.js';
export { alert } from '../MSAbstractService/alert.oa.js';
import { id_pt_retrieval_94 } from '../MSObjectIdentifiers/id-pt-retrieval-94.va.js';
export { id_pt_retrieval_94 } from '../MSObjectIdentifiers/id-pt-retrieval-94.va.js';
import { PORT } from '../MTSAbstractService/PORT.oca.js';
export { PORT } from '../MTSAbstractService/PORT.oca.js';

/* START_OF_SYMBOL_DEFINITION retrieval */
/**
 * @summary retrieval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * retrieval PORT ::= {
 *   OPERATIONS        {operationObject1, ...}
 *   CONSUMER INVOKES
 *     {summarize | list | fetch | delete | register-MS,
 *       ... -- 1994 extension addition --, modify}
 *   SUPPLIER INVOKES  {alert}
 *   ID                id-pt-retrieval-94
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const retrieval: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [
        summarize,
        list,
        fetch,
        delete_,
        register_MS,
        /* OBJECT_SET_EXTENSION_MARKER */ modify,
    ] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [alert] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_retrieval_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION retrieval */

/* eslint-enable */
