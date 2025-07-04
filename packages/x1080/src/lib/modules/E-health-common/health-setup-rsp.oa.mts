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
    E_setupResponse,
    _decode_E_setupResponse,
    _encode_E_setupResponse,
} from '../E-health-common/E-setupResponse.ta.mjs';
import { id_health_setup_rsp } from '../E-health-common/id-health-setup-rsp.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_setup_rsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-setup-rsp CONTENT-TYPE ::= {
 *                  E-setupResponse
 *   IDENTIFIED BY  id-health-setup-rsp }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_setupResponse>}
 * @implements {CONTENT_TYPE<E_setupResponse>}
 */
export const health_setup_rsp: CONTENT_TYPE<E_setupResponse> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_setupResponse,
    },
    encoderFor: {
        '&Type': _encode_E_setupResponse,
    },
    '&id': id_health_setup_rsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
