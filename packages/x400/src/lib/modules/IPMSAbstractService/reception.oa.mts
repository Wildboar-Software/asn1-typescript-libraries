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
import { receive_report } from '../IPMSAbstractService/receive-report.oa.mjs';
import { receive_ipm } from '../IPMSAbstractService/receive-ipm.oa.mjs';
import { receive_rn } from '../IPMSAbstractService/receive-rn.oa.mjs';
import { receive_nrn } from '../IPMSAbstractService/receive-nrn.oa.mjs';
import { receive_on } from '../IPMSAbstractService/receive-on.oa.mjs';
import { id_pt_reception } from '../IPMSObjectIdentifiers/id-pt-reception.va.mjs';
import { type PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary reception
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reception PORT ::= {
 *   SUPPLIER INVOKES
 *     {receive-report | receive-ipm | receive-rn | receive-nrn | receive-on}
 *   ID                id-pt-reception
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const reception: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Consumer': [
        receive_report,
        receive_ipm,
        receive_rn,
        receive_nrn,
        receive_on,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_reception /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
