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
import { ms_connect } from '../MSAbstractService/ms-connect.oa.mjs';
import { retrieval } from '../MSAbstractService/retrieval.oa.mjs';
import { ms_submission } from '../MSAbstractService/ms-submission.oa.mjs';
import { administration } from '../MTSAbstractService/administration.oa.mjs';
import { id_crt_ms_access_94 } from '../MSObjectIdentifiers/id-crt-ms-access-94.va.mjs';
import { CONTRACT } from '@wildboar/rose';
/**
 * @summary ms_access_contract_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-access-contract-94 CONTRACT ::= {
 *   CONNECTION             ms-connect
 *   INITIATOR CONSUMER OF  {retrieval | ms-submission | administration}
 *   ID                     id-crt-ms-access-94
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const ms_access_contract_94: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': ms_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorConsumerOf': [
        retrieval,
        ms_submission,
        administration,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_crt_ms_access_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
