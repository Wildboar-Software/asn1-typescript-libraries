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
import { origination } from '../IPMSAbstractService/origination.oa.mjs';
import { reception } from '../IPMSAbstractService/reception.oa.mjs';
import { management } from '../IPMSAbstractService/management.oa.mjs';
import { CONTRACT } from '@wildboar/rose';
/**
 * @summary ipms_access_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipms-access-contract CONTRACT ::= {
 *   INITIATOR CONSUMER OF  {origination | reception | management}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const ipms_access_contract: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&InitiatorConsumerOf': [
        origination,
        reception,
        management,
    ] /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
