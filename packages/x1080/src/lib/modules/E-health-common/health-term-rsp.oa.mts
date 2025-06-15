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
import {
    E_terminateResponse,
    _decode_E_terminateResponse,
    _encode_E_terminateResponse,
} from '../E-health-common/E-terminateResponse.ta.mjs';
import { id_health_term_rsp } from '../E-health-common/id-health-term-rsp.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_term_rsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-term-rsp CONTENT-TYPE ::= {
 *                 E-terminateResponse
 *   IDENTIFIED BY id-health-term-rsp }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_terminateResponse>}
 * @implements {CONTENT_TYPE<E_terminateResponse>}
 */
export const health_term_rsp: CONTENT_TYPE<E_terminateResponse> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_terminateResponse,
    },
    encoderFor: {
        '&Type': _encode_E_terminateResponse,
    },
    '&id': id_health_term_rsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
