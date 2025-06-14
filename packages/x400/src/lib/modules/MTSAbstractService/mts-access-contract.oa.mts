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
import { mts_connect } from '../MTSAbstractService/mts-connect.oa.mjs';
import { submission } from '../MTSAbstractService/submission.oa.mjs';
import { delivery } from '../MTSAbstractService/delivery.oa.mjs';
import { administration } from '../MTSAbstractService/administration.oa.mjs';
import { id_ct_mts_access } from '../MTSObjectIdentifiers/id-ct-mts-access.va.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mts_access_contract */
/**
 * @summary mts_access_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-access-contract CONTRACT ::= {
 *   CONNECTION             mts-connect
 *   INITIATOR CONSUMER OF  {submission | delivery | administration}
 *   ID                     id-ct-mts-access
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mts_access_contract: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mts_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorConsumerOf': [
        submission,
        delivery,
        administration,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_ct_mts_access /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_access_contract */

/* eslint-enable */
