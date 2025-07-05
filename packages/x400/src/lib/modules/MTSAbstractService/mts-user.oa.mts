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
import { mts_access_contract } from '../MTSAbstractService/mts-access-contract.oa.mjs';
import { mts_forced_access_contract } from '../MTSAbstractService/mts-forced-access-contract.oa.mjs';
import { id_ot_mts_user } from '../MTSObjectIdentifiers/id-ot-mts-user.va.mjs';
import { type MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/**
 * @summary mts_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-user MHS-OBJECT ::= {
 *   INITIATES  {mts-access-contract}
 *   RESPONDS   {mts-forced-access-contract}
 *   ID         id-ot-mts-user
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const mts_user: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Initiates': [mts_access_contract] /* OBJECT_FIELD_SETTING */,
    '&Responds': [mts_forced_access_contract] /* OBJECT_FIELD_SETTING */,
    '&id': id_ot_mts_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
