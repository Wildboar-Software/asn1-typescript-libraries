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
import { delivery_88 } from '../MTSAbstractService88/delivery-88.oa.mjs';
import { administration_88 } from '../MTSAbstractService88/administration-88.oa.mjs';
import { id_ct_mts_forced_access } from '../MTSObjectIdentifiers/id-ct-mts-forced-access.va.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mts_forced_access_contract_88 */
/**
 * @summary mts_forced_access_contract_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-forced-access-contract-88 CONTRACT ::= {
 *   CONNECTION             mts-connect
 *   RESPONDER CONSUMER OF  {submission | delivery-88 | administration-88}
 *   ID                     {id-ct-mts-forced-access  88}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const mts_forced_access_contract_88: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&connection': mts_connect /* OBJECT_FIELD_SETTING */,
    '&InitiatorSupplierOf': [
        submission,
        delivery_88,
        administration_88,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [88],
        id_ct_mts_forced_access
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_forced_access_contract_88 */

/* eslint-enable */
