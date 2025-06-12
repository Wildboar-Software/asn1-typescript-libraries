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
import { delivery_control_88 } from '../MTSAbstractService88/delivery-control-88.oa.mjs';
export { delivery_control_88 } from '../MTSAbstractService88/delivery-control-88.oa.mjs';
import { message_delivery } from '../MTSAbstractService/message-delivery.oa.mjs';
export { message_delivery } from '../MTSAbstractService/message-delivery.oa.mjs';
import { report_delivery } from '../MTSAbstractService/report-delivery.oa.mjs';
export { report_delivery } from '../MTSAbstractService/report-delivery.oa.mjs';
import { id_pt_delivery } from '../MTSObjectIdentifiers/id-pt-delivery.va.mjs';
export { id_pt_delivery } from '../MTSObjectIdentifiers/id-pt-delivery.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
export { PORT } from '../MTSAbstractService/PORT.oca.mjs';

/* START_OF_SYMBOL_DEFINITION delivery_88 */
/**
 * @summary delivery_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-88 PORT ::= {
 *   OPERATIONS
 *     {operationObject1,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   CONSUMER INVOKES
 *     {delivery-control-88,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   SUPPLIER INVOKES
 *     {message-delivery | report-delivery,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   ID                {id-pt-delivery  88}
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const delivery_88: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [delivery_control_88] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [message_delivery, report_delivery] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [88],
        id_pt_delivery
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delivery_88 */

/* eslint-enable */
