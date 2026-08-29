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
import {
    E_terminateRequest,
    _decode_E_terminateRequest,
    _encode_E_terminateRequest,
} from '../E-health-common/E-terminateRequest.ta.mjs';
import { id_health_term_req } from '../E-health-common/id-health-term-req.va.mjs';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_term_req
 * @description
 *
 * CMS `CONTENT-TYPE` for requesting session release. Identified
 * by `id-health-term-req`. ITU-T Rec. X.1080.1 (05/2018)
 * [§11.2.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I),
 * §7.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-term-req CONTENT-TYPE ::= {
 *                 E-terminateRequest
 *   IDENTIFIED BY id-health-term-req }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_terminateRequest>}
 * @implements {CONTENT_TYPE<E_terminateRequest>}
 */
export const health_term_req: CONTENT_TYPE<E_terminateRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_terminateRequest,
    },
    encoderFor: {
        '&Type': _encode_E_terminateRequest,
    },
    '&id': id_health_term_req /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
