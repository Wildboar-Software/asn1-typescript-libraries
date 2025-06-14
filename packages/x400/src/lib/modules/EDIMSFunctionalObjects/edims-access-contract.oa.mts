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
import { origination } from '../EDIMSAbstractService/origination.oa.mjs';
import { reception } from '../EDIMSAbstractService/reception.oa.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
/* START_OF_SYMBOL_DEFINITION edims_access_contract */
/**
 * @summary edims_access_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edims-access-contract CONTRACT ::= {
 *   INITIATOR CONSUMER OF  {origination | reception}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const edims_access_contract: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&InitiatorConsumerOf': [origination, reception] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edims_access_contract */

/* eslint-enable */
