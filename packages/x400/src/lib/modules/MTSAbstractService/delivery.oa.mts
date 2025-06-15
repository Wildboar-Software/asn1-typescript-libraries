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
import { delivery_control } from '../MTSAbstractService/delivery-control.oa.mjs';
import { message_delivery } from '../MTSAbstractService/message-delivery.oa.mjs';
import { report_delivery } from '../MTSAbstractService/report-delivery.oa.mjs';
import { id_pt_delivery } from '../MTSObjectIdentifiers/id-pt-delivery.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
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

/* eslint-enable */
