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
import * as $ from 'asn1-ts/dist/node/functional';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { delivery_control } from '../MTSAbstractService/delivery-control.oa';
export { delivery_control } from '../MTSAbstractService/delivery-control.oa';
import { message_delivery } from '../MTSAbstractService/message-delivery.oa';
export { message_delivery } from '../MTSAbstractService/message-delivery.oa';
import { report_delivery } from '../MTSAbstractService/report-delivery.oa';
export { report_delivery } from '../MTSAbstractService/report-delivery.oa';
import { id_pt_delivery } from '../MTSObjectIdentifiers/id-pt-delivery.va';
export { id_pt_delivery } from '../MTSObjectIdentifiers/id-pt-delivery.va';
import { PORT } from '../MTSAbstractService/PORT.oca';
export { PORT } from '../MTSAbstractService/PORT.oca';

/* START_OF_SYMBOL_DEFINITION delivery */
/**
 * @summary delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery PORT ::= {
 *   OPERATIONS        {operationObject1, ...}
 *   CONSUMER INVOKES  {delivery-control, ...}
 *   SUPPLIER INVOKES  {message-delivery | report-delivery, ...}
 *   ID                id-pt-delivery
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const delivery: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [delivery_control] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [message_delivery, report_delivery] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_delivery /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delivery */

/* eslint-enable */
