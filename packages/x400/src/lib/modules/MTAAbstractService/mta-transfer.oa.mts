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
import { mta_connect } from '../MTAAbstractService/mta-connect.oa.mjs';
import { transfer } from '../MTAAbstractService/transfer.oa.mjs';
import { id_ct_mta_transfer } from '../MTSObjectIdentifiers/id-ct-mta-transfer.va.mjs';
import { type CONTRACT } from '@wildboar/rose';
/**
 * @summary mta_transfer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-transfer CONTRACT ::= {
 *   CONNECTION     mta-connect
 *   OPERATIONS OF  {transfer}
 *   ID             id-ct-mta-transfer
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mta_transfer: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mta_connect /* OBJECT_FIELD_SETTING */,
    '&OperationsOf': [transfer] /* OBJECT_FIELD_SETTING */,
    '&id': id_ct_mta_transfer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
