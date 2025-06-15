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
import { edims_access_contract } from '../EDIMSFunctionalObjects/edims-access-contract.oa.mjs';
import { id_ot_edims } from '../EDIMSObjectIdentifiers/id-ot-edims.va.mjs';
import { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/**
 * @summary edims
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edims MHS-OBJECT ::= {RESPONDS  {edims-access-contract}
 *                       ID        id-ot-edims
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const edims: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Responds': [edims_access_contract] /* OBJECT_FIELD_SETTING */,
    '&id': id_ot_edims /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
