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
import { change_credentials } from '../MTSAbstractService/change-credentials.oa.mjs';
import { register_88 } from '../MTSAbstractService88/register-88.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { id_pt_administration } from '../MTSObjectIdentifiers/id-pt-administration.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary administration_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administration-88 PORT ::= {
 *   OPERATIONS
 *     {change-credentials,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   CONSUMER INVOKES
 *     {register-88,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   SUPPLIER INVOKES
 *     {operationObject1,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   ID                {id-pt-administration  88}
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const administration_88: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [change_credentials] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [register_88] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [88],
        id_pt_administration
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
