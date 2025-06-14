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
import { mta_transfer } from '../MTAAbstractService/mta-transfer.oa.mjs';
import { id_ot_mta } from '../MTSObjectIdentifiers/id-ot-mta.va.mjs';
import { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION mta */
/**
 * @summary mta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta MHS-OBJECT ::= {BOTH  {mta-transfer}
 *                     ID    id-ot-mta
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const mta: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&InitiatesAndResponds': [mta_transfer] /* OBJECT_FIELD_SETTING */,
    '&id': id_ot_mta /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mta */

/* eslint-enable */
