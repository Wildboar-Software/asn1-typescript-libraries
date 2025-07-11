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
import { origination } from '../EDIMSAbstractService/origination.oa.mjs';
import { reception } from '../EDIMSAbstractService/reception.oa.mjs';
import { type CONTRACT } from '@wildboar/rose';
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

/* eslint-enable */
