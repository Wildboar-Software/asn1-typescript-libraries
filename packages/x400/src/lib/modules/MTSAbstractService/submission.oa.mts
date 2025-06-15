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
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { message_submission } from '../MTSAbstractService/message-submission.oa.mjs';
import { probe_submission } from '../MTSAbstractService/probe-submission.oa.mjs';
import { cancel_deferred_delivery } from '../MTSAbstractService/cancel-deferred-delivery.oa.mjs';
import { submission_control } from '../MTSAbstractService/submission-control.oa.mjs';
import { id_pt_submission } from '../MTSObjectIdentifiers/id-pt-submission.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary submission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * submission PORT ::= {
 *   OPERATIONS        {operationObject1, ...}
 *   CONSUMER INVOKES
 *     {message-submission | probe-submission | cancel-deferred-delivery, ...}
 *   SUPPLIER INVOKES  {submission-control, ...}
 *   ID                id-pt-submission
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const submission: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [
        message_submission,
        probe_submission,
        cancel_deferred_delivery,
    ] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [submission_control] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_submission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
