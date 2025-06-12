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
import { message_submission } from '../MTSAbstractService/message-submission.oa.mjs';
export { message_submission } from '../MTSAbstractService/message-submission.oa.mjs';
import { probe_submission } from '../MTSAbstractService/probe-submission.oa.mjs';
export { probe_submission } from '../MTSAbstractService/probe-submission.oa.mjs';
import { cancel_deferred_delivery } from '../MTSAbstractService/cancel-deferred-delivery.oa.mjs';
export { cancel_deferred_delivery } from '../MTSAbstractService/cancel-deferred-delivery.oa.mjs';
import { submission_control } from '../MTSAbstractService/submission-control.oa.mjs';
export { submission_control } from '../MTSAbstractService/submission-control.oa.mjs';
import { id_pt_submission } from '../MTSObjectIdentifiers/id-pt-submission.va.mjs';
export { id_pt_submission } from '../MTSObjectIdentifiers/id-pt-submission.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
export { PORT } from '../MTSAbstractService/PORT.oca.mjs';

/* START_OF_SYMBOL_DEFINITION submission */
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
/* END_OF_SYMBOL_DEFINITION submission */

/* eslint-enable */
