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
import { mts_access_contract_88 } from '../MTSAbstractService88/mts-access-contract-88.oa.mjs';
import { mts_forced_access_contract_88 } from '../MTSAbstractService88/mts-forced-access-contract-88.oa.mjs';
import { id_ot_mts_user } from '../MTSObjectIdentifiers/id-ot-mts-user.va.mjs';
import { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/**
 * @summary mts_user_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-user-88 MHS-OBJECT ::= {
 *   INITIATES  {mts-access-contract-88}
 *   RESPONDS   {mts-forced-access-contract-88}
 *   ID         {id-ot-mts-user  88}
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const mts_user_88: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Initiates': [mts_access_contract_88] /* OBJECT_FIELD_SETTING */,
    '&Responds': [mts_forced_access_contract_88] /* OBJECT_FIELD_SETTING */,
    '&id': _OID.fromParts(
        [88],
        id_ot_mts_user
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
