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
import { delivery_88 } from '../MTSAbstractService88/delivery-88.oa.mjs';
import { administration_88 } from '../MTSAbstractService88/administration-88.oa.mjs';
import { id_ct_mts_access } from '../MTSObjectIdentifiers/id-ct-mts-access.va.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/**
 * @summary mts_access_contract_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-access-contract-88 CONTRACT ::= {
 *   CONNECTION             mts-connect
 *   INITIATOR CONSUMER OF  {submission | delivery-88 | administration-88}
 *   ID                     {id-ct-mts-access  88}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mts_access_contract_88: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mts_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorConsumerOf': [
        submission,
        delivery_88,
        administration_88,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [88],
        id_ct_mts_access
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
