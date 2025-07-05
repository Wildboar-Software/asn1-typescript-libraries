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
import { retrieval_88 } from '../MSAbstractService/retrieval-88.oa.mjs';
import { submission } from '../MTSAbstractService/submission.oa.mjs';
import { administration_88 } from '../MTSAbstractService88/administration-88.oa.mjs';
import { id_crt_ms_access_88 } from '../MSObjectIdentifiers/id-crt-ms-access-88.va.mjs';
import { type CONTRACT } from '@wildboar/rose';
/**
 * @summary ms_access_contract_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-access-contract-88 CONTRACT ::= {
 *   CONNECTION             ms-connect -- with all 1994 extensions omitted
 *   INITIATOR CONSUMER OF  {retrieval-88 | submission | administration-88}
 *   ID                     id-crt-ms-access-88
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const ms_access_contract_88: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': ms_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorConsumerOf': [
        retrieval_88,
        submission,
        administration_88,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_crt_ms_access_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
