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
import { ms_message_submission } from '../MSAbstractService/ms-message-submission.oa.js';
export { ms_message_submission } from '../MSAbstractService/ms-message-submission.oa.js';
import { ms_probe_submission } from '../MSAbstractService/ms-probe-submission.oa.js';
export { ms_probe_submission } from '../MSAbstractService/ms-probe-submission.oa.js';
import { ms_cancel_deferred_delivery } from '../MSAbstractService/ms-cancel-deferred-delivery.oa.js';
export { ms_cancel_deferred_delivery } from '../MSAbstractService/ms-cancel-deferred-delivery.oa.js';
import { ms_submission_control } from '../MSAbstractService/ms-submission-control.oa.js';
export { ms_submission_control } from '../MSAbstractService/ms-submission-control.oa.js';
import { id_pt_ms_submission } from '../MSObjectIdentifiers/id-pt-ms-submission.va.js';
export { id_pt_ms_submission } from '../MSObjectIdentifiers/id-pt-ms-submission.va.js';
import { PORT } from '../MTSAbstractService/PORT.oca.js';
export { PORT } from '../MTSAbstractService/PORT.oca.js';

/* START_OF_SYMBOL_DEFINITION ms_submission */
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
/* END_OF_SYMBOL_DEFINITION ms_submission */

/* eslint-enable */
