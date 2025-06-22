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
    E_setupRequest,
    _decode_E_setupRequest,
    _encode_E_setupRequest,
} from '../E-health-common/E-setupRequest.ta.mjs';
import { id_health_setup_req } from '../E-health-common/id-health-setup-req.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_setup_req
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-setup-req CONTENT-TYPE ::= {
 *                  E-setupRequest
 *   IDENTIFIED BY  id-health-setup-req }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_setupRequest>}
 * @implements {CONTENT_TYPE<E_setupRequest>}
 */
export const health_setup_req: CONTENT_TYPE<E_setupRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_setupRequest,
    },
    encoderFor: {
        '&Type': _encode_E_setupRequest,
    },
    '&id': id_health_setup_req /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
