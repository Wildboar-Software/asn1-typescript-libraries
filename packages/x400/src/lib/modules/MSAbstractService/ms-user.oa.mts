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
import { ms_access_contract_88 } from '../MSAbstractService/ms-access-contract-88.oa.mjs';
import { ms_access_contract_94 } from '../MSAbstractService/ms-access-contract-94.oa.mjs';
import { id_ot_ms_user } from '../MSObjectIdentifiers/id-ot-ms-user.va.mjs';
import { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/**
 * @summary ms_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-user MHS-OBJECT ::= {
 *   INITIATES  {ms-access-contract-88 | ms-access-contract-94}
 *   ID         id-ot-ms-user
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const ms_user: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Initiates': [
        ms_access_contract_88,
        ms_access_contract_94,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_ot_ms_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
