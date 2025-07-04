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
import { mts_connect } from '../MTSAbstractService/mts-connect.oa.mjs';
import { submission } from '../MTSAbstractService/submission.oa.mjs';
import { delivery } from '../MTSAbstractService/delivery.oa.mjs';
import { administration } from '../MTSAbstractService/administration.oa.mjs';
import { id_ct_mts_forced_access } from '../MTSObjectIdentifiers/id-ct-mts-forced-access.va.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/**
 * @summary mts_forced_access_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-forced-access-contract CONTRACT ::= {
 *   CONNECTION             mts-connect
 *   RESPONDER CONSUMER OF  {submission | delivery | administration}
 *   ID                     id-ct-mts-forced-access
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mts_forced_access_contract: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mts_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorSupplierOf': [
        submission,
        delivery,
        administration,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_ct_mts_forced_access /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
