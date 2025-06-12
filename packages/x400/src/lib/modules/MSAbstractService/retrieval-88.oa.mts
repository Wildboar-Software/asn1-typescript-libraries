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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { summarize } from '../MSAbstractService/summarize.oa.mjs';
export { summarize } from '../MSAbstractService/summarize.oa.mjs';
import { list } from '../MSAbstractService/list.oa.mjs';
export { list } from '../MSAbstractService/list.oa.mjs';
import { fetch } from '../MSAbstractService/fetch.oa.mjs';
export { fetch } from '../MSAbstractService/fetch.oa.mjs';
import { delete_ } from '../MSAbstractService/delete.oa.mjs';
export { delete_ } from '../MSAbstractService/delete.oa.mjs';
import { register_MS } from '../MSAbstractService/register-MS.oa.mjs';
export { register_MS } from '../MSAbstractService/register-MS.oa.mjs';
import { alert } from '../MSAbstractService/alert.oa.mjs';
export { alert } from '../MSAbstractService/alert.oa.mjs';
import { id_pt_retrieval_88 } from '../MSObjectIdentifiers/id-pt-retrieval-88.va.mjs';
export { id_pt_retrieval_88 } from '../MSObjectIdentifiers/id-pt-retrieval-88.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
export { PORT } from '../MTSAbstractService/PORT.oca.mjs';

/* START_OF_SYMBOL_DEFINITION retrieval_88 */
/**
 * @summary retrieval_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * retrieval-88 PORT ::= {
 *   -- With all 1994 extensions to the abstract-operations absent
 *   OPERATIONS        {operationObject1, ...}
 *   CONSUMER INVOKES  {summarize | list | fetch | delete | register-MS}
 *   SUPPLIER INVOKES  {alert}
 *   ID                id-pt-retrieval-88
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const retrieval_88: PORT = {
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
    ] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [alert] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_retrieval_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION retrieval_88 */

/* eslint-enable */
