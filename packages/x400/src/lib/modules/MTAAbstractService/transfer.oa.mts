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
import { message_transfer } from '../MTAAbstractService/message-transfer.oa.mjs';
import { probe_transfer } from '../MTAAbstractService/probe-transfer.oa.mjs';
import { report_transfer } from '../MTAAbstractService/report-transfer.oa.mjs';
import { id_pt_transfer } from '../MTSObjectIdentifiers/id-pt-transfer.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary transfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * transfer PORT ::= {
 *   OPERATIONS  {message-transfer | probe-transfer | report-transfer}
 *   ID          id-pt-transfer
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const transfer: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [
        message_transfer,
        probe_transfer,
        report_transfer,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
