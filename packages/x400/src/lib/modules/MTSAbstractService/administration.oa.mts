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
import { change_credentials } from '../MTSAbstractService/change-credentials.oa.mjs';
import { register } from '../MTSAbstractService/register.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { id_pt_administration } from '../MTSObjectIdentifiers/id-pt-administration.va.mjs';
import { type PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary administration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administration PORT ::= {
 *   OPERATIONS        {change-credentials, ...}
 *   CONSUMER INVOKES  {register, ...}
 *   SUPPLIER INVOKES  {operationObject1, ...}
 *   ID                id-pt-administration
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const administration: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [change_credentials] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [register] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_administration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
