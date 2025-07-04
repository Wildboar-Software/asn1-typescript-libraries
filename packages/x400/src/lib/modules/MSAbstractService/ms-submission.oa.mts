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
import { ms_message_submission } from '../MSAbstractService/ms-message-submission.oa.mjs';
import { ms_probe_submission } from '../MSAbstractService/ms-probe-submission.oa.mjs';
import { ms_cancel_deferred_delivery } from '../MSAbstractService/ms-cancel-deferred-delivery.oa.mjs';
import { ms_submission_control } from '../MSAbstractService/ms-submission-control.oa.mjs';
import { id_pt_ms_submission } from '../MSObjectIdentifiers/id-pt-ms-submission.va.mjs';
import { type PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary ms_submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-submission PORT ::= {
 *   OPERATIONS        {operationObject1, ...}
 *   CONSUMER INVOKES
 *     {ms-message-submission | ms-probe-submission | ms-cancel-deferred-delivery}
 *   SUPPLIER INVOKES  {ms-submission-control}
 *   ID                id-pt-ms-submission
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const ms_submission: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [
        ms_message_submission,
        ms_probe_submission,
        ms_cancel_deferred_delivery,
    ] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [ms_submission_control] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_ms_submission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
