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
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { summarize } from '../MSAbstractService/summarize.oa.mjs';
import { list } from '../MSAbstractService/list.oa.mjs';
import { fetch } from '../MSAbstractService/fetch.oa.mjs';
import { delete_ } from '../MSAbstractService/delete.oa.mjs';
import { register_MS } from '../MSAbstractService/register-MS.oa.mjs';
import { alert } from '../MSAbstractService/alert.oa.mjs';
import { id_pt_retrieval_88 } from '../MSObjectIdentifiers/id-pt-retrieval-88.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
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

/* eslint-enable */
