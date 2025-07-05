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
import { ipms_access_contract } from '../IPMSFunctionalObjects/ipms-access-contract.oa.mjs';
import { id_ot_ipms } from '../IPMSObjectIdentifiers/id-ot-ipms.va.mjs';
import { type MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/**
 * @summary ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipms MHS-OBJECT ::= {RESPONDS  {ipms-access-contract}
 *                      ID        id-ot-ipms
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const ipms: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Responds': [ipms_access_contract] /* OBJECT_FIELD_SETTING */,
    '&id': id_ot_ipms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
